<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [Wallet](#wallet)
  - [Account](#account)
  - [Transaction](#transaction)
  - [CashOut](#cashout)
- [Event](#event)
  - [CashoutEvent](#cashoutevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix)
  - [WalletEvent](#walletevent)
    - [Event Data Structure](#event-data-structure-1)
    - [Event Type](#event-type-1)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix-1)
- [Database](#database)
  - [wallets](#wallets)
  - [accounts](#accounts)
  - [transactions](#transactions)
  - [cashout](#cashout)
  - [wallet\_events](#wallet%5C_events)
  - [cashout\_events](#cashout%5C_events)
- [Cache](#cache)
- [API](#api)
  - [getWallet](#getwallet)
      - [request](#request)
      - [response](#response)
  - [createAccount](#createaccount)
      - [request](#request-1)
      - [response](#response-1)
  - [getTransactions](#gettransactions)
      - [request](#request-2)
      - [response](#response-2)
  - [applyCashOut](#applycashout)
      - [request](#request-3)
      - [response](#response-3)
  - [agreeCashOut](#agreecashout)
      - [request](#request-4)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

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
| type     | integer | 帐号类型     |
| vehicle  | vehicle | 帐号对应车辆 |
| balance0 | float   | 余额0        |
| balance1 | float   | 余额1        |

帐号类型

| code | name     | balance0 | balance1 |
| ---  | ---      | ---      | ---      |
| 0    | 普通类型 | 帐号余额 | 无效     |
| 1    | 池类型   | 小池余额 | 大池余额 |

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
| 1    | 普通帐号充值   |
| 2    | 池帐号小池充值 |
| 3    | 池帐号大池充值 |
| -1   | 普通帐号扣款   |
| -2   | 池帐号小池扣款 |
| -3   | 池帐号大池扣款 |

## CashOut

| name   | type    | note     |
| ----   | ----    | ----     |
| id     | uuid    | 提现id   |
| no     | string  | 提现编号 |
| state  | integer | 提现状态 |
| amount | float   | 提现金额 |
| reason | text    | 拒绝理由 |
| order  | order   | 订单     |

# Event

## CashoutEvent

### Event Data Structure

| name        | type     | note         |
| ----        | ----     | ----         |
| id          | uuid     | event id     |
| type        | smallint | event type   |
| opid        | uuid     | operator id  |
| uid         | uuid     | user id      |
| occurred-at | iso8601  | 事件发生时间 |
| amount      | float    | 提现金额     |
| reason      | text     | 拒绝理由     |

### Event Type

| type | name       | note       |
| ---- | ----       | ----       |
| 0    | CREATE     | 提现创建   |
| 1    | AGREE      | 提现同意   |
| 2    | REFUSE     | 提现拒绝   |

### Event Type And Data Structure Matrix

| type | amount | reason |
| ---- | ----   | ----   |
| 0    | ✓      |        |
| 1    |        |        |
| 2    |        | ✓      |

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

| type | name         | note     |
| ---- | ----         | ----     |
| 0    | create       | 创建     |
| 1    | RECHARGE     | 充值     |
| 2    | FREEZE       | 冻结资金 |
| 3    | UNFREEZE     | 解冻资金 |
| 4    | DEBIT_PUBLIC | 大池扣款 |
| 5    | DEBIT_GROUP  | 小池扣款 |
| 6    | CASH_IN      | 增加提现 |
| 7    | CASH_OUT     | 提现     |

### Event Type And Data Structure Matrix

| type | amount | maid | oid  | aid  |
| ---- | ----   | ---- | ---- | ---- |
| 0    | ✓      |      | ✓    | ✓    |
| 1    | ✓      |      | ✓    |      |
| 2    | ✓      | ✓    |      | ✓    |
| 3    | ✓      | ✓    |      | ✓    |
| 4    | ✓      | ✓    |      |      |
| 5    | ✓      | ✓    |      |      |
| 6    | ✓      |      | ✓    |      |
| 7    | ✓      |      |      |      |

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
| type        | smallint  |      |         |         |           |
| vid         | uuid      | ✓    |         |         | vehicles  |
| balance0    | float     |      |         |         |           |
| balance1    | float     |      |         |         |           |
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

## cashout

| field           | type      | null | default | index   | reference |
| ----            | ----      | ---- | ----    | ----    | ----      |
| id              | uuid      |      |         | primary |           |
| no              | string    |      |         |         |           |
| state           | smallint  |      |         |         |           |
| amount          | float     |      |         |         |           |
| reason          | text      | ✓    |         |         |           |
| order\_id       | uuid      |      |         |         | orders    |
| last\_event\_id | uuid      | ✓    |         |         |           |
| created\_at     | timestamp |      | now     |         |           |
| updated\_at     | timestamp |      | now     |         |           |

| cashout\_state | name   |
| ----           | ----   |
| 0              | 未处理 |
| 1              | 已批准 |
| 2              | 已拒绝 |

## wallet\_events

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| type         | smallint  |      |         |         |           |
| opid         | uuid      |      |         |         |           |
| uid          | uuid      | ✓    |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |
| data         | json      |      |         |         |           |

## cashout\_events

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
| cashout-counter     | hash       | date => counter         | 当日提现计数 |
| cashout-entities    | hash       | coid => cashout         | 所有提现实体 |
| applied-cashouts    | sorted set | (提现生成时间, 提现ID)  | 提现申请汇总 |
| agreed-cashouts     | sorted set | (提现生成时间, 提现ID)  | 提现同意汇总 |
| refused-cashouts    | sorted set | (提现生成时间, 提现ID)  | 提现拒绝汇总 |


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

注意: 帐号对应 balance0，balance1 的含义请参考前文的数据结构。

See [example](../data/wallet/getWallet.json)

## createAccount

创建钱包帐号

创建钱包下的帐号。每个钱包下，每辆车只能有一个帐号，不能重复创建。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name     | type    | note          |
| ----     | ----    | ----          |
| type     | integer | 帐号类型      |
| balance0 | float   | 余额0         |
| balance1 | float   | 余额1         |
| vid      | uuid    | Vehicle ID    |
| uid      | uuid    | 仅 admin 有效 |

vid 在普通帐号类型下保持为 null。

```javascript

let type = 1;
let vid = "00000000-0000-0000-0000-000000000000";
let balance0 = 200.00;
let balance1 = 800.00;

rpc.call("wallet", "createAccount", type, balance0, balance1, vid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note       |
| ---- | ---- | ----       |
| code | int  | 200        |
| aid  | uuid | Account ID |

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

注意: 帐号对应 balance0，balance1 的含义请参考前文的数据结构。

See [example](../data/wallet/createAccount.json)

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

## applyCashOut

申请提现

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name      | type | note   |
| ----      | ---- | ----   |
| order\_id | uuid | 订单id |

```javascript

rpc.call("wallet", "applyCashOut", order_id)
  .then(function (result) {

  }, function (error) {

  });

```
#### response

成功：

| name | type | note   |
| ---- | ---- | ----   |
| code | int  | 200    |
| data | uuid | 提现id |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/wallet/createCashout.json)

## agreeCashOut

同意提现

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name     | type    | note     |
| ----     | ----    | ----     |
| coid     | uuid    | 提现id   |
| state    | integer | 提现状态 |
| user\_id | uuid    | 用户id   |
| opid     | uuid    | 操作员id |

```javascript

rpc.call("wallet", "agreeCashOut", coid, state, user_id, opid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note   |
| ---- | ---- | ----   |
| code | int  | 200    |
| data | uuid | 提现id |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

See [example](../data/wallet/createCashout.json)
