<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [Wallet](#wallet)
  - [Account](#account)
  - [Transaction](#transaction)
  - [WalletEvent](#walletevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix)
- [Database](#database)
  - [wallets](#wallets)
  - [accounts](#accounts)
  - [transactions](#transactions)
  - [wallet\_events](#wallet%5C_events)
- [Cache](#cache)
- [API](#api)
  - [getWallet](#getwallet)
      - [request](#request)
      - [response](#response)
  - [createAccount](#createaccount)
      - [request](#request-1)
      - [response](#response-1)
  - [createWallet](#createwallet)
      - [request](#request-2)
      - [response](#response-2)
  - [recharge](#recharge)
      - [request](#request-3)
      - [response](#response-3)
  - [freeze](#freeze)
      - [request](#request-4)
      - [response](#response-4)
  - [unfreeze](#unfreeze)
      - [request](#request-5)
      - [response](#response-5)
  - [debit](#debit)
      - [request](#request-6)
      - [response](#response-6)
  - [cashin](#cashin)
      - [request](#request-7)
      - [response](#response-7)
  - [cashout](#cashout)
      - [request](#request-8)
      - [response](#response-8)
  - [updateAccountBalance](#updateaccountbalance)
      - [request](#request-9)
      - [response](#response-9)
  - [getTransactions](#gettransactions)
      - [request](#request-10)
      - [response](#response-10)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2016-12-30
  * account 去掉 type
  * 增加 createWallet
  * 增加 recharge
  * 增加 freeze
  * 增加 unfreeze
  * 增加 debit
  * 增加 cashin
  * 增加 cashout

1. 2016-12-28
  * 增加了解冻交易类型
  * 调整 createAccount 接口参数
  * 调整 updateAccountBalance 接口参数

1. 2016-12-21
  * 移除cashout

1. 2016-12-10
  * 增加 wallets 表
  * 增加 wallet\_events 表
  * 增加 WalletEvent 设计

1. 2016-11-25
  * 增加提现对象

1. 2016-09-24
  * 增加 createAccount 接口。

1. 2016-09-23
  * 调整数据结构
  * 删除 getAccounts 接口。
  * 修改 getWallet 接口的参数。
  * 修改 getTransactions 接口的参数。
  * 修改 getWallet 返回的结果。
  * 修改 getTransactions 返回的结果。
  * 删除 wallet 表。
  * 增加缓存设计。

# Data Structure

## Wallet

| name     | type      | note       |
| ----     | ----      | ----       |
| frozen   | float     | 冻结金额   |
| cashable | float     | 可提现金额 |
| balance  | float     | 总余额     |
| accounts | [account] | 帐号       |

## Account

| name     | type    | note         |
| ----     | ----    | ----         |
| id       | uuid    | 帐号 ID      |
| vehicle  | vehicle | 帐号对应车辆 |
| plan     | plan    | 对应的计划   |
| balance0 | float   | 小池余额     |
| balance1 | float   | 大池余额     |
| balance2 | float   | 优惠余额     |

## Transaction

| name        | type    | note                     |
| ----        | ----    | ----                     |
| id          | uuid    | 交易日志 ID              |
| aid         | uuid    | 帐号 ID                  |
| type        | integer | 交易类型                 |
| title       | string  | 钱包日志内容             |
| occurred-at | iso8601 | 发生时间                 |
| amount      | float   | 金额(正为收入，负为支出) |

交易类型

| code | name           |
| ---- | ----           |
| 1    | 帐号充值       |
| 2    | 池帐号小池调整 |
| 3    | 池帐号大池调整 |
| 4    | 池帐号小池解冻 |
| 5    | 池帐号大池解冻 |
| -2   | 池帐号小池扣款 |
| -3   | 池帐号大池扣款 |
| -4   | 池帐号小池冻结 |
| -5   | 池帐号大池冻结 |

## WalletEvent

### Event Data Structure

| name        | type     | note         |
| ----        | ----     | ----         |
| id          | uuid     | event id     |
| type        | smallint | event type   |
| uid         | uuid     | user id      |
| occurred-at | iso8601  | 事件发生时间 |
| amount      | float    | 提现金额     |
| maid        | uuid     | 互助事件 id  |
| oid         | uuid     | order id     |
| aid         | uuid     | account id   |

### Event Type

| type | name     | note     |
| ---- | ----     | ----     |
| 0    | CREATE   | 创建     |
| 1    | RECHARGE | 充值     |
| 2    | FREEZE   | 冻结资金 |
| 3    | UNFREEZE | 解冻资金 |
| 4    | DEBIT    | 扣款     |
| 5    | CASH_IN  | 增加提现 |
| 6    | CASH_OUT | 提现     |

### Event Type And Data Structure Matrix

| type | amount | maid | oid  | aid  |
| ---- | ----   | ---- | ---- | ---- |
| 0    |        |      |      |      |
| 1    | ✓      |      | ✓    |      |
| 2    | ✓      | ✓    |      | ✓    |
| 3    | ✓      | ✓    |      | ✓    |
| 4    | ✓      | ✓    |      |      |
| 5    | ✓      |      | ✓    |      |
| 6    | ✓      |      |      |      |

# Database

## wallets

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| uid         | uuid      |      |         |         | users     |
| frozen      | float     |      | 0.0     |         |           |
| cashable    | float     |      | 0.0     |         |           |
| balance     | float     |      | 0.0     |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |
| deleted     | boolean   |      | false   |         |           |
| evtid       | uuid      | ✓    |         |         |           |

## accounts

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| uid         | uuid      |      |         |         | users     |
| vid         | uuid      | ✓    |         |         | vehicles  |
| pid         | uuid      | ✓    |         |         | plans     |
| balance0    | float     |      |         |         |           |
| balance1    | float     |      |         |         |           |
| balance2    | float     |      |         |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |
| deleted     | boolean   |      | false   |         |           |

## transactions

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| aid          | uuid      |      |         |         | accounts  |
| type         | smallint  |      |         |         |           |
| title        | char(128) |      |         |         |           |
| amount       | float     |      |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |

## wallet\_events

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| type         | smallint  |      |         |         |           |
| opid         | uuid      |      |         |         |           |
| uid          | uuid      | ✓    |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |
| data         | json      |      |         |         |           |

# Cache

| key                 | type       | value                   | note         |
| ----                | ----       | ----                    | ----         |
| wallet-entities     | hash       | UID => Wallet           | 所有钱包实体 |
| transactions-${uid} | sorted set | {occurred, transaction} | 交易记录     |


# API

## getWallet

获得钱包信息

钱包的数据其实是各个帐号数据的汇总。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note          |
| ---- | ---- | ----          |
| uid  | uuid | 仅 admin 有效 |

wallet 的 id 其实就是 user id

```javascript

rpc.call("wallet", "getWallet")
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name   | type   | note   |
| ----   | ----   | ----   |
| code   | int    | 200    |
| wallet | wallet | Wallet |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning   |
| ---- | ----       |
| 500  | 未知错误   |

See [example](../data/wallet/getWallet.json)

## createAccount

创建钱包帐号

创建钱包下的帐号。每个钱包下，每辆车只能有一个帐号，不能重复创建。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note          |
| ---- | ---- | ----          |
| vid  | uuid | Vehicle ID    |
| pid  | uuid | Plan ID       |
| uid  | uuid | 仅 admin 有效 |

```javascript

const vid = "00000000-0000-0000-0000-000000000000";
const pid = "00000000-0000-0000-0000-000000000000";
const uid = "00000000-0000-0000-0000-000000000000";

// 创建一个初始化的帐号，订单提交时创建．

rpc.call("wallet", "createAccount", vid, pid, uid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note       |
| ---- | ---- | ----       |
| code | int  | 200        |
| data | uuid | Account ID |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning   |
| ---- | ----       |
| 404  | 车辆不存在 |
| 408  | 请求超时   |
| 409  | 帐号已存在 |
| 500  | 未知错误   |


See [example](../data/wallet/createAccount.json)

## createWallet

创建钱包

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note          |
| ---- | ---- | ----          |
| uid  | uuid | 仅 admin 有效 |

#### response

成功：

| name | type | note      |
| ---- | ---- | ----      |
| code | int  | 200       |
| data | uuid | Wallet ID |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning   |
| ---- | ----       |
| 408  | 请求超时   |
| 409  | 钱包已存在 |
| 500  | 未知错误   |

## recharge

钱包充值

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note     |
| ---- | ---- | ----     |
| oid  | uuid | Order Id |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## freeze

冻结资金

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note        |
| ----   | ----   | ----        |
| amount | number | 冻结金额    |
| maid   | uuid   | 互助事件 ID |
| aid    | uuid   | 钱包帐号 ID |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## unfreeze

解冻资金

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note        |
| ----   | ----   | ----        |
| amount | number | 解冻金额    |
| maid   | uuid   | 互助事件 ID |
| aid    | uuid   | 钱包帐号 ID |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## debit

扣款

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note        |
| ----   | ----   | ----        |
| amount | number | 扣款金额    |
| maid   | uuid   | 互助事件 ID |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## cashin

用户退出计划或计划到期后，增加可提现金额。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| amount | number | 提现金额 |
| oid    | uuid   | Order ID |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## cashout

用户将可提现金额提现后，同步钱包的状态。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| amount | number | 提现金额 |

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

| code | meanning   |
| ---- | ----       |
| 404  | 钱包不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## updateAccountBalance

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type | note            |
| ----  | ---- | ----            |
| vid   | uuid | Vehicle ID      |
| pid   | uuid | Plan ID         |
| type0 | uuid | 交易类型        |
| type1 | uuid | Wallet 事件类型 |
| pid   | uuid | Plan ID         |
| uid   | uuid | 仅 admin 有效   |

注意:

type0 表示交易类型，type1 表示 wallet 事件类型。

```javascript
rpc.call("wallet", "updateAccountBalance", vid, pid, type0, type1, balance0, balance1, balance2, uid)
.then(function (result) {

},function (error) {

});

```
#### response

成功:

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | string | success |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## getTransactions

获得钱包交易日志列表

钱包交易日志按时间逆序显示。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type | note                     |
| ----   | ---- | ----                     |
| offset | int  | 结果在数据集中的起始位置 |
| limit  | int  | 显示结果的长度           |
| uid    | uuid | 仅 admin 有效            |

```javascript

rpc.call("wallet", "getTransactions", 0, 10)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name         | type          | note        |
| ----         | ----          | ----        |
| code         | int           | 200         |
| transactions | [transaction] | Transaction |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/wallet/getTransactions.json)

