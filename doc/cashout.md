<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [CashOut](#cashout)
- [Event](#event)
  - [CashoutEvent](#cashoutevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix
- [Database](#database)
  - [cashout](#cashout)
  - [cashout\_events](#cashout%5C_events)
- [Cache](#cache)
- [API](#api)
  - [applyCashOut](#applycashout)
      - [request](#request-3)
      - [response](#response-3)
  - [agreeCashOut](#agreecashout)
      - [request](#request-4)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2016-12-27
  * applyCashOut 增加两个参数

1. 2016-12-21
  * 新增此文件

# Data Structure

## CashOut

| name   | type    | note     |
| ----   | ----    | ----     |
| id     | uuid    | 提现id   |
| no     | string  | 提现编号 |
| state  | integer | 提现状态 |
| amount | float   | 提现金额 |
| reason | text    | 拒绝理由 |
| user   | user    | 用户    |

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

# Database

## cashout

| field           | type      | null | default | index   | reference |
| ----            | ----      | ---- | ----    | ----    | ----      |
| id              | uuid      |      |         | primary |           |
| no              | string    |      |         |         |           |
| state           | smallint  |      |         |         |           |
| amount          | float     |      |         |         |           |
| reason          | text      | ✓    |         |         |           |
| user\_id        | uuid      |      |         |         | user      |
| last\_event\_id | uuid      | ✓    |         |         |           |
| created\_at     | timestamp |      | now     |         |           |
| updated\_at     | timestamp |      | now     |         |           |

| cashout\_state | name   |
| ----           | ----   |
| 0              | 未处理 |
| 1              | 已批准 |
| 2              | 已拒绝 |

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
| cashout-counter     | hash       | date => counter         | 当日提现计数 |
| cashout-entities    | hash       | coid => cashout         | 所有提现实体 |
| applied-cashouts    | sorted set | (提现生成时间, 提现ID)  | 提现申请汇总 |
| agreed-cashouts     | sorted set | (提现生成时间, 提现ID)  | 提现同意汇总 |
| refused-cashouts    | sorted set | (提现生成时间, 提现ID)  | 提现拒绝汇总 |

# API

## applyCashOut

申请提现

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name                     | type    | note                |
| ----                     | ----    | ----                |
| vids                     | [uuid]  | 多个车id             |
| whetherChoosedDirectPlans| boolean | 是否选择可直接提现项目  |

```javascript

let vids = [
  00000000-0000-0000-0000-000000000000,
  00000000-0000-0000-0000-000000000001,
  00000000-0000-0000-0000-000000000002
]
let wetherChoosedDirectPlans = true;
rpc.call("wallet", "applyCashOut", vids, whetherChoosedDirectPlans)
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

let coid = 00000000-0000-0000-0000-000000000000;
let state = 1;
let user_id = 00000000-0000-0000-0000-000000000001;
let opid = 00000000-0000-0000-0000-000000000002;
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
