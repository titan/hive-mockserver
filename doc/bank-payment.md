<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [bank-payment](#bank-payment)
  - [ChangeLog](#changelog)
  - [Cache](#cache)
  - [API](#api)
    - [生成开户链接 generateUserRegisterUrl](#%E7%94%9F%E6%88%90%E5%BC%80%E6%88%B7%E9%93%BE%E6%8E%A5-generateuserregisterurl)
      - [request](#request)
      - [response](#response)
    - [生成充值链接 generateNetSaveUrl](#%E7%94%9F%E6%88%90%E5%85%85%E5%80%BC%E9%93%BE%E6%8E%A5-generatenetsaveurl)
      - [request](#request-1)
      - [response](#response-1)
    - [获得银行帐号 ID getCustomerId](#%E8%8E%B7%E5%BE%97%E9%93%B6%E8%A1%8C%E5%B8%90%E5%8F%B7-id-getcustomerid)
      - [request](#request-2)
      - [response](#response-2)
    - [生成绑卡链接 generateUserBindCardUrl](#%E7%94%9F%E6%88%90%E7%BB%91%E5%8D%A1%E9%93%BE%E6%8E%A5-generateuserbindcardurl)
      - [request](#request-3)
      - [response](#response-3)
    - [生成用户登录链接 generateUserLoginUrl](#%E7%94%9F%E6%88%90%E7%94%A8%E6%88%B7%E7%99%BB%E5%BD%95%E9%93%BE%E6%8E%A5-generateuserloginurl)
      - [request](#request-4)
      - [response](#response-4)
    - [生成自动投标计划链接 generateAutoTenderPlanUrl](#%E7%94%9F%E6%88%90%E8%87%AA%E5%8A%A8%E6%8A%95%E6%A0%87%E8%AE%A1%E5%88%92%E9%93%BE%E6%8E%A5-generateautotenderplanurl)
      - [request](#request-5)
      - [response](#response-5)
    - [生成余额查询链接(后台) generateQueryBalanceBgUrl](#%E7%94%9F%E6%88%90%E4%BD%99%E9%A2%9D%E6%9F%A5%E8%AF%A2%E9%93%BE%E6%8E%A5%E5%90%8E%E5%8F%B0-generatequerybalancebgurl)
      - [request](#request-6)
      - [response](#response-6)
    - [生成子账户查询链接(后台) generateQueryAcctsUrl](#%E7%94%9F%E6%88%90%E5%AD%90%E8%B4%A6%E6%88%B7%E6%9F%A5%E8%AF%A2%E9%93%BE%E6%8E%A5%E5%90%8E%E5%8F%B0-generatequeryacctsurl)
      - [request](#request-7)
      - [response](#response-7)
    - [生成交易状态查询链接 generateQueryTransStatUrl](#%E7%94%9F%E6%88%90%E4%BA%A4%E6%98%93%E7%8A%B6%E6%80%81%E6%9F%A5%E8%AF%A2%E9%93%BE%E6%8E%A5-generatequerytransstaturl)
      - [request](#request-8)
      - [response](#response-8)
    - [生成充值对账链接 generateSaveReconciliationUrl](#%E7%94%9F%E6%88%90%E5%85%85%E5%80%BC%E5%AF%B9%E8%B4%A6%E9%93%BE%E6%8E%A5-generatesavereconciliationurl)
      - [request](#request-9)
      - [response](#response-9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# bank-payment

## ChangeLog
1. 2016-10-14
  * 增加生成标的审核状态查询接口链接
  * 增加生成链接
  * 增加生成链接
  * 增加生成链接
  * 增加生成链接


  
1. 2016-10-11
  * 增加生成取现复核链接
  * 增加生成取现(页面)链接
  * 增加生成用户账户支付链接
  * 增加生成商户代取现接口链接
  * 增加生成标的信息录入接口链接
  * 增加生成标的信息补录输入接口链接

1. 2016-10-10
  * 删除生成自动投标计划状态查询链接接口
  * 新增自动投标计划状态查询接口
  * 增加生成自动扣款(还款)链接
  * 增加生成自动扣款转账(商户用)链接
  * 增加生成资金(货款)冻结链接
  * 增加生成资金(货款)解冻链接

1. 2016-10-05
  * 增加生成自动扣款(放款)链接。
  * 增加生成自动投标计划状态查询链接接口。

1. 2016-10-03
  * 增加参数验证。
  * 删除测试选项的默认状态。
  * 增加生成自动投标计划链接接口。
  * 增加生成企业开户链接接口。
  * 增加生成主动投标链接接口。
  * 增加生成自动投标链接接口。
  * 增加生成投标撤销链接接口。

1. 2016-09-28
  * 增加生成自动投标链接接口。
  * 删除生成自动投标链接接口。

1. 2016-09-26
  * 增加生成绑卡链接接口。
  * 增加生成登录链接接口。
  * 增加生成自动投标链接接口。
  * 增加生成余额查询链接(后台)接口。
  * 增加生成子账户查询链接(后台)接口。
  * 增加生成交易状态查询链接接口。
  * 增加生成充值对账链接接口。

1. 2016-09-25
  * 增加缓存设计。
  * 修改回调前端的 url。

1. 2016-09-24
  * 增加 getCustomerId 接口。

## Cache

| key            | type | value            | note                        |
| ----           | ---- | ----             | ----                        |
| bank-customers | hash | openid => custid | openid 与 custid 的对应关系 |

注意：openid 只有 25 个字节长。

## API

### 生成开户链接 generateUserRegisterUrl

生成跳转到汇付天下的用户开户链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| openid | char(25) | Open ID 的有效部分 |
| name   | char(50) | 用户姓名           |
| id-no  | char(30) | 用户身份证号       |
| phone  | char(11) | 用户手机号         |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UserRegister     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/register   |
| 测试 | http://dev.fengchaohuzhu.com/bank/register |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/RegisterCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/RegisterCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
let openid = "0000000000000000000000000";
let name = "丁一";
let idno = "010000194910010000";
let phone = "18800000000";

rpc.call("bank_payment", "generateUserRegisterUrl", openid, name, idno, phone)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUserRegisterUrl.json)

### 生成充值链接 generateNetSaveUrl

生成跳转到汇付天下的用户充值链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name         | type     | note                  |
| ----         | ----     | ----                  |
| customer-id  | char(16) | 汇付天下生成的用户 ID |
| order-id     | char(30) | 订单编号              |
| order-date   | char(8)  | 订单日期 YYYYMMDD     |
| trans-amount | char(14) | 交易金额 ###.##       |
| test         | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | NetSave          |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                      |
| ---- | ----                                      |
| 正式 | http://m.fengchaohuzhu.com/bank/netsave   |
| 测试 | http://dev.fengchaohuzhu.com/bank/netsave |

RetUrl:

| 场景 | 内容                                              |
| ---- | ----                                              |
| 正式 | http://m.fengchaohuzhu.com/bank/NetSaveCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/NetSaveCallback |

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
let customer_id = "0000000000000000";
let order_id = "000000000000000000000000000000";
let order_date = "20161001";
let trans_amount = "100.00";

rpc.call("bank_payment", "generateNetSaveUrl", customer_id, order_id, order_date, trans_amount)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateNetSaveUrl.json)

### 获得银行帐号 ID getCustomerId

获得已保存的银行帐号 ID 。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note          |
| ---- | ---- | ----          |
| uid  | uuid | 仅 admin 有效 |

```javascript

rpc.call("bank_payment", "getCustomerId")
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type     | note        |
| ---- | ----     | ----        |
| code | int      | 200         |
| cid  | char(16) | 银行帐号 ID |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning           |
| ---- | ----               |
| 404  | 银行帐号 ID 不存在 |
| 500  | 未知错误           |

See [example](../data/bank-payment/getCustomerId.json)

### 生成绑卡链接 generateUserBindCardUrl

生成跳转到汇付天下的用户绑卡链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                  |
| ----        | ----     | ----                  |
| customer-id | char(16) | 汇付天下生成的用户 ID |
| test        | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UserBindCard     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/bindcard   |
| 测试 | http://dev.fengchaohuzhu.com/bank/bindcard |

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
let customer_id = "0000000000000000";

rpc.call("bank_payment", "generateUserBindCardUrl", customer_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUserBindCardUrl.json)

### 生成用户登录链接 generateUserLoginUrl

生成跳转到汇付天下的用户登录链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                  |
| ----        | ----     | ----                  |
| customer-id | char(16) | 汇付天下生成的用户 ID |
| test        | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UserLogin        |
| MerCustId | 6000060004492053 |
| PageType  | 2                |
| ChkValue  | 签名             |

```javascript
let customer_id = "0000000000000000";

rpc.call("bank_payment", "generateUserLoginUrl", customer_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUserLoginUrl.json)

### 生成自动投标计划链接 generateAutoTenderPlanUrl

生成跳转到汇付天下的自动投标链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name            | type     | note                    |
| ----            | ----     | ----                    |
| customer-id     | char(16) | 汇付天下生成的用户 ID   |
| test            | boolean  | 是否开启测试模式        |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name           | value            |
| ----           | ----             |
| Version        | 10               |
| CmdId          | AutoTenderPlan   |
| MerCustId      | 6000060004492053 |
| TenderPlanType | 'W'              |
| RetUrl         | 见下面           |
| PageType       | 2                |
| ChkValue       | 签名             |

RetUrl:

| 场景 | 内容                                                     |
| ---- | ----                                                     |
| 正式 | http://m.fengchaohuzhu.com/bank/AutoTenderPlanCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/AutoTenderPlanCallback |

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
let customer_id = "0000000000000000";

rpc.call("bank_payment", "generateAutoTenderPlanUrl", customer_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateAutoTenderPlanUrl.json)

### 生成余额查询链接(后台) generateQueryBalanceBgUrl

生成跳转到汇付天下的余额查询链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                  |
| ----        | ----     | ----                  |
| customer-id | char(16) | 汇付天下生成的用户 ID |
| test        | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | QueryBalanceBg   |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |

```javascript
let customer_id = "0000000000000000";

rpc.call("bank_payment", "generateQueryBalanceBgUrl", customer_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateQueryBalanceBgUrl.json)

### 生成子账户查询链接(后台) generateQueryAcctsUrl

生成跳转到汇付天下的子账户查询链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                  |
| ----        | ----     | ----                  |
| test        | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | QueryAccts       |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |

```javascript

rpc.call("bank_payment", "generateQueryAcctsUrl")
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateQueryAcctsUrl.json)

### 生成交易状态查询链接 generateQueryTransStatUrl

生成跳转到汇付天下的用户充值链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name             | type     | note              |
| ----             | ----     | ----              |
| order-id         | char(30) | 订单编号          |
| order-date       | char(8)  | 订单日期 YYYYMMDD |
| query-trans-type | string   |                   |
| test             | boolean  | 是否开启测试模式  |

query-trans-type 取值如下：

| name      | meaning          |
| ----      | ----             |
| LOANS     | 放款交易查询     |
| REPAYMENT | 还款交易查询     |
| TENDER    | 投标交易查询     |
| CASH      | 取现交易查询     |
| FREEZE    | 冻结解冻交易查询 |


开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | QueryTransStat   |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |

```javascript
let order_id = "000000000000000000000000000000";
let order_date = "20161001";
let query_trans_type = "LOANS";

rpc.call("bank_payment", "generateQueryTransStatUrl", order_id, order_date, query_trans_type)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateQueryTransStatUrl.json)

### 生成充值对账链接 generateSaveReconciliationUrl

生成跳转到汇付天下的用户充值链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name       | type    | note              |
| ----       | ----    | ----              |
| begin-date | char(8) | 开始日期 YYYYMMDD |
| end-date   | char(8) | 结束日期 YYYYMMDD |
| page-num   | string  | 页数              |
| page-size  | string  | 每页记录数        |
| test       | boolean | 是否开启测试模式  |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value              |
| ----      | ----               |
| Version   | 10                 |
| CmdId     | SaveReconciliation |
| MerCustId | 6000060004492053   |
| ChkValue  | 签名               |

```javascript
let begin_date = "20161001";
let end_date = "20161031";
let page_num = "1";
let page_size = "20";

rpc.call("bank_payment", "generateSaveReconciliationUrl", begin_date, end_date, page_num, page_size)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateSaveReconciliationUrl.json)

### 生成企业开户链接 generateCorpRegisterUrl

生成企业开户链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| usrId | char(25) | 商户下的平台用户号 |
| usrName | char(25) | 用户的真实姓名 |
| BusiCode | char(30) | 营业执照编号 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | CorpRegister     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/CorpRegister   |
| 测试 | http://dev.fengchaohuzhu.com/bank/CorpRegister |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateCorpRegisterUrl", usrId, usrName, BusiCode, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateCorpRegisterUrl.json)


### 生成主动投标链接 generateInitiativeTenderUrl

生成主动投标链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| maxTenderRate | char(6) | 最大投资手续费率，数字,保留 2 位小数，测试环境取值范围 0.00<= MaxTenderRate <= 0.20 |
| borrowerDetails   | JSON Object | 借款人信息   |
| borrowerCustId   | char(16)  | 借款人客户号，BorrowerDetails 参数下的二级参数借款人客户号,由汇付生成,用户的唯一性标识  |
| borrowerAmt   | char(12)  | 借款金额，BorrowerDetails 参数下的二级参数借款金额   |
| borrowerRate   | char(6)  | 借款手续费率，BorrowerDetails 参数下的二级参数，数字,保留 2 位小数，测试环境取值范围 0.00<= BorrowerRate <=1.00   |
| proId   | char(16)  | 项目 ID，BorrowerDetails 参数下的二级参数必须标的的唯一性标识 |
| isFreeze   | char(1)  | 是否冻结，Y--冻结，N--不冻结 |
| freezeOrdId   | char(30)  | 冻结订单号，如果 IsFreeze 参数传 Y,那么该参数不能为空   |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | InitiativeTender     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl  | 见下面           |
| ChkValue  | 签名             |


RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/InitiativeTenderCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/InitiativeTenderCallback |


BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/initiativetender   |
| 测试 | http://dev.fengchaohuzhu.com/bank/initiativetender |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateCorpRegisterUrl", usrCustId, ordId, ordDate, transAmt, maxTenderRate, borrowerDetails, borrowerCustId, borrowerAmt, borrowerRate, proId, isFreeze, freezeOrdId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateInitiativeTenderUrl.json)


### 生成自动投标链接 generateAutoTenderUrl

生成自动投标链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| maxTenderRate | char(6) | 最大投资手续费率，数字,保留 2 位小数，测试环境取值范围 0.00<= MaxTenderRate <= 0.20 |
| borrowerDetails   | JSON Object | 借款人信息   |
| borrowerCustId   | char(16)  | 借款人客户号，BorrowerDetails 参数下的二级参数借款人客户号,由汇付生成,用户的唯一性标识  |
| borrowerAmt   | char(12)  | 借款金额，BorrowerDetails 参数下的二级参数借款金额   |
| borrowerRate   | char(6)  | 借款手续费率，BorrowerDetails 参数下的二级参数，数字,保留 2 位小数，测试环境取值范围 0.00<= BorrowerRate <=1.00   |
| proId   | char(16)  | 项目 ID，BorrowerDetails 参数下的二级参数必须标的的唯一性标识 |
| isFreeze   | char(1)  | 是否冻结，Y--冻结，N--不冻结 |
| freezeOrdId   | char(30)  | 冻结订单号，如果 IsFreeze 参数传 Y,那么该参数不能为空   |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | AutoTender     |
| MerCustId | 6000060004492053 |
| RetUrl    | 见下面           |
| BgRetUrl  | 见下面           |
| ChkValue  | 签名             |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/AutoTenderCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/AutoTenderCallback |


BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/autotender   |
| 测试 | http://dev.fengchaohuzhu.com/bank/autotender |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateCorpRegisterUrl", usrCustId, ordId, ordDate, transAmt, maxTenderRate, borrowerDetails, borrowerCustId, borrowerAmt, borrowerRate, proId, isFreeze, freezeOrdId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateAutoTenderUrl.json)


### 生成投标撤销链接 generateTenderCancleUrl

生成投标撤销链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| isUnFreeze   | char(1)  | 是否解冻，Y--冻结，N--不冻结 |
| unFreezeOrdId   | char(30)  | 解冻订单号，如果 IsUnFreeze 参数传 Y,那么该参数不能为空   |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | TenderCancle     |
| MerCustId | 6000060004492053 |
| RetUrl    | 见下面           |
| BgRetUrl  | 见下面           |
| ChkValue  | 签名             |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/TenderCancleCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/TenderCancleCallback |


BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/tendercancle   |
| 测试 | http://dev.fengchaohuzhu.com/bank/tendercancle |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateTenderCancleUrl", usrCustId, ordId, ordDate, transAmt, isUnFreeze, unFreezeOrdId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateTenderCancleUrl.json)

### 生成自动扣款(放款)链接 generateLoansUrl

生成自动扣款(放款)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| outCustId | char(16) | 出账客户号,由汇付生成,用户的唯一性标识 |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| fee | char(12) | 扣款手续费 |
| subOrdId | char(30) | 订单号,由商户的系统生成,必须保证唯一.如果本次交易从属于另一个交易流水,则需要通过填写该流水号来进行关联.例如:本次放款:商户流水号是 OrdId,日期是OrdDate,关联投标订单流水是 SubOrdId,日期是SubOrdDate |
| subOrdDate | char(8) | 订单日期,格式为 YYYYMMDD |
| inCustId | char(16) | 入账客户号,由汇付生成,用户的唯一性标识 |
| divDetails   | JSON Object | 分账账户串   |
| divCustId | char(16) | 分账商户号,DivDetails 参数下的二级参数 |
| divAcctId | varchar | 分账账户号,DivDetails 参数下的二级参数 |
| divAmt | varchar | 分账金额,保留两位小数,DivDetails 参数下的二级参数 |
| feeObjFlag | char(1) | 手续费收取对象标志,若 fee 大于 0.00,FeeObjFlag 为必填参数.I--向入款客户号 InCustId 收取;O--向出款客户号 OutCustId 收取 |
| isDefault | char(1) | Y--默认添加资金池:这部分资金需要商户调用商户代取现接口,帮助用户做后台取现动作;N--不默认不添加资金池:这部分资金用户可以自己取现 |
| isUnFreeze   | char(1)  | 是否解冻，Y--冻结，N--不冻结 |
| unFreezeOrdId   | char(30)  | 解冻订单号，如果 IsUnFreeze 参数传 Y,那么该参数不能为空   |
| freezeTrxId | char(18) | 冻结标识,组成规则为:8 位本平台日期+10 位系统流水号 |
| proId | char(16) | 项目 ID |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | Loans     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/loans   |
| 测试 | http://dev.fengchaohuzhu.com/bank/loans |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateLoansUrl", ordId, ordDate, outCustId, transAmt, isUnFreeze, unFreezeOrdId, fee, subOrdId, subOrdDate, inCustId, divCustId, divAcctId, divAmt, isDefault, isUnFreeze, proId true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateLoansUrl.json)


### 查询自动投标计划状态 queryTenderPlan

查询用户在汇付天下的自动投标计划状态。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                  |
| ----        | ----     | ----                  |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| test        | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | QueryTenderPlan   |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |

```javascript

rpc.call("bank_payment", "queryTenderPlan", usrCustId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 见下      |


| code | meanning |
| ---- | ----     |
| 200  | 正常 |
| 201  | 关闭 |
| 300  | 未定义 |
| 500  | 出错 |

See [example](../data/bank-payment/queryTenderPlan.json)

### 生成自动扣款(还款)链接 generateRepaymentUrl

生成自动扣款(还款)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| proId | char(16) | 标的 ID |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| outCustId | char(16) | 出账客户号,由汇付生成,用户的唯一性标识 |
| subOrdId | char(30) | 订单号,由商户的系统生成,必须保证唯一.如果本次交易从属于另一个交易流水,则需要通过填写该流水号来进行关联.例如:本次放款:商户流水号是 OrdId,日期是OrdDate,关联投标订单流水是 SubOrdId,日期是SubOrdDate |
| subOrdDate | char(8) | 订单日期,格式为 YYYYMMDD |
| outAcctId | char(9) | 出账子账户,用户在汇付的虚拟资金账户号 |
| principalAmt | char(14) | 还款本金 |
| interestAmt| char(14) | 还款利息 |
| fee | char(12) | 扣款手续费 |
| inCustId | char(16) | 入账客户号,由汇付生成,用户的唯一性标识 |
| inAcctId | char(9) | 入账子账户,用户在汇付的虚拟资金账户号 |
| divDetails   | JSON Object | 分账账户串   |
| divCustId | char(16) | 分账商户号,DivDetails 参数下的二级参数 |
| divAcctId | varchar | 分账账户号,DivDetails 参数下的二级参数 |
| divAmt | varchar | 分账金额,保留两位小数,DivDetails 参数下的二级参数 |
| feeObjFlag | char(1) | 手续费收取对象标志,若 fee 大于 0.00,FeeObjFlag 为必填参数.I--向入款客户号 InCustId 收取;O--向出款客户号 OutCustId 收取 |
| dzObject | char(16) | 垫资/代偿对象,如果是垫资还款必传 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | Repayment     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/Repayment   |
| 测试 | http://dev.fengchaohuzhu.com/bank/Repayment |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateRepaymentUrl", proId, ordId, ordDate, outCustId, subOrdId, subOrdDate, outAcctId, principalAmt, interestAmt, fee, inCustId, inAcctId, divDetails, divCustId, divAcctId, divAmt, feeObjFlag, dzObject, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateRepaymentUrl.json)


### 生成自动扣款转账(商户用)链接 generateTransferUrl

生成自动扣款转账(商户用)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| outCustId | char(16) | 出账客户号,由汇付生成,用户的唯一性标识 |
| outAcctId | char(9) | 出账子账户,用户在汇付的虚拟资金账户号 |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| inCustId | char(16) | 入账客户号,由汇付生成,用户的唯一性标识 |
| inAcctId | char(9) | 入账子账户,用户在汇付的虚拟资金账户号 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | Transfer     |
| MerCustId | 6000060004492053 |
| RetUrl  | 见下面           |
| ChkValue  | 签名             |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/TransferCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/TransferCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateTransferUrl", ordId, outCustId, outAcctId, transAmt, inCustId, inAcctId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateTransferUrl.json)


### 生成资金(货款)冻结链接 generateUsrFreezeBgUrl

生成资金(货款)冻结链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| subAcctType | char(9) | 子账户类型,默认为商户专属账户 |
| subAcctId | char(9) | 子账户号,用户在汇付的虚拟资金账户号 |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UsrFreezeBg     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/usrfreezebg   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usrfreezebg |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/UsrFreezeBgCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/UsrFreezeBgCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateUsrFreezeBgUrl", usrCustId, subAcctId, subAcctId, ordId, ordDate, transAmt, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUsrFreezeBgUrl.json)

### 生成资金(货款)解冻链接 generateUsrUnFreezeUrl

生成资金(货款)解冻链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD |
| trxId | char(18) | 汇付平台交易唯一标识,组成规则为:8位本平台日期+10位系统流水号 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UsrUnFreeze     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/usrunfreeze   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usrunfreeze |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/UsrUnFreezeCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/UsrUnFreezeCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateUsrUnFreezeUrl", ordId, ordDate, trxId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUsrUnFreezeUrl.json)

### 生成取现复核链接 generateCashAuditUrl

生成取现复核链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| auditFlag | char(1) | 复核标识,R--拒绝,S--复核通过 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | CashAudit     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/cashaudit   |
| 测试 | http://dev.fengchaohuzhu.com/bank/cashaudit |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/CashAuditCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/CashAuditCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateCashAuditUrl", ordId, usrCustId, transAmt, auditFlag, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateCashAuditUrl.json)

### 生成取现(页面)链接 generateCashUrl

生成取现(页面)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| servFee | char(14) | 商户收取服务费金额 |
| servFeeAcctId | char(9) | 商户子账户号,商户用来收取服务费的子账户号 |
| openAcctId | char(40) | 开户银行账号,取现银行的账户号(银行卡号) |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | Cash     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/cash   |
| 测试 | http://dev.fengchaohuzhu.com/bank/cash |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/CashCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/CashCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateCashUrl", ordId, usrCustId, transAmt, servFee, servFeeAcctId, openAcctId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateCashUrl.json)

### 生成用户账户支付链接 generateUsrAcctPayUrl

生成用户账户支付链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| inAcctId | char(9) | 入账子账户,用户在汇付的虚拟资金账户号 |
| inAcctType | char(9) | 入账账户类型,商户在汇付的虚拟资金子账户类型:BASEDT--基本借记户,DEP--保证金账户,MERDT--专属借记帐户,SPEDT--专用户 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | UsrAcctPay     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/usracctpay   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usracctpay |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/UsrAcctPayCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/UsrAcctPayCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateUsrAcctPayUrl", ordId, usrCustId, transAmt, inAcctId, inAcctType, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateUsrAcctPayUrl.json)

### 生成商户代取现接口链接 generateMerCashPayUrl

生成商户代取现接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| servFee | char(14) | 商户收取服务费金额 |
| servFeeAcctId | char(9) | 商户子账户号,商户用来收取服务费的子账户号 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | MerCash     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/mercash   |
| 测试 | http://dev.fengchaohuzhu.com/bank/mercash |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/MerCashCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/MerCashCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateMerCashUrl", ordId, usrCustId, transAmt, servFee, servFeeAcctId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateMerCashUrl.json)

### 生成标的信息录入接口链接 generateAddBidInfoUrl

生成标的信息录入接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| proId   | char(16)  | 标的的唯一标识, 为英文和数字组合 |
| bidName | char(50) | 标的名称 |
| BidType | char(2) | 标的类型: 01--信用, 02--抵押, 03--债权转让, 99--其他 | 
| BorrTotAmt | char(14) | 发标金额,单位为元,精确到分,例如 1000.01 |
| YearRate | char(14) | 发标年化利率,百分比,保留 2 位小数,例如 24.55 |
| RetInterest | char(16) | 应还款总利息,单位为元,精确到分,例如 1000.01 |
| LastRetDate | char(16) | 最后还款日期,格式 yyyymmdd |
| BidStartDate | char(14) | 计划投标开始日期,格式 yyyyMMddHHmmss |
| BidEndDate | char(14) | 计划投标截止日期,格式 yyyyMMddHHmmss |
| LoanPeriod | char(20) | 借款期限 | 例如:XX 天、XX 月、XX 年 |
| RetType | char(2) | 还款方式,01--一次还本付息,02--等额本金,03--等额本息,04--按期付息到期还本,99--其他 |
| RetDate | char(8) | 应还款日期,格式 yyyymmdd |
| GuarantType | char(2) | 本息保障,01--保本保息,02--保本不保息,03--不保本不保息 |
| BidProdType | char(2) | 标的产品类型, 01--房贷类,02--车贷类,03--收益权转让类,04--用贷款类,05--股票配资类,06--行承兑汇票,07--商业承兑汇票,08--消费贷款类,09--供应链类,99--其他 |
| RiskCtlType | char(2) | 风险控制方式,01--抵(质)押,02--共管账户,03--担保,04--用无担保,99--其他 |
| LimitMinBidAmt | char(7) | 限定最低投标份数,整数 |
| LimitBidSum | char(16) | 限定每份投标金额,单位为元,精确到分,例如 1000.01 |
| LimitMaxBidSum | char(16) | 限定最多投标金额,单位为元,精确到分,例如 1000.01 |
| LimitMinBidSum | char(16) | 限定最少投标金额,单位为元,精确到分,例如 1000.01 |
| BidPayforState | char(16) | 逾期是否垫资,1--是,2--否 |
| BorrType | char(1) | 借款人类型,01--个人,02--企业 |
| BorrCustId | char(16) | 借款人ID,借款人的唯一标识 |
| BorrName | char(50) | 借款人名称,文本,借款人真实姓名或者借款企业名称 |
| BorrBusiCode | char(30) | 借款企业营业执照编号,借款人类型为企业时为必填 |
| BorrCertType | cahr(2) | 借款人证件类型,00--身份证(暂只支持身份证),借款人类型为“01:个人”时为必须参数 |
| BorrCertId | char(18) | 借款人证件号码,借款人类型为“01:个人”时为必须参数 |
| BorrMobiPhone | char(11) | 借款人手机号码 |
| BorrPhone | char(12) | 借款人固定电话 |
| BorrWork | char(150) | 借款人工作单位,文本 |
| BorrWorkYear | char(3) | 借款人工作年限,单位为年,整数 |
| BorrIncome | char(16) | 借款人税后月收入,单位为元,保留 2 位小数 |
| BorrMarriage | char(1) | 借款人婚姻状况,Y--已婚,N--未婚 |
| ordId | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字 |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| transAmt | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| servFee | char(14) | 商户收取服务费金额 |
| servFeeAcctId | char(9) | 商户子账户号,商户用来收取服务费的子账户号 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | AddBidInfo     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/addbidinfo   |
| 测试 | http://dev.fengchaohuzhu.com/bank/addbidinfo |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/AddBidInfoCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/AddBidInfoCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateAddBidInfoUrl", proId, bidType,
  BorrTotAmt, YearRate, RetInterest, LastRetDate,
  BidStartDate, BidEndDate, RetType, RetDate, 
  GuarantType, BidProdType, RiskCtlType, LimitMinBidAmt, 
  LimitBidSum, LimitMaxBidSum, LimitMinBidSum, BidPayforState, BorrType,
  BorrCustId, BorrBusiCode, BorrCertType, BorrCertId,
  BorrMobiPhone, BorrPhone, BorrWorkYear, BorrIncome, BorrMarriage, BorrEmail, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generateAddBidInfoUrl.json)

### 生成标的信息补录输入接口链接 generateAddBidAttachInfoUrl

生成标的信息补录输入接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| proId   | char(16)  | 标的的唯一标识, 为英文和数字组合 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | AddBidAttachInfo     |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                       |
| ---- | ----                                       |
| 正式 | http://m.fengchaohuzhu.com/bank/addbidattachinfo   |
| 测试 | http://dev.fengchaohuzhu.com/bank/addbidattachinfo |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/AddBidAttachInfoCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/AddBidAttachInfoCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateAddBidAttachInfoUrl", proId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generatAddBidAttachInfoUrl.json)

### 生成标的审核状态查询接口链接 generateQueryBidInfoUrl

生成标的审核状态查询接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| proId   | char(16)  | 标的的唯一标识, 为英文和数字组合 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | QueryBidInfo     |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateQueryBidInfoUrl", proId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/generatQueryBidInfoUrl.json)

### 商户扣款对账 trfReconciliation

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| beginDate | char(8) | 开始日期 YYYYMMDD |
| endDate   | char(8) | 结束日期 YYYYMMDD,BeginDate 和 EndDate 日期跨度不能大于 90 天 |
| pageNum   | string  | 页数,查询数据的所在页号,>0 的整数 |
| pageSize  | string  | 每页记录数,查询数据的所在页号,>0 且<=1000 的整数 |
| test   | boolean  | 是否开启测试模式   |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | TrfReconciliation     |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "trfReconciliation", proId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| url  | string | 跳转链接 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/bank-payment/trfReconciliation.json)
