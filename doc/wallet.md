<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [Wallet](#wallet)
  - [Account](#account)
  - [Transaction](#transaction)
    - [Transaction Title](#transaction-title)
    - [Transaction Type And Data Structure Matrix](#transaction-type-and-data-structure-matrix)
- [Event](#event)
  - [AccountEvent](#accountevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix)
- [Database](#database)
  - [account_events](#account_events)
  - [transactions](#transactions)
- [Cache](#cache)
- [API](#api)
  - [getWallet](#getwallet)
      - [request](#request)
      - [response](#response)
  - [rechargePlanOrder](#rechargeplanorder)
      - [request](#request-1)
      - [response](#response-1)
  - [rechargeThirdOrder](#rechargethirdorder)
      - [request](#request-2)
      - [response](#response-2)
  - [rechargeDeathOrder](#rechargedeathorder)
      - [request](#request-3)
      - [response](#response-3)
  - [adjust](#adjust)
      - [request](#request-4)
      - [response](#response-4)
  - [freeze](#freeze)
      - [request](#request-5)
      - [response](#response-5)
  - [unfreeze](#unfreeze)
      - [request](#request-6)
      - [response](#response-6)
  - [deduct](#deduct)
      - [request](#request-7)
      - [response](#response-7)
  - [getTransactions](#gettransactions)
      - [request](#request-8)
      - [response](#response-8)
  - [exportAccounts](#exportaccounts)
      - [request](#request-9)
      - [response](#response-9)
  - [getAdditionalAccounts](#getadditionalaccounts)
      - [request](#request-10)
      - [response](#response-10)
  - [getAdditionalAccountsByPhone](#getadditionalaccountsbyphone)
      - [request](#request-11)
      - [response](#response-11)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-05-24
  * 增加 transactions-1:${uid}:${license} 缓存
  * 增加 transactions-2:${uid}:${license} 缓存
  * 增加 transactions-3:${uid}:${license} 缓存
  * 增加 accounts-of-license-2:${license} 缓存
  * 增加 accounts-of-license-3:${license} 缓存
  * 增加 license 到 getTransactions 的参数列表
  * 修改 getTransactions 参数 offset 为 start
  * 修改 getTransactions 参数 limit 为 stop
  * 增加 license 到 getAdditionalAccounts 的参数列表
  * 修改 getAdditionalAccounts 的返回结果为 Paging<Account>
  * 修改 getAdditionalAccountsByPhone 的返回结果为 Paging<Account>

1. 2017-05-23
  * 增加 license 到 account
  * 增加 license 到 account-event
  * 增加 owner 到 account
  * 增加 owner 到 account-event
  * 增加 accounts-2 缓存
  * 增加 accounts-3 缓存
  * 增加 accounts-of-phone-2:${phone} 缓存
  * 增加 accounts-of-phone-3:${phone} 缓存
  * 增加 getAdditionalAccounts 接口
  * 增加 getAdditionalAccountsByPhone 接口

1. 2017-05-22
  * 增加 project 到 wallet
  * 增加 project 到 account
  * 增加 project 到 transaction
  * 增加可选参数到 getWallet，支持获取不同险种的钱包
  * 增加可选参数到 getTransactions，支持获取不同险种的交易记录
  * 增加可选参数到 exportAccounts，支持导出不同险种的帐号信息
  * 重命名 recharge 接口为 rechargePlanOrder
  * 增加 rechargeThirdOrder 接口
  * 增加 rechargeDeathOrder 接口
  * 重构缓存设置，增加对 project 的支持

1. 2017-05-10
  * 增加 paid 到 account
  * 增加 evtid 到 account
  * 增加新 accountevent 类型: 13 和 14
  * 删除 accounts 表
  * 删除 apportions 表
  * 删除 account_events 表中的 aid 字段
  * 增加 account-entities 缓存

1. 2017-04-28
  * 增加新 transaction 类型: 11 和 12

1. 2017-04-18
  * 增加 exportAccounts 方法

1. 2017-04-01
  * 完善了 freeze 和 unfreeze 的描述

1. 2017-03-29
  * 增加新交易记录类型: 扣除微信手续费

1. 2017-03-27
  * 修改小池类型为 1
  * 修改大池类型为 2

1. 2017-03-20
  * 修改 transaction title 互助金冻结为互助金预提
  * 修改 transaction title 互助金解冻为互助金结算

1. 2017-03-07
  * 增加 sn 到 transaction 数据结构

1. 2017-03-06
  * 增加 data 到 transactions 表
  * 增加 license 到 transactions 表

1. 2017-03-05
  * 增加 uid 到 transactions 表
  * 删除 accounts 表中的 balance0 字段
  * 增加 frozen_balance0 (小池冻结余额)到 accounts 表
  * 增加 frozen_balance1 (大池冻结余额)到 accounts 表
  * 增加 cashable_balance (可提现余额)到 accounts 表
  * 删除 wallets 表
  * 删除 cashin 方法
  * 删除 cashout 方法
  * 增加 AccountEvent
  * 增加 adjust 方法
  * 增加 wallet-slim-entities 缓存

1. 2017-02-22
  * deduct 方法增加 aid 参数

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
  * 删除 cashout 方法

1. 2016-12-10
  * 增加 wallets 表
  * 增加 wallet_events 表
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

| name     | type      | note         |
| ----     | ----      | ----         |
| frozen   | float     | 冻结金额     |
| cashable | float     | 可提现金额   |
| balance  | float     | 总余额       |
| accounts | [account] | 帐号         |
| project  | project   | 钱包所属险种 |

## Account

| name             | type    | note           |
| ----             | ----    | ----           |
| id               | uuid    | 帐号 ID        |
| vehicle          | vehicle | 帐号对应车辆   |
| balance0         | float   | 小池余额       |
| balance1         | float   | 大池余额       |
| paid             | float   | 支付金额       |
| bonus            | float   | 优惠金额       |
| frozen-balance0  | float   | 小池冻结余额   |
| frozen-balance1  | float   | 大池冻结余额   |
| cashable-balance | float   | 可提现金额     |
| project          | project | 帐号所属险种   |
| license?         | string  | 帐号对应的车牌 |
| owner?           | person  | 帐号对应的用户 |

Account 分为两种类型，若 vehicle 为 null，则为普通帐号；否则为池帐号类型。

大池和小池金额是虚拟金额，支付金额和优惠金额是物理金额。支付金额是用户实际支付的
金额，包括上年的结余; 优惠金额是蜂巢互助补贴的金额。扣款时，优先从支付金额里扣除；
支付金额扣除完毕后，再扣除优惠金额。

续保时，优惠金额不变，继续保留。

普通帐号将和车无关的收支信息保存在 cashable-balance 中。

license 和 owner 仅在 project = 2(三者险) 或 project(死亡险) = 3 的情况下有效。

## Transaction

| name        | type    | note                     |
| ----        | ----    | ----                     |
| id          | uuid    | 交易日志 ID              |
| uid         | uuid    | 用户 ID                  |
| project     | project | 交易记录所属的险种       |
| aid         | uuid    | 帐号 ID                  |
| type        | int     | 记录类型                 |
| license     | string  | 对应的车牌               |
| title       | string  | 钱包日志内容             |
| occurred-at | iso8601 | 发生时间                 |
| amount      | float   | 金额(正为收入，负为支出) |
| oid?        | uuid    | order id                 |
| maid?       | uuid    | 报险 id                  |
| sn?         | string  | 流水号                   |

SN 用于保证 5, 6, 7 和 8 的唯一性，避免重复记录。

### Transaction Title

| project | type | title                                      |
|---------|------|--------------------------------------------|
|       1 |    1 | 加入计划充值                               |
|       1 |    2 | 优惠补贴                                   |
|       1 |    3 | 缴纳管理费                                 |
|       1 |    4 | 试运行期间管理费免缴，中途退出计划不可提现 |
|       1 |    5 | 互助金预存                                 |
|       1 |    6 | 互助金预提                                 |
|       1 |    7 | 互助金结算                                 |
|       1 |    8 | 佣金收入                                   |
|       1 |    9 | 扣除微信手续费                             |
|       1 |   10 | 余额抵扣                                   |
|       1 |   11 | 退出计划                                   |
|       1 |   12 | 退出计划，扣除优惠补贴                     |
|       2 |  201 | 加入                                       |
|       2 |  202 | 充值                                       |
|       2 |  203 | 参与公摊                                   |
|       3 |  301 | 加入                                       |
|       3 |  302 | 充值                                       |
|       3 |  303 | 参与公摊                                   |

### Transaction Type And Data Structure Matrix

| type | maid | oid  | sn   |
| ---- | ---- | ---- | ---- |
| 1    |      | ✓    |      |
| 2    |      | ✓    |      |
| 3    |      | ✓    |      |
| 4    |      | ✓    |      |
| 5    |      |      | ✓    |
| 6    | ✓    |      | ✓    |
| 7    | ✓    |      | ✓    |
| 8    |      |      | ✓    |
| 9    |      | ✓    |      |
| 10   |      | ✓    |      |
| 11   |      | ✓    |      |
| 12   |      | ✓    |      |

类型9只在微信支付时出现。

# Event

## AccountEvent

### Event Data Structure

| name        | type     | note           |
| ----        | ----     | ----           |
| id          | uuid     | event id       |
| type        | smallint | event type     |
| opid        | uuid     | operator id    |
| uid         | uuid     | user id        |
| project     | project  | 事件所属的险种 |
| aid         | uuid     | account id     |
| occurred-at | iso8601  | 事件发生时间   |
| amount      | float    | 金额           |
| maid        | uuid     | 互助事件 id    |
| oid         | uuid     | order id       |
| license     | string   | 车牌           |
| owner       | person   | 用户           |

license 和 owner 仅在 project = 2 或 project = 3 下有效

### Event Type

| code | name             | note     |
|------|------------------|----------|
|    0 | REPLAY           | 重播事件 |
|    1 | INCREASE-NORMAL  | 普通增加 |
|    2 | DECREASE-NORMAL  | 普通减少 |
|    3 | INCREASE-PRIVATE | 小池增加 |
|    4 | DECREASE-PRIVATE | 小池减少 |
|    5 | INCREASE-PUBLIC  | 大池增加 |
|    6 | DECREASE-PUBLIC  | 大池减少 |
|    7 | INCREASE-BONUS   | 优惠增加 |
|    8 | DECREASE-BONUS   | 优惠减少 |
|    9 | FREEZE-PRIVATE   | 小池冻结 |
|   10 | UNFREEZE-PRIVATE | 小池解冻 |
|   11 | FREEZE-PUBLIC    | 大池冻结 |
|   12 | UNFREEZE-PUBLIC  | 大池解冻 |
|   13 | INCREASE-PAID    | 支付增加 |
|   14 | DECREASE-PAID    | 支付减少 |

### Event Type And Data Structure Matrix

| type | amount | maid | oid  | license | owner |
| ---- | ----   | ---- | ---- | ----    | ----  |
|    0 |        |      |      |         |       |
|    1 | ✓      | ?    | ?    |         |       |
|    2 | ✓      | ?    | ?    |         |       |
|    3 | ✓      | ?    | ?    |         |       |
|    4 | ✓      | ?    | ?    |         |       |
|    5 | ✓      | ?    | ?    | ?       | ?     |
|    6 | ✓      | ?    | ?    | ?       | ?     |
|    7 | ✓      | ?    | ?    |         |       |
|    8 | ✓      | ?    | ?    |         |       |
|    9 | ✓      | ?    | ?    |         |       |
|   10 | ✓      | ?    | ?    |         |       |
|   11 | ✓      | ?    | ?    |         |       |
|   12 | ✓      | ?    | ?    |         |       |
|   13 | ✓      | ?    | ?    |         |       |
|   14 | ✓      | ?    | ?    |         |       |

# Database

## account_events

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| uid         | uuid      |      |         |         | users     |
| project     | smallint  |      |         |         | projects  |
| aid         | uuid      |      |         |         | accounts  |
| opid        | uuid      | ✓    |         |         |           |
| type        | smallint  |      |         |         |           |
| data        | json      |      |         |         |           |
| occurred_at | timestamp |      | now     |         |           |

## transactions

| field       | type         | null | default | index   | reference |
| ----        | ----         | ---- | ----    | ----    | ----      |
| id          | uuid         |      |         | primary |           |
| uid         | uuid         |      |         |         | users     |
| project     | smallint     |      |         |         | projects  |
| aid         | uuid         |      |         |         | accounts  |
| type        | smallint     |      |         |         |           |
| license     | varchar(8)   |      |         |         |           |
| title       | varchar(128) |      |         |         |           |
| amount      | integer      |      |         |         |           |
| data        | json         |      |         |         |           |
| occurred_at | timestamp    |      | now     |         |           |

# Cache

| key                              | type       | value                   | note                             |
| ----                             | ----       | ----                    | ----                             |
| account-entities                 | hash       | aid => Account          | 所有钱包帐号实体                 |
| wallet-entities-1                | hash       | UID => Wallet           | 所有"好车主计划"钱包实体         |
| wallet-entities-2                | hash       | UID => Wallet           | 所有"三者"钱包实体               |
| wallet-entities-3                | hash       | UID => Wallet           | 所有"死亡"钱包实体               |
| wallet-slim-entities-1           | hash       | UID => Wallet           | 所有"好车主计划"钱包非完整实体   |
| wallet-slim-entities-2           | hash       | UID => Wallet           | 所有"三者"钱包非完整实体         |
| wallet-slim-entities-3           | hash       | UID => Wallet           | 所有"死亡"钱包非完整实体         |
| transactions-1:${uid}            | sorted set | {occurred, transaction} | "好车主计划"交易记录             |
| transactions-2:${uid}            | sorted set | {occurred, transaction} | "三者"交易记录                   |
| transactions-3:${uid}            | sorted set | {occurred, transaction} | "死亡"交易记录                   |
| transactions-1:${uid}:${license} | sorted set | {occurred, transaction} | 按车牌区分的"好车主计划"交易记录 |
| transactions-2:${uid}:${license} | sorted set | {occurred, transaction} | 按车牌区分的"三者"交易记录       |
| transactions-3:${uid}:${license} | sorted set | {occurred, transaction} | 按车牌区分的"死亡"交易记录       |
| accounts-2                       | sorted set | {occurred, aid}         | 所有"三者"帐号列表               |
| accounts-3                       | sorted set | {occurred, aid}         | 所有"死亡"帐号列表               |
| accounts-of-phone-2:${phone}     | sorted set | {occurred, aid}         | 手机号对应的"三者"帐号           |
| accounts-of-phone-3:${phone}     | sorted set | {occurred, aid}         | 手机号对应的"死亡"帐号           |
| accounts-of-license-2:${license} | sorted set | {occurred, aid}         | 车牌对应的"三者"帐号             |
| accounts-of-license-3:${license} | sorted set | {occurred, aid}         | 车牌对应的"死亡"帐号             |

# API

## getWallet

获得钱包信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name     | type    | note |
| ----     | ----    | ---- |
| project? | integer | 1    |
| slim?    | boolean | true |
| uid?     | uuid    |      |

project 是险种编号，默认为 1，即"好车主计划"

当 slim 为真时，返回的钱包帐号中只有 vid 与车牌信息，不包含车辆的其他信息。

在管理域时可以根据 uid 参数获得钱包信息; 在mobile域只能获得自己的钱包信息。

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

## rechargePlanOrder

"好车主计划" 钱包充值

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

## rechargeThirdOrder

"三者补充计划" 钱包充值

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name   | type  | note     |
| ----   | ----  | ----     |
| oid    | uuid  | Order Id |
| amount | float | 充值金额 |

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

## rechargeDeathOrder

"死亡计划" 钱包充值

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name   | type  | note     |
| ----   | ----  | ----     |
| oid    | uuid  | Order Id |
| amount | float | 充值金额 |

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


## adjust

调整大小池比例。仅对好车主计划有效。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name  | type   | note       |
| ----  | ----   | ----       |
| aid   | uuid   | Account ID |
| ratio | number | 小池占比   |

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
| 404  | 帐号不存在 |
| 408  | 请求超时   |
| 500  | 未知错误   |

## freeze

冻结资金, 仅对好车主计划有效。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note             |
| ----   | ----   | ----             |
| aid    | uuid   | 钱包帐号 ID      |
| type   | number | 1: 小池, 2: 大池 |
| amount | number | 冻结金额         |
| maid   | string | 互助事件 ID      |

type 可以是 1: 小池; 2: 大池; 3: 小池 + 大池

当类型为 3 时，优先冻结小池的，再冻结大池的。

当 amount > 大小池余额时，冻结完余额就不再冻结了。

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

解冻资金, 仅对好车主计划有效。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note             |
| ----   | ----   | ----             |
| aid    | uuid   | 钱包帐号 ID      |
| type   | number | 1: 小池, 2: 大池 |
| amount | number | 解冻金额         |
| maid   | string | 互助事件 ID      |

type 可以是 1: 小池; 2: 大池; 3: 小池 + 大池

当类型为 3 时，优先解冻大池的，再解冻小池的。

当 amount > 冻结余额时，解冻完余额就不再解冻了。

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
| aid    | uuid   | 钱包帐号 ID      |
| amount | number | 扣款金额         |
| maid   | uuid   | 互助事件 ID      |
| type   | number | 1: 小池, 2: 大池 |

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

| name     | type | note                                                         |
| ----     | ---- | ----                                                         |
| start    | int  | 结果在数据集中的起始位置，从 0 开始计数                      |
| stop     | int  | 结果在数据集中的结束位置，从 0 开始计数，-1 代表最后一个数据 |
| project? | int  | 交易记录所属的险种，默认为1                                  |
| license? | int  | 通过车牌过滤结果集                                           |
| uid?     | uuid | 仅 admin 有效                                                |

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

## exportAccounts

将所有帐号信息导出为 csv 文件

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name     | type   | note                    |
| ----     | ----   | ----                    |
| filename | string | 结果保存到文件中        |
| project? | int    | 帐号所属的险种，默认为1 |

#### response

成功：

| name | type   | note   |
| ---- | ----   | ----   |
| code | int    | 200    |
| data | string | "okay" |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## getAdditionalAccounts

列出所有的 Additional 帐号，用在管理平台。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name     | type   | note                                           |
| ----     | ----   | ----                                           |
| project  | int    | 险种(2 or 3)                                   |
| start    | int    | 结果集起始地址，从 0 开始                      |
| stop     | int    | 结果集结束地址，从 0 开始，-1 表示最后一个结果 |
| license? | string | 车牌(可选)                                     |

如果有车牌，则显示该车牌下的 Additional 帐号。

#### response

成功：

| name | type            | note |
| ---- | ----            | ---- |
| code | int             | 200  |
| data | Paging<Account> |      |

Paging 的数据结构包括：

| name  | type   | note                                                             |
|-------|--------|------------------------------------------------------------------|
| count | number | 结果集总数                                                       |
| start | number | 当前结果集在总结果集中的起始地址，从 0 开始                      |
| stop  | number | 当前结果集在总结果集中的结束地址，从 0 开始，-1 表示最后一个结果 |
| data  | [any]  | 当前结果集                                                       |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## getAdditionalAccountsByPhone

列出某手机号下的 Additional 帐号，用在管理平台。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name    | type   | note                                           |
| ----    | ----   | ----                                           |
| project | int    | 险种(2 or 3)                                   |
| phone   | string | 手机号                                         |
| start   | int    | 结果集起始地址，从 0 开始                      |
| stop    | int    | 结果集结束地址，从 0 开始，-1 表示最后一个结果 |

#### response

成功：

| name | type            | note |
| ---- | ----            | ---- |
| code | int             | 200  |
| data | Paging<Account> |      |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |
