<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [quotation](#quotation)
  - [quotation-group](#quotation-group)
  - [quotation-item](#quotation-item)
  - [quotation-item-price](#quotation-item-price)
  - [quotation-item-quota](#quotation-item-quota)
  - [后台提醒](#%E5%90%8E%E5%8F%B0%E6%8F%90%E9%86%92)
- [Database](#database)
  - [quotations](#quotations)
  - [quotation\_groups](#quotation%5C_groups)
  - [quotation\_items](#quotation%5C_items)
  - [quotation\_item\_quotas](#quotation%5C_item%5C_quotas)
  - [quotation\_item\_prices](#quotation%5C_item%5C_prices)
- [Cache](#cache)
  - [VIN-quotation](#vin-quotation)
  - [unquotated-quotations](#unquotated-quotations)
  - [quotated-quotations](#quotated-quotations)
  - [quotation-entities](#quotation-entities)
- [External Queue](#external-queue)
- [API](#api)
  - [createQuotation](#createquotation)
      - [request](#request)
      - [response](#response)
  - [addQuotationGroups](#addquotationgroups)
      - [request](#request-1)
      - [response](#response-1)
  - [getQuotatedQuotations](#getquotatedquotations)
      - [request](#request-2)
      - [response](#response-2)
  - [getUnquotatedQuotations](#getunquotatedquotations)
      - [request](#request-3)
      - [response](#response-3)
  - [getQuotations](#getquotations)
      - [request](#request-4)
      - [response](#response-4)
  - [getQuotation](#getquotation)
      - [request](#request-5)
      - [response](#response-5)
  - [getTicket](#getticket)
      - [request](#request-6)
      - [response](#response-6)
  - [refresh](#refresh)
      - [request](#request-7)
      - [response](#response-7)
  - [newMessageNotify](#newmessagenotify)
      - [request](#request-8)
      - [response](#response-8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# ChangeLog

1. 2016-11-19
  * 增加 toc
  * 增加外部队列

# Data Structure

## quotation

| name    | type              | note         |
| ----    | ----              | ----         |
| id      | uuid              | 主键         |
| state   | int               | 报价状态     |
| groups  | [quotation-group] | 对应计划集合 |
| vehicle | vehicle           | 对应的车辆   |

报价的 ID 与 vehicle 的 ID 是一致的。

[![报价状态转换图](../img/quotation-states.png)](报价状态转换图)

## quotation-group

| name         | type             | note         |
| ----         | ----             | ----         |
| id           | uuid             | 主键         |
| plan         | plan             | 对应的计划   |
| is-must-have | boolean          | 是否必选     |
| items        | [quotation-item] | 包含的 items |

## quotation-item

| name         | type                   | note             |
| ----         | ----                   | ----             |
| id           | uuid                   | 主键             |
| item         | plan-item              | 对应的 plan-item |
| is-must-have | boolean                | 是否必选         |
| quotas       | [quotation-item-quota] | 限额列表         |
| prices       | [quotation-item-price] | 价格列表         |

注意，[quotation-item-quota] 中，大多数情况都是只有一个元素，甚至为空。只有第三者险有多个元素。
prices 的长度与 quotas 相同，其内部的元素与 quotas 一一对应。

## quotation-item-price

| name       | type  | note     |
| ----       | ----  | ----     |
| id         | uuid  | 主键     |
| price      | float | 原价     |
| real-price | float | 真实价格 |

## quotation-item-quota

| name | type   | note |
| ---- | ----   | ---- |
| id   | uuid   | 主键 |
| num  | float  | 数量 |
| unit | string | 单位 |

## 后台提醒

[![后台提醒状态](../img/new-message-states.svg)](后台提醒状态)

# Database

## quotations

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| vid         | uuid      |      |         |         | vehicles  |
| state       | int       |      | 0       |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

## quotation\_groups

| field          | type      | null | default | index   | reference  |
| ----           | ----      | ---- | ----    | ----    | ----       |
| id             | uuid      |      |         | primary |            |
| qid            | uuid      |      |         |         | quotations |
| pid            | uuid      |      |         |         | plans      |
| is\_must\_have | bool      |      | false   |         |            |
| created\_at    | timestamp |      | now     |         |            |
| updated\_at    | timestamp |      | now     |         |            |

## quotation\_items

| field          | type      | null | default | index   | reference         |
| ----           | ----      | ---- | ----    | ----    | ----              |
| id             | uuid      |      |         | primary |                   |
| qgid           | uuid      |      |         |         | quotation\_groups |
| piid           | uuid      |      |         |         | plan\_items       |
| is\_must\_have | bool      |      | false   |         |                   |
| created\_at    | timestamp |      | now     |         |                   |
| updated\_at    | timestamp |      | now     |         |                   |

## quotation\_item\_quotas

| field       | type      | null | default | index   | reference        |
| ----        | ----      | ---- | ----    | ----    | ----             |
| id          | uuid      |      |         | primary |                  |
| qiid        | uuid      |      |         |         | quotation\_items |
| number      | float     |      |         |         |                  |
| unit        | char(16)  |      |         |         |                  |
| sorted      | int       |      | 0       |         |                  |
| created\_at | timestamp |      | now     |         |                  |
| updated\_at | timestamp |      | now     |         |                  |

sorted 是元素在列表中的顺序

## quotation\_item\_prices

| field       | type      | null | default | index   | reference        |
| ----        | ----      | ---- | ----    | ----    | ----             |
| id          | uuid      |      |         | primary |                  |
| qiid        | uuid      |      |         |         | quotation\_items |
| price       | float     |      |         |         |                  |
| real\_price | float     |      |         |         |                  |
| sorted      | int       |      | 0       |         |                  |
| created\_at | timestamp |      | now     |         |                  |
| updated\_at | timestamp |      | now     |         |                  |

sorted 是元素在列表中的顺序

# Cache

## VIN-quotation

| key             | type | value          | note        |
| ----            | ---- | ----           | ----        |
| VIN-quotationID | hash | VIN => 报价 ID | VIN下的报价 |

## unquotated-quotations

| key                   | type       | value                    | note       |
| ----                  | ----       | ----                     | ----       |
| unquotated-quotations | sorted set | (报价生成时间, 已报价ID) | 已报价汇总 |

## quotated-quotations

| key                 | type       | value                    | note       |
| ----                | ----       | ----                     | ----       |
| quotated-quotations | sorted set | (报价更新时间, 未报价ID) | 已报价汇总 |

## quotation-entities

| key                | type | value               | note         |
| ----               | ---- | ----                | ----         |
| quotation-entities | hash | 报价ID => 报价 JSON | 所有报价实体 |

# External Queue

当报价状态改变时，报价模块通过外部消息队列给分销系统提供对应的消息。

具体的内容见 [分销系统](http://git.fengchaohuzhu.com:10080/agent/document/src/master/doc/recommend.md#external-queue)

# API

## createQuotation

创建报价

#### request

| name | type   | note       |
| ---- | ----   | ----       |
| vid  | uuid   | 车辆 ID    |
| VIN  | string | 车辆 VIN码 |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let VIN = "LSVFA49J232037048"

rpc.call("quotation", "createQuotation", vid, VIN)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 408  | 请求超时          |
| 500  | 未知错误          |

See [example](../data/quotation/createQuotation.json)


## addQuotationGroups

增加报价组

**不能从 mobile 域调用!**

#### request

| name      | type    | note     |
| ----      | ----    | ----     |
| qid       | uuid    | 报价 ID  |
| vid       | uuid    | 计划 ID  |
| groups    | [group] | 报价组   |
| promotion | number] | 促销价格 |

```javascript
let qid = "00000000-0000-0000-0000-000000000000";
let vid = "00000000-0000-0000-0000-000000000000";
let groups = [];
let promotion = 0;

rpc.call("quotation", "addQuotationGroups", qid, vid, groups, promotion)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/addQuotationGroup.json)

## getQuotatedQuotations

获取已报价

#### request

| name        | type   | note         |
| ----        | ----   | ----         |
| start       | number | 起始记录     |
| limit       | number | 每页显示条数 |
| max         | number | 记最大录数   |
| nowScore    | number | 当前score    |
| vin         | string | 车辆 VIN码   |
| ownername   | string | 车主姓名     |
| phone       | string | 车主电话     |
| license\_no | string | 车牌号       |
| begintime   | string | 开始时间     |
| endtime     | string | 结束时间     |
| state       | string | 报价状态     |

```javascript
let start = 0;
let limit = 10;
let maxScore = (new Date()).getTime();
let nowScore = (new Date()).getTime();
let vin = "WBAZV4109BL817920";
let ownername = "张三";
let phone = "18141912911";
let license_no = "京8903T";
let begintime = "2016/11/15";
let endtime = "2016/11/15";
let state = 1;

rpc.call("quotation", "getQuotatedQuotations", start, limit, maxScore, nowScore, vin, ownername, phone, license_no, begintime, endtime, state)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getQuotatedQuotations.json)

## getUnquotatedQuotations

获取未报价

#### request

| name        | type   | note         |
| ----        | ----   | ----         |
| start       | number | 起始记录     |
| limit       | number | 每页显示条数 |
| max         | number | 记最大录数   |
| nowScore    | number | 当前score    |
| vin         | string | 车辆 VIN码   |
| ownername   | string | 车主姓名     |
| phone       | string | 车主电话     |
| license\_no | string | 车牌号       |
| begintime   | string | 开始时间     |
| endtime     | string | 结束时间     |
| state       | string | 报价状态     |

```javascript
let start = 0;
let limit = 10;
let maxScore = (new Date()).getTime();
let nowScore = (new Date()).getTime();
let vin = "WBAZV4109BL817920";
let ownername = "张三";
let phone = "18141912911";
let license_no = "京8903T";
let begintime = "2016/11/15";
let endtime = "2016/11/15";
let state = 1;


rpc.call("quotation", "getUnquotatedQuotations", start, limit, maxScore, nowScore, vin, ownername, phone, license_no, begintime, endtime, state)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getUnquotatedQuotations.json)

## getQuotations

获取所有报价

#### request

| name           | type    | note     |
| ----           | ----    | ----     |

```javascript

rpc.call("quotation", "getQuotations")
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getQuotations.json)

## getQuotation

获取某个报价

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| qid            | uuid    | 报价 ID  |

```javascript

let qid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getQuotation", qid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getQuotation.json)

## getTicket

获取二维码

#### request

| name | type | note    |
| ---- | ---- | ----    |
| oid  | uuid | 订单 ID |

```javascript

let oid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getTicket", oid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getTicket.json)

## refresh

刷新报价缓存

**!!禁止前端调用！！**

#### request

| name    | type   | note    |
| ----    | ----   | ----    |

Example

```javascript

rpc.call("quotation", "refresh")
  .then(function (result) {

  }, function (error) {

  });
```
#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/quotation/sucessful.json)

## newMessageNotify

后台提醒

#### request

```javascript

rpc.call("quotation", "newMessageNotify")
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | Success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/newMessageNotify.json)

## getAccurateQuotation1

通过车辆信息获取精准报价

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| ownerName | String(32) |  车主姓名 张某某 |
| ownerID  | String(18) | 车主身份证号 429001198902024810 |
| ownerMobile  | String(11) | 车主手机号 18610077627 |
| carInfo            | JSON    | getCarInfoByLicense 接口返回的对象  |
| modelListOrder     | Number  | 车型信息列表序号，从 0 开始 |
| isTrans  | String(2)  | 是否过户车 0 否,1 是 |
| transDate | String(20) |  过户日期 null 或 2017-09-01 |
| cityCode  | String(6)  | 行驶城市代码 国标码,到二级城市,371200 |
| insurerCodeForRef  | String(100) | 参考报价保险人代码，测试填 YGBX  |
| insurerCodeForAcc  | String(100) | 精准报价保险人代码，测试填 ASTP  |

```javascript

let qid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getAccurateQuotation1", "130684199006080073", "来看待", "15210520502", {"responseNo":"97c75995-0dd0-45d1-ad03-cf42396410a7","engineNo":"870**86","licenseNo":"豫JCC522","frameNo":"LSGPC52****013740","firstRegisterDate":"2011-01-14","modelList":{"state":"1","msg":"success","msgCode":null,"data":[{"vehicleFgwCode":"SGM7150DMAA","brandCode":"3fe5c096-a157-4b69-8917-b2f168fbd571","brandName":"上汽通用雪佛兰","engineDesc":"1.5L","familyName":"科鲁兹","gearboxType":"手动档","remark":"手动档经典版SE国Ⅴ","newCarPrice":"85900","purchasePriceTax":"89571","importFlag":"1","purchasePrice":"85900","seat":"5","standardName":"雪佛兰SGM7150DMAA轿车","vehicleFgwName":null,"parentVehName":null},{"vehicleFgwCode":"SGM7150DMAA","brandCode":"563e87a3-3109-4d38-a330-db45be35d673","brandName":"上汽通用雪佛兰","engineDesc":"1.5L","familyName":"科鲁兹","gearboxType":"手动档","remark":"手动档经典版SL国Ⅴ","newCarPrice":"75900","purchasePriceTax":"79144","importFlag":"1","purchasePrice":"75900","seat":"5","standardName":"雪佛兰SGM7150DMAA轿车","vehicleFgwName":null,"parentVehName":null}]}}, 0, "0", null, "371200", "YGBX", "ASTP")
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | JSON | 见下 |

data 字段解释

| name | type   | note    |
| ---- | ----   | ----    |
| msg | String(80)  |  返回信息,失败原因等信息 |
| thpBizID  | String(36)  | 请求方业务号,第三方业务唯一标识 |
| bizID  | String(36)  | 智通引擎业务号,智通引擎业务唯一标识 |
| insurerCode  | String(20)  | 保险人代码,详见文档最下方“保险人代码” |
| channelCode | String(32)  |  渠道编码,由智通引擎提供(如: REQUESTER_SERVICE) |
| biBeginDate  | String(20)  | 商业险起期,2016-09-01 |
| biPremium  | String(20)  | 商业险总保费,两位小数, 如:5000.00 |
| coverageList | JSON | 商业险险别列表,详见”险别信息 coverage 说明”
| integr | String(20)  | al 积分,保险公司返的佣金,和人民币是 1:1 的关系 |
| ciBeginDate  | String(20)  | 交强险起期,2016-09-01 |
| ciPremium  | String(20)  | 交强险保费,两位小数,如:950.00 |
| carshipTax  | String(20)  | 车船税金额,两位小数:如:200.00 |
| state | String(1)   |0 请求状态,-失败;1-成功
| msgCode | String(12)  |  错误编码,8 位编码,State 为 0 时才有值 |


```
{
    "operType": "ACCPRICE",
    "msg": "精准报价",
    "sendTime": "2016-12-10 10:51:21",
    "sign": "23ff92kas820ss92k9s933jf209daqc13fsd",
    "data": {
        "applicationID": "QUNAR_SERVICE",
        "insurerCode": "YGBX",
        "cityCode": "371200",
        "responseNo": "97c75995-0dd0-45d1-ad03-cf42396410a7",
        "channelCode": null,
        "carInfo": {
            "licenseNo": "豫JCC522",
            "frameNo": "LSGPC52****013740",
            "modelCode": "3fe5c096-a157-4b69-8917-b2f168fbd571",
            "engineNo": "870**86",
            "isTrans": "0",
            "transDate": null,
            "registerDate": "2011-01-14"
        },
        "thpBizID": "20161207fuyuhintest",
        "personInfo": {
            "insuredID": "130684199006080073",
            "ownerName": "来看待",
            "ownerID": "130684199006080073",
            "ownerMobile": "15210520502",
            "insuredName": "来看待",
            "insuredMobile": "15210520502"
        },
        "coverageList": [
            {
                "coverageCode": "A",
                "coverageName": "机动车损失保险",
                "insuredAmount": "Y",
                "insuredPremium": null
            },
            {
                "coverageCode": "B",
                "coverageName": "商业第三者责任险",
                "insuredAmount": "50000",
                "insuredPremium": null
            },
            {
                "coverageCode": "B",
                "coverageName": "商业第三者责任险",
                "insuredAmount": "100000",
                "insuredPremium": null
            },
            {
                "coverageCode": "B",
                "coverageName": "商业第三者责任险",
                "insuredAmount": "150000",
                "insuredPremium": null
            },
            {
                "coverageCode": "B",
                "coverageName": "商业第三者责任险",
                "insuredAmount": "200000",
                "insuredPremium": null
            },
            {
                "coverageCode": "B",
                "coverageName": "商业第三者责任险",
                "insuredAmount": "300000",
                "insuredPremium": null
            },
            {
                "coverageCode": "G1",
                "coverageName": "全车盗抢险",
                "insuredAmount": "Y",
                "insuredPremium": null
            },
            {
                "coverageCode": "Z",
                "coverageName": "自燃损失险",
                "insuredAmount": "Y",
                "insuredPremium": null
            },
            {
                "coverageCode": "F",
                "coverageName": "玻璃单独破碎险",
                "insuredAmount": "Y",
                "insuredPremium": null
            },
            {
                "coverageCode": "FORCEPREMIUM",
                "coverageName": "交强险",
                "insuredAmount": "Y",
                "insuredPremium": null
            },
            {
                "coverageCode": "X1",
                "coverageName": "发动机涉水损失险",
                "insuredAmount": "Y",
                "insuredPremium": null
            }
        ]
    }
}
```

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 400  | 具体内容见返回的 msg |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/quotation/getQuotation.json)
