<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Cache](#cache)
- [API](#api)
  - [generateUserRegisterUrl](#generateuserregisterurl)
      - [request](#request)
      - [response](#response)
  - [generateNetSaveUrl](#generatenetsaveurl)
      - [request](#request-1)
      - [response](#response-1)
  - [getCustomerId](#getcustomerid)
      - [request](#request-2)
      - [response](#response-2)
  - [generateUserBindCardUrl](#generateuserbindcardurl)
      - [request](#request-3)
      - [response](#response-3)
  - [generateUserLoginUrl](#generateuserloginurl)
      - [request](#request-4)
      - [response](#response-4)
  - [generateAutoTenderPlanUrl](#generateautotenderplanurl)
      - [request](#request-5)
      - [response](#response-5)
  - [generateQueryBalanceBgUrl](#generatequerybalancebgurl)
      - [request](#request-6)
      - [response](#response-6)
  - [generateQueryAcctsUrl](#generatequeryacctsurl)
      - [request](#request-7)
      - [response](#response-7)
  - [generateQueryTransStatUrl](#generatequerytransstaturl)
      - [request](#request-8)
      - [response](#response-8)
  - [generateSaveReconciliationUrl](#generatesavereconciliationurl)
      - [request](#request-9)
      - [response](#response-9)
  - [generateCorpRegisterUrl](#generatecorpregisterurl)
      - [request](#request-10)
      - [response](#response-10)
  - [generateInitiativeTenderUrl](#generateinitiativetenderurl)
      - [request](#request-11)
      - [response](#response-11)
  - [generateAutoTenderUrl](#generateautotenderurl)
      - [request](#request-12)
      - [response](#response-12)
  - [generateTenderCancleUrl](#generatetendercancleurl)
      - [request](#request-13)
      - [response](#response-13)
  - [generateLoansUrl](#generateloansurl)
      - [request](#request-14)
      - [response](#response-14)
  - [queryTenderPlan](#querytenderplan)
      - [request](#request-15)
      - [response](#response-15)
  - [generateRepaymentUrl](#generaterepaymenturl)
      - [request](#request-16)
      - [response](#response-16)
  - [generateTransferUrl](#generatetransferurl)
      - [request](#request-17)
      - [response](#response-17)
  - [generateUsrFreezeBgUrl](#generateusrfreezebgurl)
      - [request](#request-18)
      - [response](#response-18)
  - [generateUsrUnFreezeUrl](#generateusrunfreezeurl)
      - [request](#request-19)
      - [response](#response-19)
  - [generateCashAuditUrl](#generatecashauditurl)
      - [request](#request-20)
      - [response](#response-20)
  - [generateCashUrl](#generatecashurl)
      - [request](#request-21)
      - [response](#response-21)
  - [generateUsrAcctPayUrl](#generateusracctpayurl)
      - [request](#request-22)
      - [response](#response-22)
  - [generateMerCashUrl](#generatemercashurl)
      - [request](#request-23)
      - [response](#response-23)
  - [generateAddBidInfoUrl](#generateaddbidinfourl)
      - [request](#request-24)
      - [response](#response-24)
  - [generateAddBidAttachInfoUrl](#generateaddbidattachinfourl)
      - [request](#request-25)
      - [response](#response-25)
  - [generateQueryBidInfoUrl](#generatequerybidinfourl)
      - [request](#request-26)
      - [response](#response-26)
  - [trfReconciliation](#trfreconciliation)
      - [request](#request-27)
      - [response](#response-27)
  - [reconciliation](#reconciliation)
      - [request](#request-28)
      - [response](#response-28)
  - [cashReconciliation](#cashreconciliation)
      - [request](#request-29)
      - [response](#response-29)
  - [generateQueryBalanceUrl](#generatequerybalanceurl)
      - [request](#request-30)
      - [response](#response-30)
  - [queryCardInfo](#querycardinfo)
      - [request](#request-31)
      - [response](#response-31)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog
1. 2016-10-16
  * 把 openid 改为 pnrid
  * update toc

1. 2016-10-14
  * 增加生成标的审核状态查询接口链接
  * 增加商户扣款对账接口
  * 增加放还款对账接口
  * 增加取现对账接口
  * 增加生成余额查询(页面)链接
  * 增加银行卡查询接口

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

# Cache

| key            | type | value           | note                       |
| ----           | ---- | ----            | ----                       |
| bank-customers | hash | pnrid => custid | pnrid 与 custid 的对应关系 |

# API

## generateUserRegisterUrl

生成跳转到汇付天下的用户开户链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type     | note               |
| ----  | ----     | ----               |
| pnrid | char(25) | PnR ID             |
| name  | char(50) | 用户姓名           |
| id-no | char(30) | 用户身份证号       |
| test  | boolean  | 是否开启测试模式   |

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
let pnrid = "0000000000000000000000000";
let name = "丁一";
let idno = "010000194910010000";

rpc.call("bank_payment", "generateUserRegisterUrl", pnrid, name, idno)
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

## generateNetSaveUrl

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

## getCustomerId

获得已保存的银行帐号 ID 。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note          |
| ---- | ---- | ----          |
| pnrid  | string | 汇付天下注册时用的Id |

```javascript

rpc.call("bank_payment", "getCustomerId", pnrid)
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

## generateUserBindCardUrl

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

## generateUserLoginUrl

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

## generateAutoTenderPlanUrl

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

## generateQueryBalanceBgUrl

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

## generateQueryAcctsUrl

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

## generateQueryTransStatUrl

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

## generateSaveReconciliationUrl

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

## generateCorpRegisterUrl

生成企业开户链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note               |
| ----   | ----     | ----               |
| usrId | char(25) | 商户下的平台用户号 |
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
rpc.call("bank_payment", "generateCorpRegisterUrl", usrId, BusiCode, true)
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


## generateInitiativeTenderUrl

生成主动投标链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name            | type        | note                                                                                                            |
| ----            | ----        | ----                                                                                                            |
| usrCustId       | char(16)    | 汇付天下生成的用户 ID                                                                                           |
| ordId           | char(30)    | 商户下的订单号，必须保证唯一，请使用纯数字                                                                      |
| ordDate         | char(25)    | 订单日期，格式为 YYYYMMDD                                                                                       |
| transAmt        | char(14)    | 交易金额，金额格式必须是###.## 比如 2.00,2.01                                                                   |
| maxTenderRate   | char(6)     | 最大投资手续费率，数字,保留 2 位小数，测试环境取值范围 0.00<= MaxTenderRate <= 0.20                             |
| borrowerDetails | JSON Object | 借款人信息                                                                                                      |
| borrowerCustId  | char(16)    | 借款人客户号，BorrowerDetails 参数下的二级参数借款人客户号,由汇付生成,用户的唯一性标识                          |
| borrowerAmt     | char(12)    | 借款金额，BorrowerDetails 参数下的二级参数借款金额                                                              |
| borrowerRate    | char(6)     | 借款手续费率，BorrowerDetails 参数下的二级参数，数字,保留 2 位小数，测试环境取值范围 0.00<= BorrowerRate <=1.00 |
| proId           | char(16)    | 项目 ID，BorrowerDetails 参数下的二级参数必须标的的唯一性标识                                                   |
| isFreeze        | char(1)     | 是否冻结，Y--冻结，N--不冻结                                                                                    |
| freezeOrdId     | char(30)    | 冻结订单号，如果 IsFreeze 参数传 Y,那么该参数不能为空                                                           |
| test            | boolean     | 是否开启测试模式                                                                                                |

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

rpc.call("bank_payment", "generateInitiativeTenderUrl", usrCustId, ordId, ordDate, transAmt, maxTenderRate, borrowerDetails, borrowerCustId, borrowerAmt, borrowerRate, proId, isFreeze, freezeOrdId, true)
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


## generateAutoTenderUrl

生成自动投标链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name            | type        | note                                                                                                            |
| ----            | ----        | ----                                                                                                            |
| usrCustId       | char(16)    | 汇付天下生成的用户 ID                                                                                           |
| ordId           | char(30)    | 商户下的订单号，必须保证唯一，请使用纯数字                                                                      |
| ordDate         | char(25)    | 订单日期，格式为 YYYYMMDD                                                                                       |
| transAmt        | char(14)    | 交易金额，金额格式必须是###.## 比如 2.00,2.01                                                                   |
| maxTenderRate   | char(6)     | 最大投资手续费率，数字,保留 2 位小数，测试环境取值范围 0.00<= MaxTenderRate <= 0.20                             |
| borrowerDetails | JSON Object | 借款人信息                                                                                                      |
| borrowerCustId  | char(16)    | 借款人客户号，BorrowerDetails 参数下的二级参数借款人客户号,由汇付生成,用户的唯一性标识                          |
| borrowerAmt     | char(12)    | 借款金额，BorrowerDetails 参数下的二级参数借款金额                                                              |
| borrowerRate    | char(6)     | 借款手续费率，BorrowerDetails 参数下的二级参数，数字,保留 2 位小数，测试环境取值范围 0.00<= BorrowerRate <=1.00 |
| proId           | char(16)    | 项目 ID，BorrowerDetails 参数下的二级参数必须标的的唯一性标识                                                   |
| isFreeze        | char(1)     | 是否冻结，Y--冻结，N--不冻结                                                                                    |
| freezeOrdId     | char(30)    | 冻结订单号，如果 IsFreeze 参数传 Y,那么该参数不能为空                                                           |
| test            | boolean     | 是否开启测试模式                                                                                                |

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


## generateTenderCancleUrl

生成投标撤销链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name          | type     | note                                                    |
| ----          | ----     | ----                                                    |
| usrCustId     | char(16) | 汇付天下生成的用户 ID                                   |
| ordId         | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字              |
| ordDate       | char(25) | 订单日期，格式为 YYYYMMDD                               |
| transAmt      | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01           |
| isUnFreeze    | char(1)  | 是否解冻，Y--冻结，N--不冻结                            |
| unFreezeOrdId | char(30) | 解冻订单号，如果 IsUnFreeze 参数传 Y,那么该参数不能为空 |
| FreezeTrxId   | char(18) | 冻结标识,组成规则为:8 位本平台日期+10 位系统流水号
| test          | boolean  | 是否开启测试模式                                        |

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

## generateLoansUrl

生成自动扣款(放款)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name          | type        | note                                                                                                                                                                                               |
| ----          | ----        | ----                                                                                                                                                                                               |
| ordId         | char(30)    | 商户下的订单号，必须保证唯一，请使用纯数字                                                                                                                                                         |
| ordDate       | char(25)    | 订单日期，格式为 YYYYMMDD                                                                                                                                                                          |
| outCustId     | char(16)    | 出账客户号,由汇付生成,用户的唯一性标识                                                                                                                                                             |
| transAmt      | char(14)    | 交易金额，金额格式必须是###.## 比如 2.00,2.01                                                                                                                                                      |
| fee           | char(12)    | 扣款手续费                                                                                                                                                                                         |
| subOrdId      | char(30)    | 订单号,由商户的系统生成,必须保证唯一.如果本次交易从属于另一个交易流水,则需要通过填写该流水号来进行关联.例如:本次放款:商户流水号是 OrdId,日期是OrdDate,关联投标订单流水是 SubOrdId,日期是SubOrdDate |
| subOrdDate    | char(8)     | 订单日期,格式为 YYYYMMDD                                                                                                                                                                           |
| inCustId      | char(16)    | 入账客户号,由汇付生成,用户的唯一性标识                                                                                                                                                             |
| divDetails    | JSON Object | 分账账户串                                                                                                                                                                                         |
| divCustId     | char(16)    | 分账商户号,DivDetails 参数下的二级参数                                                                                                                                                             |
| divAcctId     | varchar     | 分账账户号,DivDetails 参数下的二级参数                                                                                                                                                             |
| divAmt        | varchar     | 分账金额,保留两位小数,DivDetails 参数下的二级参数                                                                                                                                                  |
| feeObjFlag    | char(1)     | 手续费收取对象标志,若 fee 大于 0.00,FeeObjFlag 为必填参数.I--向入款客户号 InCustId 收取;O--向出款客户号 OutCustId 收取                                                                             |
| isDefault     | char(1)     | Y--默认添加资金池:这部分资金需要商户调用商户代取现接口,帮助用户做后台取现动作;N--不默认不添加资金池:这部分资金用户可以自己取现                                                                     |
| isUnFreeze    | char(1)     | 是否解冻，Y--冻结，N--不冻结                                                                                                                                                                       |
| unFreezeOrdId | char(30)    | 解冻订单号，如果 IsUnFreeze 参数传 Y,那么该参数不能为空                                                                                                                                            |
| freezeTrxId   | char(18)    | 冻结标识,组成规则为:8 位本平台日期+10 位系统流水号                                                                                                                                                 |
| proId         | char(16)    | 项目 ID                                                                                                                                                                                            |
| test          | boolean     | 是否开启测试模式                                                                                                                                                                                   |

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


## queryTenderPlan

查询用户在汇付天下的自动投标计划状态。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                  |
| ----      | ----     | ----                  |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| test      | boolean  | 是否开启测试模式      |

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

## generateRepaymentUrl

生成自动扣款(还款)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name         | type     | note                                                                                                                                                                                               |
| ----         | ----     | ----                                                                                                                                                                                               |
| proId        | char(16) | 标的 ID                                                                                                                                                                                            |
| ordId        | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字                                                                                                                                                         |
| ordDate      | char(25) | 订单日期，格式为 YYYYMMDD                                                                                                                                                                          |
| outCustId    | char(16) | 出账客户号,由汇付生成,用户的唯一性标识                                                                                                                                                             |
| subOrdId     | char(30) | 订单号,由商户的系统生成,必须保证唯一.如果本次交易从属于另一个交易流水,则需要通过填写该流水号来进行关联.例如:本次放款:商户流水号是 OrdId,日期是OrdDate,关联投标订单流水是 SubOrdId,日期是SubOrdDate |
| subOrdDate   | char(8)  | 订单日期,格式为 YYYYMMDD                                                                                                                                                                           |
| principalAmt | char(14) | 还款本金                                                                                                                                                                                           |
| interestAmt  | char(14) | 还款利息                                                                                                                                                                                           |
| fee          | char(12) | 扣款手续费                                                                                                                                                                                         |
| inCustId     | char(16) | 入账客户号,由汇付生成,用户的唯一性标识                                                                                                                                                             |
| test         | boolean  | 是否开启测试模式                                                                                                                                                                                   |

开启测试模式后，返回汇付天下提供的测试链接。

选用参数，暂时不用理会：

| name       | type        | note                                                                                                                   |
| ----       | ----        | ----                                                                                                                   |
| outAcctId  | char(9)     | 出账子账户,用户在汇付的虚拟资金账户号                                                                                  |
| inAcctId   | char(9)     | 入账子账户,用户在汇付的虚拟资金账户号                                                                                  |
| divDetails | JSON Object | 分账账户串                                                                                                             |
| divCustId  | char(16)    | 分账商户号,DivDetails 参数下的二级参数                                                                                 |
| divAcctId  | varchar     | 分账账户号,DivDetails 参数下的二级参数                                                                                 |
| divAmt     | varchar     | 分账金额,保留两位小数,DivDetails 参数下的二级参数                                                                      |
| feeObjFlag | char(1)     | 手续费收取对象标志,若 fee 大于 0.00,FeeObjFlag 为必填参数.I--向入款客户号 InCustId 收取;O--向出款客户号 OutCustId 收取 |
| dzObject   | char(16)    | 垫资/代偿对象,如果是垫资还款必传                                                                                       |

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | Repayment        |
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

rpc.call("bank_payment", "generateRepaymentUrl", proId, ordId, ordDate, outCustId, subOrdId, subOrdDate, principalAmt, interestAmt, fee, inCustId, true)
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


## generateTransferUrl

生成自动扣款转账(商户用)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                                          |
| ----      | ----     | ----                                          |
| ordId     | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字    |
| outCustId | char(16) | 出账客户号,由汇付生成,用户的唯一性标识        |
| outAcctId | char(9)  | 出账子账户,用户在汇付的虚拟资金账户号         |
| transAmt  | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| inCustId  | char(16) | 入账客户号,由汇付生成,用户的唯一性标识        |
| test      | boolean  | 是否开启测试模式                              |

开启测试模式后，返回汇付天下提供的测试链接。
选用参数，暂时不用理会：

| name     | type    | note                                  |
| ----     | ----    | ----                                  |
| inAcctId | char(9) | 入账子账户,用户在汇付的虚拟资金账户号 |

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | Transfer         |
| MerCustId | 6000060004492053 |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

RetUrl:

| 场景 | 内容                                               |
| ---- | ----                                               |
| 正式 | http://m.fengchaohuzhu.com/bank/TransferCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/TransferCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateTransferUrl", ordId, outCustId, outAcctId, transAmt, inCustId, true)
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


## generateUsrFreezeBgUrl

生成资金(货款)冻结链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name        | type     | note                                          |
| ----        | ----     | ----                                          |
| usrCustId   | char(16) | 汇付天下生成的用户 ID                         |
| subAcctType | char(9)  | 子账户类型,默认为商户专属账户                 |
| subAcctId   | char(9)  | 子账户号,用户在汇付的虚拟资金账户号           |
| ordId       | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字    |
| ordDate     | char(25) | 订单日期，格式为 YYYYMMDD                     |
| transAmt    | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| test        | boolean  | 是否开启测试模式                              |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UsrFreezeBg      |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                          |
| ---- | ----                                          |
| 正式 | http://m.fengchaohuzhu.com/bank/usrfreezebg   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usrfreezebg |

RetUrl:

| 场景 | 内容                                                  |
| ---- | ----                                                  |
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

## generateUsrUnFreezeUrl

生成资金(货款)解冻链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name    | type     | note                                                         |
| ----    | ----     | ----                                                         |
| ordId   | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字                   |
| ordDate | char(25) | 订单日期，格式为 YYYYMMDD                                    |
| trxId   | char(18) | 汇付平台交易唯一标识,组成规则为:8位本平台日期+10位系统流水号 |
| test    | boolean  | 是否开启测试模式                                             |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | UsrUnFreeze      |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                          |
| ---- | ----                                          |
| 正式 | http://m.fengchaohuzhu.com/bank/usrunfreeze   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usrunfreeze |

RetUrl:

| 场景 | 内容                                                  |
| ---- | ----                                                  |
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

## generateCashAuditUrl

生成取现复核链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                                          |
| ----      | ----     | ----                                          |
| ordId     | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字    |
| usrCustId | char(16) | 汇付天下生成的用户 ID                         |
| transAmt  | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| auditFlag | char(1)  | 复核标识,R--拒绝,S--复核通过                  |
| test      | boolean  | 是否开启测试模式                              |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | CashAudit        |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                        |
| ---- | ----                                        |
| 正式 | http://m.fengchaohuzhu.com/bank/cashaudit   |
| 测试 | http://dev.fengchaohuzhu.com/bank/cashaudit |

RetUrl:

| 场景 | 内容                                                |
| ---- | ----                                                |
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

## generateCashUrl

生成取现(页面)链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                                          |
| ----      | ----     | ----                                          |
| ordId     | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字    |
| usrCustId | char(16) | 汇付天下生成的用户 ID                         |
| transAmt  | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| servFee       | char(14) | 商户收取服务费金额,只能收取不超过取现金额的1%,金额格式必须是###.## 比如 2.00,2.01 |           
| servFeeAcctId | char(9)  | 商户子账户号,商户用来收取服务费的子账户号, "BASEDT"--基本借记户， "MDT000001"--商户专用借记账户，"SDT000001"--担保账户1， "SDT000002"--风险金账户1     |
| test      | boolean  | 是否开启测试模式                              |

开启测试模式后，返回汇付天下提供的测试链接。

选用参数，暂时不用理会：

| name          | type     | note                                      |
| ----          | ----     | ----                                      |
| openAcctId    | char(40) | 开户银行账号,取现银行的账户号(银行卡号)   |

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | Cash             |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                   |
| ---- | ----                                   |
| 正式 | http://m.fengchaohuzhu.com/bank/cash   |
| 测试 | http://dev.fengchaohuzhu.com/bank/cash |

RetUrl:

| 场景 | 内容                                           |
| ---- | ----                                           |
| 正式 | http://m.fengchaohuzhu.com/bank/CashCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/CashCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript

rpc.call("bank_payment", "generateCashUrl", ordId, usrCustId, transAmt, servFee, servFeeAcctId, true)
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

## generateUsrAcctPayUrl

生成用户账户支付链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name       | type     | note                                                                                                             |
| ----       | ----     | ----                                                                                                             |
| ordId      | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字                                                                       |
| usrCustId  | char(16) | 汇付天下生成的用户 ID                                                                                            |
| transAmt   | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01                                                                    |
| inAcctId   | char(9)  | 入账子账户,用户在汇付的虚拟资金账户号                                                                            |
| inAcctType | char(9)  | 入账账户类型,商户在汇付的虚拟资金子账户类型:BASEDT--基本借记户,DEP--保证金账户,MERDT--专属借记帐户,SPEDT--专用户 |
| test       | boolean  | 是否开启测试模式                                                                                                 |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | UsrAcctPay       |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                         |
| ---- | ----                                         |
| 正式 | http://m.fengchaohuzhu.com/bank/usracctpay   |
| 测试 | http://dev.fengchaohuzhu.com/bank/usracctpay |

RetUrl:

| 场景 | 内容                                                 |
| ---- | ----                                                 |
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

## generateMerCashUrl

生成商户代取现接口链接。
默认是即时取现

汇付天下：即时取现现在回调有点问题 返回400实际是交易成功了

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name          | type     | note                                          |
| ----          | ----     | ----                                          |
| ordId         | char(30) | 商户下的订单号，必须保证唯一，请使用纯数字    |
| usrCustId     | char(16) | 汇付天下生成的用户 ID                         |
| transAmt      | char(14) | 交易金额，金额格式必须是###.## 比如 2.00,2.01 |
| servFee       | char(14) | 商户收取服务费金额,只能收取不超过取现金额的1%,金额格式必须是###.## 比如 2.00,2.01 |           
| servFeeAcctId | char(9)  | 商户子账户号,商户用来收取服务费的子账户号, "BASEDT"--基本借记户， "MDT000001"--商户专用借记账户，"SDT000001"--担保账户1， "SDT000002"--风险金账户1     |
| test          | boolean  | 是否开启测试模式                              |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | MerCash          |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                      |
| ---- | ----                                      |
| 正式 | http://m.fengchaohuzhu.com/bank/mercash   |
| 测试 | http://dev.fengchaohuzhu.com/bank/mercash |

RetUrl:

| 场景 | 内容                                              |
| ---- | ----                                              |
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

## generateAddBidInfoUrl

生成标的信息录入接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name           | type      | note                                                                                                                                                  |
| ----           | ----      | ----                                                                                                                                                  |
| proId          | char(16)  | 标的的唯一标识, 为英文和数字组合                                                                                                                      |
| bidName        | char(50)  | 标的名称                                                                                                                                              |
| BidType        | char(2)   | 标的类型: 01--信用, 02--抵押, 03--债权转让, 99--其他                                                                                                  |
| BorrTotAmt     | char(14)  | 发标金额,单位为元,精确到分,例如 1000.01                                                                                                               |
| YearRate       | char(14)  | 发标年化利率,百分比,保留 2 位小数,例如 24.55                                                                                                          |
| RetInterest    | char(16)  | 应还款总利息,单位为元,精确到分,例如 1000.01                                                                                                           |
| LastRetDate    | char(16)  | 最后还款日期,格式 yyyymmdd                                                                                                                            |
| BidStartDate   | char(14)  | 计划投标开始日期,格式 yyyyMMddHHmmss                                                                                                                  |
| BidEndDate     | char(14)  | 计划投标截止日期,格式 yyyyMMddHHmmss                                                                                                                  |
| LoanPeriod     | char(20)  | 借款期限                                                                                                                                              | 例如:XX 天、XX 月、XX 年 |
| RetType        | char(2)   | 还款方式,01--一次还本付息,02--等额本金,03--等额本息,04--按期付息到期还本,99--其他                                                                     |
| RetDate        | char(8)   | 应还款日期,格式 yyyymmdd                                                                                                                              |
| BidProdType    | char(2)   | 标的产品类型, 01--房贷类,02--车贷类,03--收益权转让类,04--用贷款类,05--股票配资类,06--行承兑汇票,07--商业承兑汇票,08--消费贷款类,09--供应链类,99--其他 |
| BorrType       | char(1)   | 借款人类型,01--个人,02--企业                                                                                                                          |
| BorrCustId     | char(16)  | 借款人ID,借款人的唯一标识                                                                                                                             |
| BorrName       | char(50)  | 借款人名称,文本,借款人真实姓名或者借款企业名称                                                                                                        |
| BorrBusiCode   | char(30)  | 借款企业营业执照编号,借款人类型为企业时为必填                                                                                                         |
| BorrMobiPhone  | char(11)  | 借款人手机号码                                                                                                                                        |
| BorrPurpose    | varchar(150) | 借款用途 |
| test           | boolean   | 是否开启测试模式                                                                                                                                      |

开启测试模式后，返回汇付天下提供的测试链接。

备用参数

| name           | type      | note                                                                                                                                                  |
| ----           | ----      | ----            
| GuarantType    | char(2)   | 本息保障,01--保本保息,02--保本不保息,03--不保本不保息                                                                                                 |
| RiskCtlType    | char(2)   | 风险控制方式,01--抵(质)押,02--共管账户,03--担保,04--用无担保,99--其他                                                                                 |
| LimitMinBidAmt | char(7)   | 限定最低投标份数,整数                                                                                                                                 |
| LimitBidSum    | char(16)  | 限定每份投标金额,单位为元,精确到分,例如 1000.01                                                                                                       |
| LimitMaxBidSum | char(16)  | 限定最多投标金额,单位为元,精确到分,例如 1000.01                                                                                                       |
| LimitMinBidSum | char(16)  | 限定最少投标金额,单位为元,精确到分,例如 1000.01                                                                                                       |
| BidPayforState | char(16)  | 逾期是否垫资,1--是,2--否                                                                                                                              |
| BorrCertType   | cahr(2)   | 借款人证件类型,00--身份证(暂只支持身份证),借款人类型为“01:个人”时为必须参数                                                                           |
| BorrCertId     | char(18)  | 借款人证件号码,借款人类型为“01:个人”时为必须参数                                                                                                      |
| BorrPhone      | char(12)  | 借款人固定电话                                                                                                                                        |
| BorrWork       | char(150) | 借款人工作单位,文本                                                                                                                                   |
| BorrWorkYear   | char(3)   | 借款人工作年限,单位为年,整数                                                                                                                          |
| BorrIncome     | char(16)  | 借款人税后月收入,单位为元,保留 2 位小数                                                                                                               |


在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | AddBidInfo       |
| MerCustId | 6000060004492053 |
| BgRetUrl  | 见下面           |
| RetUrl    | 见下面           |
| PageType  | 2                |
| ChkValue  | 签名             |

BgRetUrl:

| 场景 | 内容                                         |
| ---- | ----                                         |
| 正式 | http://m.fengchaohuzhu.com/bank/addbidinfo   |
| 测试 | http://dev.fengchaohuzhu.com/bank/addbidinfo |

RetUrl:

| 场景 | 内容                                                 |
| ---- | ----                                                 |
| 正式 | http://m.fengchaohuzhu.com/bank/AddBidInfoCallback   |
| 测试 | http://dev.fengchaohuzhu.com/bank/AddBidInfoCallback |

注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateAddBidInfoUrl", "AddBidInfoTest00", "标的信息录入Test00", "99", "1000.01", "0.01", "0.01", "20991231", "20161128000000", "20171126230000", "99年", "99", "20991231", "99", "02", "6000060005793396", "袁念文测试公司", "1102271875443", "13800000000", "修理", true)
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

## generateAddBidAttachInfoUrl

生成标的信息补录输入接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type     | note                             |
| ----  | ----     | ----                             |
| proId | char(16) | 标的的唯一标识, 为英文和数字组合 |
| test  | boolean  | 是否开启测试模式                 |

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

## generateQueryBidInfoUrl

生成标的审核状态查询接口链接。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type     | note                             |
| ----  | ----     | ----                             |
| proId | char(16) | 标的的唯一标识, 为英文和数字组合 |
| test  | boolean  | 是否开启测试模式                 |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
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

## trfReconciliation

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type    | note                                                          |
| ----      | ----    | ----                                                          |
| beginDate | char(8) | 开始日期 YYYYMMDD                                             |
| endDate   | char(8) | 结束日期 YYYYMMDD,BeginDate 和 EndDate 日期跨度不能大于 90 天 |
| pageNum   | string  | 页数,查询数据的所在页号,>0 的整数                             |
| pageSize  | string  | 每页记录数,查询数据的所在页号,>0 且<=1000 的整数              |
| test      | boolean | 是否开启测试模式                                              |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value             |
| ----      | ----              |
| Version   | 20                |
| CmdId     | TrfReconciliation |
| MerCustId | 6000060004492053  |
| ChkValue  | 签名              |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "trfReconciliation", true)
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


## reconciliation

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name           | type    | note                                                          |
| ----           | ----    | ----                                                          |
| beginDate      | char(8) | 开始日期 YYYYMMDD                                             |
| endDate        | char(8) | 结束日期 YYYYMMDD,BeginDate 和 EndDate 日期跨度不能大于 90 天 |
| pageNum        | string  | 页数,查询数据的所在页号,>0 的整数                             |
| pageSize       | string  | 每页记录数,查询数据的所在页号,>0 且<=1000 的整数              |
| queryTransType | string  | 交易查询类型                                                  |
| test           | boolean | 是否开启测试模式                                              |

queryTransType 取值如下：

| name      | meaning      |
| ----      | ----         |
| LOANS     | 放款交易查询 |
| REPAYMENT | 还款交易查询 |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | Reconciliation   |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "reconciliation", true)
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

See [example](../data/bank-payment/reconciliation.json)

## cashReconciliation

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type    | note                                                          |
| ----      | ----    | ----                                                          |
| beginDate | char(8) | 开始日期 YYYYMMDD                                             |
| endDate   | char(8) | 结束日期 YYYYMMDD,BeginDate 和 EndDate 日期跨度不能大于 90 天 |
| pageNum   | string  | 页数,查询数据的所在页号,>0 的整数                             |
| pageSize  | string  | 每页记录数,查询数据的所在页号,>0 且<=1000 的整数              |
| test      | boolean | 是否开启测试模式                                              |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | CashReconciliation     |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "cashReconciliation", true)
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

See [example](../data/bank-payment/cashReconciliation.json)

## generateQueryBalanceUrl

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                  |
| ----      | ----     | ----                  |
| usrCustId | char(16) | 汇付天下生成的用户 ID |
| test      | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | QueryBalance     |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "generateQueryBalanceUrl", usrCustId, true)
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

See [example](../data/bank-payment/generateQueryBalanceUrl.json)

## queryCardInfo

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                       |
| ----      | ----     | ----                       |
| usrCustId | char(16) | 汇付天下生成的用户 ID      |
| cardId    | char(40) | 取现银行的账户号(银行卡号) |
| test      | boolean  | 是否开启测试模式           |

开启测试模式后，返回汇付天下提供的测试链接。

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 20               |
| CmdId     | QueryCardInfo    |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |


注意：

url 作为参数传递时，需要调用 encodeURIComponent 进行编码。

```javascript
rpc.call("bank_payment", "queryCardInfo", usrCustId, cardId, true)
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

See [example](../data/bank-payment/queryCardInfo.json)


## QueryTransDetail

查询用户在汇付天下的订单充值状态。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                  |
| ----      | ----     | ----                  |
| ordId           | char(30)    | 商户下的订单号，必须保证唯一，请使用纯数字                                                                      |
| test      | boolean  | 是否开启测试模式      |

在生成链接时，如下汇付天下接口参数不用调用者提供，但是在生成的 URL 必须出现：

| name      | value            |
| ----      | ----             |
| Version   | 10               |
| CmdId     | QueryTransDetail   |
| MerCustId | 6000060004492053 |
| ChkValue  | 签名             |

```javascript

rpc.call("bank_payment", "queryTransDetail", ordId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 见下      |
| msg  | string | 汇付天下的回调报文 |

| code | meanning |
| ---- | ----     |
| 200  | 成功 |
| 201  | 初始状态 |
| 202  | 失败 |
| 500  | 出错 |

```
{
  "code": 200,
  "msg": "{\"CmdId\":\"QueryTransDetail\",\"RespCode\":\"000\",\"RespDesc\":\"%E6%88%90%E5%8A%9F\",\"ChkValue\":\"EB1C5DF1A14BE771298562562E2BBCB41EDD2B9FC3F923249D04A2BAD60789ECA2055096682C040296574A03B81D69C2FE35AAAA0783B5D508C1367CD6BE169661E0C99CD6D44BFB7F5DC5E117A142E72880379AAF6F3E4E9D859FA885BCC566AF8A44067A52973C6F3BB833D9F51EBC4AC7A737F9438F87F2D11ACE6791AC2E\",\"Version\":null,\"MerCustId\":\"6000060004492053\",\"UsrCustId\":\"6000060005926626\",\"OrdId\":\"111000100320160000340\",\"OrdDate\":\"20161226\",\"QueryTransType\":\"SAVE\",\"TransAmt\":\"311.73\",\"TransStat\":\"S\",\"FeeAmt\":\"0.47\",\"FeeCustId\":\"6000060004492053\",\"FeeAcctId\":\"MDT000001\",\"GateBusiId\":\"QP\",\"RespExt\":\"\",\"PlainStr\":\"QueryTransDetail0006000060004492053600006000592662611100010032016000034020161226SAVE311.73S0.476000060004492053MDT000001QP\"}"
}
{
  "code" :202,
  "msg": "{\"CmdId\":\"QueryTransDetail\",\"RespCode\":\"000\",\"RespDesc\":\"%E6%88%90%E5%8A%9F\",\"ChkValue\":\"2DF3923E0C96C68365690FB5A308CE19575424F8F57138000928D4F14ECF07D095DD24D4742659DA17EBE5B355E2D297513D62D275D651F7AA310BEDB162AF1FB01AA20E2E2C4DBF56A8FDAA38E825DFFBE484CA6F2545BC30FCD646A358A626750E1B26CD2C423F9C38815ECBA1A9AA555C074968D620FD120E870EA1E5924A\",\"Version\":null,\"MerCustId\":\"6000060004492053\",\"UsrCustId\":\"6000060006403270\",\"OrdId\":\"111000100320160000335\",\"OrdDate\":\"20161226\",\"QueryTransType\":\"SAVE\",\"TransAmt\":\"3416.90\",\"TransStat\":\"F\",\"FeeAmt\":\"0.00\",\"FeeCustId\":\"\",\"FeeAcctId\":\"\",\"GateBusiId\":\"\",\"RespExt\":\"\",\"PlainStr\":\"QueryTransDetail0006000060004492053600006000640327011100010032016000033520161226SAVE3416.90F0.00\"}"
}
```

## queryNetSaveBgDetail

先查询用户在后台的订单充值状态，没有记录则去汇付天下查询。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                  |
| ----      | ----     | ----                  |
| ordId           | char(30)    | 商户下的订单号，必须保证唯一，请使用纯数字                                                                      |
| test      | boolean  | 是否开启测试模式      |

```javascript

rpc.call("bank_payment", "queryNetSaveBgDetail", ordId, true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 见下      |
| data/msg  | string | 汇付天下的回调报文 |

| code | meanning | data/msg  |
| ---- | ----     | ----     |
| 200  | 订单支付成功 | data |
| 201  | 订单处于初始状态 | data |
| 202  | 订单支付失败 | data |
| 300  | 订单是新订单，在汇付天下后台不存在 | data |
| 400  | 出错，见 msg 字段 | msg |
| 500  | 未知错误，见 msg 字段 | msg |

```
{"code":200,"data":"{\"CmdId\":\"QueryTransDetail\",\"RespCode\":\"000\",\"RespDesc\":\"%E6%88%90%E5%8A%9F\",\"ChkValue\":\"48387CB376406FBF33915ADBA2C64A589064F3051CEED5FF427934F235B48F0F2A566CD435317C5605631E7F98DFAC9F06E482098CA9FBF0F6E8FCC827F92228F519382212089E9DE5FFC58B972708DEA7CDEE4FF93B062F4D79A4EFD1CCCEA5F1A829005D70FE47154EBED5FD44EE7906D237D6EDF6B5218E4478D753527064\",\"Version\":null,\"MerCustId\":\"6000060004492053\",\"UsrCustId\":\"6000060005583988\",\"OrdId\":\"2017010400000\",\"OrdDate\":\"20170104\",\"QueryTransType\":\"SAVE\",\"TransAmt\":\"823.35\",\"TransStat\":\"S\",\"FeeAmt\":\"1.24\",\"FeeCustId\":\"6000060004492053\",\"FeeAcctId\":\"MDT000001\",\"GateBusiId\":\"QP\",\"RespExt\":\"\",\"PlainStr\":\"QueryTransDetail00060000600044920536000060005583988201701040000020170104SAVE823.35S1.246000060004492053MDT000001QP\"}"}

{"code":200,"data":"S"}

{"code":201,"data":"{\"CmdId\":\"QueryTransDetail\",\"RespCode\":\"000\",\"RespDesc\":\"%E6%88%90%E5%8A%9F\",\"ChkValue\":\"0C4706FF1AC0C09D1B7921BF9B7583F47FB66438B4C5588AA84B7EC8F4F795C84B2A5DAAD6E0F9C627007257083DB5339023008DB41731A0BAAB4DE79B3B1AE03EC08A77D2D82639B58D3E06BF06E516F9704FF958B6BD76A3ABF4965196DF9D57FF6C3AAA5290DF75B9E7E5008A137BF9C65C6BCCDD11C0E7CC9F4DAB1C3FE0\",\"Version\":null,\"MerCustId\":\"6000060004492053\",\"UsrCustId\":\"6000060006415846\",\"OrdId\":\"2017010400002\",\"OrdDate\":\"20170104\",\"QueryTransType\":\"SAVE\",\"TransAmt\":\"823.35\",\"TransStat\":\"I\",\"FeeAmt\":\"0.00\",\"FeeCustId\":\"\",\"FeeAcctId\":\"\",\"GateBusiId\":\"\",\"RespExt\":\"\",\"PlainStr\":\"QueryTransDetail00060000600044920536000060006415846201701040000220170104SAVE823.35I0.00\"}"}

{"code":202,"data":"F"}
```

## chargeFeeForRefund

在汇付天下扣除用户的管理费

接口包含三个步骤，其中任何一个步骤出错便会停止后续步骤：

1. 标的信息录入
2. 自动投标
3. 自动扣款(放款)

上述步骤具体见汇付天下文档。
某个步骤出错可重新单独调用该接口，具体操作见本文档的该接口的获取链接接口。



| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                  |
| ----      | ----     | ----                  |
| usrCustId       | char(16)    | 汇付天下生成的用户 ID                                                                                           |
| BorrTotAmt     | char(14)  | 手续费金额,单位为元,精确到分,例如 1000.01，注意格式！小数点后必须包含两位小数                                                                                                               |
| test      | boolean  | 是否开启测试模式      |

##### 以下参数由系统自动生成,生成规则如下

| name      | type     | note                  | rule |
| ----      | ----     | ----                  | ---  |
| bidName   | char(50)  | 标的名称  | "收取" + usrCustId + "管理费" |
| proId     | char(16) | 项目 ID，标的信息录入标的的唯一标识（注意：”标的“为专有名词），为英文和数字组合 | usrCustId 后10位 + 时间6位 |
| autoTenderOrdId     | char(30) | 自动投标订单号，必须保证唯一，请使用纯数字 | 时间日期14位 + usrCustId 后10位 |
| loansOrdId     | char(30) | 自动扣款(放款)订单号，必须保证唯一，请使用纯数字 | 时间日期14位 + usrCustId 后10位 + "0" |


```javascript

rpc.call("bank_payment", "chargeFeeForRefund", "6000060005583988", "110.01",  true)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 见下      |
| data  | string | 汇付天下的回调报文 |

| code | meanning |
| ---- | ----     |
| 200  | 成功 |
| 500  | 出错 |

```
{
    "code": 200,
    "data": {
        "CmdId": "Loans",
        "RespCode": "000",
        "RespDesc": "%E6%88%90%E5%8A%9F",
        "ChkValue": "3B156BF5F281FA488903B45930C4E57CAC188DB0F6F183DA465922892083908305239DB7CAB216C7B9AEDDD6C52FFA0B2482383AD9A1C2A2361EEA78C0213D79D8E2B0BAC707850BA097AC809E9A3415A05BDC776DD88F699647585FD43D61E74D648D5DFAB4D0C6598D49B6EC1CAD4E3CD17D88C61D7CF603A0F353F3AA8B76",
        "Version": "20",
        "MerCustId": "6000060004492053",
        "OrdId": "201701030040",
        "OrdDate": "20170103",
        "OutCustId": "6000060005583988",
        "OutAcctId": "MDT000001",
        "TransAmt": "110.01",
        "Fee": "0.00",
        "InCustId": "6000060005793396",
        "InAcctId": "MDT000001",
        "SubOrdId": "20170103004",
        "SubOrdDate": "20170103",
        "IsDefault": "Y",
        "BgRetUrl": "http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Floans",
        "MerPriv": "test",
        "IsUnFreeze": "N",
        "UnFreezeOrdId": "",
        "FreezeTrxId": "",
        "FeeObjFlag": "",
        "RespExt": "%7B%22ProId%22%3A%22REF17010304%22%7D",
        "PlainStr": "Loans0006000060004492053201701030040201701036000060005583988MDT000001110.010.006000060005793396MDT0000012017010300420170103YNhttp%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Floanstest%7B%22ProId%22%3A%22REF17010304%22%7D"
    }
}
{
    "code": 500,
    "data": {
        "CmdId": "AddBidInfo",
        "RespCode": "395",
        "RespDesc": "%E6%A0%87%E7%9A%84%E4%BF%A1%E6%81%AF%E5%B7%B2%E5%AD%98%E5%9C%A8",
        "ChkValue": "810D1FD973C9EBC44BCC5DD8BD7A7347BC7A3E01BD9B2F773D5B5672B245E2C3D35DF61EE6154C6EBA217BB7D041639F172A66D0E30308CC7757BEF7F408AA23DAC7CA0659B86F6047DCEEA0DB2E175718583BA040B63747F160C1EE0F994F330C86D9CB5C72A4BFA50530447DCEF38B0A0FC59A90E14A0D8289746E198C72C6",
        "Version": "20",
        "MerCustId": "6000060004492053",
        "ProId": "REF17010304",
        "BorrCustId": "6000060005793396",
        "BorrTotAmt": "110.01",
        "GuarCompId": "",
        "GuarAmt": "",
        "ProArea": "",
        "BgRetUrl": "http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Faddbidinfo",
        "MerPriv": "test",
        "RespExt": "",
        "AuditStat": null,
        "AuditDesc": "",
        "PlainStr": "AddBidInfo3956000060004492053REF170103046000060005793396110.01http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Faddbidinfotest",
        "PlainStr2": "AddBidInfo3956000060004492053REF17010304http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Faddbidinfotest"
    }
}
```

## getNetSaveUrlByPnrId

获取汇付天下的用户充值链接，若用户没有开户，则获取开户链接再跳转到充值。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name         | type     | note                  |
| ----         | ----     | ----                  |
| pnrid  | char(25) | 用于汇付天下开户的 ID |
| name  | char(50) | 用户姓名           |
| idNo | char(30) | 用户身份证号       |
| ordId     | char(21) | 订单编号              |
| ordDate   | char(8)  | 订单日期 YYYYMMDD     |
| transAmt | char(14) | 交易金额 ###.##       |
| test         | boolean  | 是否开启测试模式      |

开启测试模式后，返回汇付天下提供的测试链接。

```javascript

rpc.call("bank_payment", "getNetSaveUrlByPnrId", "quwnz3qkdp0tqoyejvuufckme", "朱哲瀚", "340825197303114656", "201701061626000000006", "20170104", "823.35", true)
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
| 400  | 见 msg |
| 500  | 未知错误 |

```
{"code":200,"data":"http://mertest.chinapnr.com/muser/publicRequests?Version=10&CmdId=UserRegister&MerCustId=6000060004492053&UsrId=quwnz3qkdp0tqoyejvuufckme&UsrName=%E6%9C%B1%E5%93%B2%E7%80%9A&IdType=00&IdNo=340825197303114656&MerPriv=test20170106162600000000520170104823.35&UsrEmail=&BgRetUrl=http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Fregister&RetUrl=http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2FRegisterCallback&PageType=2&ChkValue=344D24124F9E9220C1AA25A75594458506FE511C8FE4CFCB87D8621959D1DCE76875F0020C73E900F1BDEBAB5A02A9F592D9380A4937BDECA1709651415D514638EFAD47B3F41411AFD1B35226AA2AA238A7B79152F2C70289D128FD021D6266452EDB9B4B3C277675F4053F6FFD37052961F478183A661ADF3E6A7EA6490245"}


{"code":200,"url":"http://mertest.chinapnr.com/muser/publicRequests?Version=10&CmdId=NetSave&MerCustId=6000060004492053&UsrCustId=6000060006443520&OrdId=201701061626000000006&OrdDate=20170104&GateBusiId=QP&OpenBankId=&DcFlag=&TransAmt=823.35&RetUrl=http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2FNetSaveCallback&BgRetUrl=http%3A%2F%2Fdev.fengchaohuzhu.com%2Fbank%2Fnetsave&OpenAcctId=&CertId=&MerPriv=test&ReqExt=&PageType=2&ChkValue=66BD6C6BFD658ABC89B9E376D9BF9F97AD76E534CBDB1960E7AA62A1EDAA0C5AB6E2333388E80A6B9229A4CE9330AF8EFD62AB85E8AC99B9FC8EEA70E23106275DFBCBFF93965BCE804C7F76FAB14C2B1BA181F75E3C1B1CE0FD255F38C3BF09F6E05788AAC55A476FEBC315F30D3961D835B4133DA45168B42FE6734499F449"}

```