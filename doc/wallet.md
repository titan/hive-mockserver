<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [Wallet](#wallet)
  - [Account](#account)
  - [Transaction](#transaction)
    - [Transaction Type](#transaction-type)
    - [Transaction Type And Data Structure Matrix](#transaction-type-and-data-structure-matrix)
- [Database](#database)
  - [wallets](#wallets)
  - [accounts](#accounts)
  - [transactions](#transactions)
  - [apportions](#apportions)
- [Cache](#cache)
- [API](#api)
  - [getWallet](#getwallet)
      - [request](#request)
      - [response](#response)
  - [recharge](#recharge)
      - [request](#request-1)
      - [response](#response-1)
  - [freeze](#freeze)
      - [request](#request-2)
      - [response](#response-2)
  - [unfreeze](#unfreeze)
      - [request](#request-3)
      - [response](#response-3)
  - [deduct](#deduct)
      - [request](#request-4)
      - [response](#response-4)
  - [cashin](#cashin)
      - [request](#request-5)
      - [response](#response-5)
  - [cashout](#cashout)
      - [request](#request-6)
      - [response](#response-6)
  - [getTransactions](#gettransactions)
      - [request](#request-7)
      - [response](#response-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-02-21
  * 删除 WalletEvent
  * 删除 wallet_events 表
  * 删除 account 里的 plan 属性
  * 删除 createWallet 方法
  * 删除 createAccount 方法
  * 重命名 debit 方法为 deduct
  * 删除 updateAccountBalance 方法

1. 2016-12-30
  * account 去掉 type
  * 增加 createWallet
  * 增加 recharge
  * 增加 freeze
  * 增加 unfreeze
  * 增加 debit
  * 增加 cashin
  * 增加 cashout
  * 增加 apportions 表

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
| maid        | uuid    | 互助事件 id              |
| oid         | uuid    | order id                 |

### Transaction Type

| code | name                 |
| ---- | ----                 |
| 1    | 帐号充值             |
| 2    | 池帐号小池调整       |
| 3    | 池帐号大池调整       |
| 4    | 池帐号小池解冻       |
| 5    | 池帐号大池解冻       |
| 6    | 增加可提现金额       |
| -1   | 帐号扣款             |
| -2   | 池帐号小池扣款       |
| -3   | 池帐号大池扣款       |
| -4   | 池帐号小池冻结       |
| -5   | 池帐号大池冻结       |
| -6   | 从第三方支付平台提现 |

### Transaction Type And Data Structure Matrix

| type | maid | oid  |
| ---- | ---- | ---- |
| 1    |      | ✓    |
| 2    |      |      |
| 3    |      |      |
| 4    | ✓    |      |
| 5    |      | ✓    |
| 6    |      | ✓    |
| -1   | ✓    |      |
| -2   | ✓    |      |
| -3   | ✓    |      |
| -4   | ✓    |      |
| -5   | ✓    |      |
| -6   |      |      |

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

## apportions

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| maid        | smallint  |      |         |         |           |
| uid         | uuid      |      |         |         | users     |
| apportion0  | numeric   |      |         |         |           |
| apportion1  | numeric   |      |         |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |
| deleted     | boolean   |      | false   |         |           |

# Cache

| key                 | type       | value                   | note         |
| ----                | ----       | ----                    | ----         |
| wallet-entities     | hash       | UID => Wallet           | 所有钱包实体 |
| transactions:${uid} | sorted set | {occurred, transaction} | 交易记录     |

# API

## getWallet

获得钱包信息

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

## recharge

钱包充值

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

![执行方式](../img/wallet-recharge-sequence.png)

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

| name   | type     | note        |
| ----   | ----     | ----        |
| amount | number   | 冻结金额    |
| maid   | uuid     | 互助事件 ID |
| aid    | uuid     | 钱包帐号 ID |

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

## deduct

扣款

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note             |
| ----   | ----   | ----             |
| amount | number | 扣款金额         |
| maid   | uuid   | 互助事件 ID      |
| type   | number | 0: 小池, 1: 大池 |

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

