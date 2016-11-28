# Wallet

# ChangeLog
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

### wallet

| name     | type      | note     |
| ----     | ----      | ----     |
| balance  | float     | 账户余额 |
| accounts | [account] | 帐号     |

### account

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

### Transaction

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

### CashOut

| name        | type    | note                |
| ----        | ----    | ----                |
| id          | uuid    | 提现id               |
| no          | string  | 提现编号              |
| state       | integer | 提现状态              |
| amount      | float   | 提现金额              |
| reason      | text    | 拒绝理由             |
| order       | order   | 订单                 |

# Event

## Event Data Structure

| name        | type    | note              |
| ----        | ----    | ----              |
| id          | uuid    | event id          |
| type        | smallint| event type        |
| opid        | uuid    | operator id       |
| uid         | uuid    | user id           |
| occurred-at | iso8601 | 事件发生时间        |
| amount      | float   | 提现金额           |
| reason      | text    | 拒绝理由           |

## Event Type

| type | name       | note       |
| ---- | ----       | ----       |
| 0    | CREATE     | 提现创建   |
| 1    | AGREE      | 提现同意   |
| 2    | REFUSE     | 提现拒绝   |

## Event Type And Data Structure Matrix


| type | amount     | reason    |
| ---- | ----       | ----      |
| 0    | ✓          |          |
| 1    |            |          |
| 2    |            | ✓        |

| type | amonut | reason | 
| ---- | ---- | ----   |
| 0    | ✓    |        | 
| 1    |      |        |
| 2    |      |   ✓   |

# Database

### accounts

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

### transactions

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| aid          | uuid      |      |         |         | accounts  |
| type         | smallint  |      |         |         |           |
| title        | char(128) |      |         |         |           |
| amount       | float     |      |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |

### cashout

| field           | type      | null | default | index   | reference |
| ----            | ----      | ---- | ----    | ----    | ----      |
| id              | uuid      |      |         | primary |           |
| no              | string    |      |         |         |           |
| state           | smallint  |      |         |         |           |
| amount          | float     |      |         |         |           |
| reason          | text      |  ✓   |         |         |           |
| order\_id       | uuid      |      |         |         |   orders  |
| last\_event\_id | uuid      |  ✓   |         |         |           |
| created\_at     | timestamp |      |   now   |         |           |
| updated\_at     | timestamp |      |   now   |         |           |

| cashout\_state     | name         |
| ----               | ----         |
| 0                  | 未处理        |
| 1                  | 已批准        |
| 2                  | 已拒绝        | 

## cashout\_events

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| type         | smallint  |      |         |         |           |
| opid         | uuid      |      |         |         |           |
| uid          | uuid      |  ✓   |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |
| data         | json      |      |         |         |           |

# Cache

| key                 | type       | value                   | note         |
| ----                | ----       | ----                    | ----         |
| wallet-entities     | hash       | UID => Wallet           | 所有钱包实体   |
| transactions-${uid} | sorted set | {occurred, transaction} | 交易记录      |
| cashout-counter     | hash       | date => counter         | 当日提现计数   |
| cashout-entities    | hash       | coid => cashout         | 所有提现实体  |
| applied-cashouts    | sorted set | (提现生成时间, 提现ID)     | 提现申请汇总  |
| agreed-cashouts     | sorted set | (提现生成时间, 提现ID)     | 提现同意汇总  |
| refused-cashouts    | sorted set | (提现生成时间, 提现ID)     | 提现拒绝汇总  |


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

| code | meanning          |
| ---- | ----              |
| 500  | 未知错误           |

See [example](../data/wallet/getTransactions.json)

## ApplyCashOut

申请提现 

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type  | note                |
| ----      | ----  | ----                |
| order_id  | uuid  | 订单id               |

```javascript

rpc.call("wallet", "ApplyCashOut", order_id)
  .then(function (result) {

  }, function (error) {

  });

```
#### response

成功：

| name         | type          | note        |
| ----         | ----          | ----        |
| code         | int           | 200         |
| data         | uuid          | 提现id      |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 500  | 未知错误           |

See [example](../data/wallet/createCashout.json)

## AgreeCashOut

同意提现 

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type     | note                |
| ----      | ----     | ----                |
| coid      | number   | 提现id               |
| state     | integer  | 提现状态              |

```javascript

rpc.call("wallet", "AgreeCashOut", coid, state)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name         | type          | note        |
| ----         | ----          | ----        |
| code         | int           | 200         |
| data         | uuid          | 提现id      |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 500  | 未知错误           |

See [example](../data/wallet/createCashout.json)