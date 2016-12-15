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
  - [quotation\_item_list](#quotation%5C_item_list)
- [Cache](#cache)
  - [vid-qid](#vid-qid)
  - [quotation-entities](#quotation-entities)
- [External Queue](#external-queue)
- [API](#api)
  - [createQuotation](#createquotation)
      - [request](#request)
      - [response](#response)
  - [getQuotation](#getquotation)
      - [request](#request-1)
      - [response](#response-1)
  - [getQuotationByVid](#getquotationbyvid)
      - [request](#request-2)
      - [response](#response-2)
  - [refresh](#refresh)
      - [request](#request-3)
      - [response](#response-3)
  - [getAccurateQuotation](#getaccuratequotation)
      - [request](#request-4)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# ChangeLog

1. 2016-12-15
  * 删除 vin-qid 索引
  * 删除 createQuotation 中的 vin 参数

1. 2016-12-12
  * 删除 getQuotatedQuotations
  * 删除 getUnquotatedQuotations
  * 删除 getQuotations
  * 删除 getTicket
  * 删除 newMessageNotify
  * 删除 addQuotationGroups
  * 删除 unquotated-quotations 缓存
  * 删除 quotated-quotations 缓存
  * Rename VIN-quotation to vin-qid
  * 删除 quotation\_items
  * 删除 quotation\_item_prices
  * 删除 quotation\_item_prices
  * 增加 quotation\_item_list

1. 2016-12-08
  * 增加 vid-qid 外键
  * 增加 getQuotationByVid
  * 增加 getAccurateQuotation

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

| field              | type          | null | default | index   | reference |
| ----               | ----          | ---- | ----    | ----    | ----      |
| id                 | uuid          |      |         | primary |           |
| vid                | uuid          |      |         |         | vehicles  |
| state              | int           |      | 0       |         |           |
| created\_at        | timestamp     |      | now     |         |           |
| updated\_at        | timestamp     |      | now     |         |           |
| outside_quotation1 | real          |      | 0.0     |         |           |
| outside_quotation2 | real          |      | 0.0     |         |           |
| screenshot1        | varchar(1024) | ✓    |         |         |           |
| screenshot2        | varchar(1024) | ✓    |         |         |           |
| pid                | uuid          |      |         |         | plans     |
| total\_price       | real          |      |         |         |           |
| fu\_total\_price   | real          |      |         |         |           |
| insure             | smallint      |      |         |         |           |
| auto               | smallint      |      |         |         |           |

## quotation\_item_list

| field          | type      | null | default | index   | reference   |
| ----           | ----      | ---- | ----    | ----    | ----        |
| id             | uuid      |      |         | primary |             |
| piid           | uuid      |      |         |         | plan\_items |
| is\_must\_have | bool      |      | false   |         |             |
| price          | real      |      |         |         |             |
| num            | real      |      |         |         |             |
| unit           | char(16)  |      |         |         |             |
| real\_price    | real      |      |         |         |             |
| type           | smallint  |      |         |         |             |
| insure         | smallint  |      |         |         |             |
| created\_at    | timestamp |      | now     |         |             |
| updated\_at    | timestamp |      | now     |         |             |

# Cache

## vid-qid

| key             | type | value          | note                   |
| ----            | ---- | ----           | ----                   |
| vid-qid         | hash | vid => qid     | vehicle与quotation的外键 |

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

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note       |
| ---- | ----   | ----       |
| vid  | uuid   | 车辆 ID    |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("quotation", "createQuotation", vid)
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

## getQuotation

获取某个报价

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

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

## getQuotationByVid

通过vid获取某个报价

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name           | type    | note        |
| ----           | ----    | ----        |
| vid            | uuid    | vehicle ID  |

```javascript

let vid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getQuotationByVid", vid)
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

## refresh

刷新报价缓存

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note           |
| ---- | ---- | ----           |
| qid  | uuid | 报价 ID (可选) |

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

## getReferenceQuotation

通过车辆信息获取参考报价的商业险起期与交强险起期

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| licenseNumber | String(8)    | 车牌号, 京N3U419  |
| modelListOrder     | Number  | 车型信息列表序号，从 0 开始 |

```javascript

rpc.call("quotation", "getReferenceQuotation", "京N3U419", 14)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note |
| ---- | ---- | ---- |
| code | int  | 200  |
| data | JSON | 见下 |

data 字段解释

| name         | type       | note                                           |
| ----         | ----       | ----                                           |
| biBeginDate | String(20) | 商业险起期 2016-09-01 |
| ciBeginDate | String(20) | 交强险起期 2016-09-01 |

data 例：
```
{
    "biBeginDate": "2017-01-11",
    "ciBeginDate": "2017-01-11"
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

错误例：
```
{
    "code":400,
    "msg":"商业险起保日期(2016-12-15)距今超过90天"
}
```

## getAccurateQuotation

通过车辆信息获取精准报价

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| ownerName | String(32) |  车主姓名 张某某 |
| ownerID  | String(18) | 车主身份证号 429001198902024810 |
| ownerMobile  | String(11) | 车主手机号 18610077627 |
| licenseNumber | String(8)    | 车牌号, 京N3U419  |
| modelListOrder     | Number  | 车型信息列表序号，从 0 开始 |

#### 固定的参数，不用再传

| name           | type    | note     |
| ----           | ----    | ----     |
| isTrans  | String(2)  | 是否过户车 0 否,1 是,固定为 "0"|
| transDate | String(20) |  过户日期 null 或 2017-09-01，固定为 null  |
| cityCode  | String(6)  | 行驶城市代码 国标码,到二级城市, 固定为 "110100"，北京 |
| insurerCode | String(100) | 固定为 "ASTP"，永城保险公司  |


```javascript

rpc.call("quotation", "getAccurateQuotation", "110105196206130017", "周南", "18618495662", "京N3U419", 14)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note |
| ---- | ---- | ---- |
| code | int  | 200  |
| data | JSON | 见下 |

data 字段解释

| name         | type       | note                                           |
| ----         | ----       | ----                                           |
| msg          | String(80) | 返回信息,失败原因等信息                        |
| thpBizID     | String(36) | 请求方业务号,第三方业务唯一标识                |
| bizID        | String(36) | 智通引擎业务号,智通引擎业务唯一标识            |
| insurerCode  | String(20) | 保险人代码,详见文档最下方“保险人代码”          |
| channelCode  | String(32) | 渠道编码,由智通引擎提供(如: REQUESTER_SERVICE) |
| biBeginDate  | String(20) | 商业险起期,2016-09-01                          |
| biPremium    | String(20) | 商业险总保费,两位小数, 如:5000.00              |
| coverageList | JSON       | 商业险险别列表,详见”险别信息 coverage 说明”
| integr       | String(20) | al 积分,保险公司返的佣金,和人民币是 1:1 的关系 |
| ciBeginDate  | String(20) | 交强险起期,2016-09-01                          |
| ciPremium    | String(20) | 交强险保费,两位小数,如:950.00                  |
| carshipTax   | String(20) | 车船税金额,两位小数:如:200.00                  |
| state        | String(1)  | 0 请求状态,-失败;1-成功
| msgCode      | String(12) | 错误编码,8 位编码,State 为 0 时才有值          |
| purchasePrice | String | 参考价 |

其中， coverageList 结构如下，注意其格式，详见下例：

| name         | type       | note                                           |
| ----         | ----       | ----                                           |
| coverageCode  | String(20) | 险别代码, 详见文档最下方“险别代码” |
| coverageName  | String(100)| 险别名称, 如:机动车损失保险 |
| insuredAmount | String(10) | 保额,如无保额险别:”Y”投保,”N”:未投保;如有保额险别:具体金额,保留两位小数 (如:61460.80 或 0.00)|
| insuredPremium | String(10) | 保费 3427.00 |
| flag  | String(20) | 标识. 如下险别需要给定 flag 值,具体约定如下: 玻璃单独破碎险:1 是国产,2 是进口 ;修理期间费用补偿险:格式: ” 天,金额”,如:“1,50”表示 1 天 50 元钱;|
| modifiedPremium | string | 经公式运算后的报价 |

```
{
    "insurerCode": "APIC",
    "thpBizID": "20161213fuyuhintest",
    "bizID": "30500777",
    "biBeginDate": "2017-01-11",
    "biPremium": "4652.00",
    "state": "1",
    "msg": null,
    "channelCode": "YC_INSURE",
    "msgCode": null,
    "coverageList": {
        "A": {
            "coverageCode": "A",
            "coverageName": "机动车损失保险",
            "insuredAmount": "Y",
            "insuredPremium": "2393.00",
            "flag": null,
            "modifiedPremium": "1788.77"
        },
        "B": {
            "coverageCode": "B",
            "coverageName": "商业第三者责任险",
            "insuredAmount": "300000.00",
            "insuredPremium": "753.00",
            "flag": null,
            "modifiedPremium": {
                "5万": "372.81",
                "10万": "538.65",
                "15万": "613.58",
                "20万": "667.63",
                "30万": "753.00",
                "50万": "904.09",
                "100万": "1177.41"
            }
        },
        "F": {
            "coverageCode": "F",
            "coverageName": "玻璃单独破碎险",
            "insuredAmount": "Y",
            "insuredPremium": "305.00",
            "flag": null,
            "modifiedPremium": "198.25"
        },
        "FORCEPREMIUM": {
            "coverageCode": "FORCEPREMIUM",
            "coverageName": "交强险",
            "insuredAmount": "Y",
            "insuredPremium": "753.38",
            "flag": null,
            "modifiedPremium": "753.38"
        },
        "G1": {
            "coverageCode": "G1",
            "coverageName": "全车盗抢险",
            "insuredAmount": "Y",
            "insuredPremium": "679.00",
            "flag": null,
            "modifiedPremium": "537.77"
        },
        "X1": {
            "coverageCode": "X1",
            "coverageName": "发动机涉水损失险",
            "insuredAmount": "Y",
            "insuredPremium": "120.00",
            "flag": null,
            "modifiedPremium": "89.70"
        },
        "Z": {
            "coverageCode": "Z",
            "coverageName": "自燃损失险",
            "insuredAmount": "Y",
            "insuredPremium": "342.00",
            "flag": null,
            "modifiedPremium": "266.76"
        },
        "Z3": {
            "coverageCode": "Z3",
            "coverageName": "机动车损失保险无法找到第三方特约险",
            "insuredAmount": "Y",
            "insuredPremium": "60.00",
            "flag": null,
            "modifiedPremium": "39.00"
        },
        "Scratch3": {
            "coverageCode": "Scratch3",
            "coverageName": "车身划痕损失（3块漆)",
            "insuredAmount": "",
            "insuredPremium": "380",
            "flag": null,
            "modifiedPremium": "380"
        },
        "Scratch6": {
            "coverageCode": "Scratch6",
            "coverageName": "车身划痕损失（6块漆)",
            "insuredAmount": "",
            "insuredPremium": "551",
            "flag": null,
            "modifiedPremium": "551"
        }
    },
    "integral": "1371.68",
    "ciBeginDate": "2017-01-11",
    "ciPremium": "753.38",
    "carshipTax": "750.00",
    "spAgreement": [],
    "cIntegral": null,
    "bIntegral": null,
    "showCiCost": null,
    "showBiCost": null,
    "showSumIntegral": null,
    "purchasePrice": "260900"
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

