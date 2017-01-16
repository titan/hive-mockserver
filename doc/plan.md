<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [plan](#plan)
  - [plan-slim](#plan-slim)
  - [plan-rule](#plan-rule)
  - [plan-item](#plan-item)
- [Database](#database)
  - [plans](#plans)
  - [plan\_rules](#plan%5C_rules)
  - [plan\_items](#plan%5C_items)
- [Cache](#cache)
- [API](#api)
  - [getAvailablePlans](#getavailableplans)
      - [request](#request)
      - [response](#response)
  - [getJoinedPlans](#getjoinedplans)
      - [request](#request-1)
      - [response](#response-1)
  - [getPlan](#getplan)
      - [request](#request-2)
      - [response](#response-2)
  - [increaseJoinedCount](#increasejoinedcount)
      - [request](#request-3)
      - [response](#response-3)
  - [decreaseJoinedCount](#decreasejoinedcount)
      - [request](#request-4)
      - [response](#response-4)
  - [setJoinedCounts](#setjoinedcounts)
      - [request](#request-5)
      - [response](#response-5)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-01-16
  * getPlan 增加 fat 参数

1. 2017-01-14
  * 增加 plan-entities 缓存
  * 增加 plan-slim-entities 缓存
  * 增加 plan-joined-count 缓存
  * getAvailablePlans 增加 fat 参数
  * getJoinedPlans 增加 fat 参数
  * 增加 plan-slim 数据类型

# Data Structure

## plan

| name            | type        | note           |
| ----            | ----        | ----           |
| title           | string      | 标题           |
| description     | string      | 描述           |
| image           | string      | 头图           |
| thumbnail       | string      | 缩略图         |
| period          | integer     | 互助期         |
| rules           | [plan-rule] | 互助规则       |
| items           | [plan-item] | 计划条目       |
| joined-count    | integer     | 已加入车辆     |
| show\_in\_index | boolean     | 是否在首页显示 |

## plan-slim

plan-slim 是 plan 的精简版，去掉了 rules 和 items

| name            | type    | note           |
| ----            | ----    | ----           |
| title           | string  | 标题           |
| description     | string  | 描述           |
| image           | string  | 头图           |
| thumbnail       | string  | 缩略图         |
| period          | integer | 互助期         |
| joined-count    | integer | 已加入车辆     |
| show\_in\_index | boolean | 是否在首页显示 |

## plan-rule

| name        | type   | note |
| ----        | ----   | ---- |
| name        | string | 名称 |
| title       | string | 标题 |
| description | string | 描述 |

## plan-item

| name        | type   | note |
| ----        | ----   | ---- |
| title       | string | 标题 |
| description | string | 描述 |

# Database

## plans

| field           | type       | null | default | index   | reference |
| ----            | ----       | ---- | ----    | ----    | ----      |
| id              | uuid       |      |         | primary |           |
| title           | char(128)  |      |         |         |           |
| description     | text       | ✓    |         |         |           |
| image           | char(1024) | ✓    |         |         |           |
| thumbnail       | char(1024) | ✓    |         |         |           |
| period          | integer    |      | 365     |         |           |
| show\_in\_index | boolean    | ✓    | false   |         |           |
| created\_at     | timestamp  |      | now     |         |           |
| updated\_at     | timestamp  |      | now     |         |           |

## plan\_rules

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| pid         | uuid      |      |         |         | plans     |
| name        | char(128) | ✓    |         |         |           |
| title       | char(128) |      |         |         |           |
| description | text      | ✓    |         |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

## plan\_items

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| pid         | uuid      |      |         |         | plans     |
| title       | char(128) |      |         |         |           |
| description | text      | ✓    |         |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

# Cache

| name               | type              | note             |
| ----               | ----              | ----             |
| plan-entities      | {id => plan}      | 完整计划实体缓存 |
| plan-slim-entities | {id => plan-slim} | 精简计划实体缓存 |
| plan-joined-count  | {id => count}     | 已加入车辆数     |

# API

## getAvailablePlans

获取可加入计划

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type    | note                   |
| ---- | ----    | ----                   |
| fat  | boolean | 是否显示完整数据(可选) |

Example:

```javascript
rpc.call("plan", "getAvailablePlans")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | data/msg           | meaning |
| ----  | ----               | ----    |
| 200   | [plan]/[plan-slim] | 成功    |
| other | 错误信息           | 失败    |

See [example](../data/plan/getAvailablePlans.json)

## getJoinedPlans

获取已加入计划

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type    | note                   |
| ---- | ----    | ----                   |
| fat  | boolean | 是否显示完整数据(可选) |

Example:

```javascript
rpc.call("plan", "getJoinedPlans")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | data/msg           | meaning |
| ----  | ----               | ----    |
| 200   | [plan]/[plan-slim] | 成功    |
| other | 错误信息           | 失败    |

See [example](../data/plan/getJoinedPlans.json)

## getPlan

获取计划详情

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type    | note                   |
| ---- | ----    | ----                   |
| pid  | uuid    | 计划 ID                |
| fat  | boolean | 是否显示完整数据(可选) |

Example:

```javascript
var pid = "00000000-0000-0000-0000-000000000000";
rpc.call("plan", "getPlan", pid, true)
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | data/msg  | meaning    |
| ----  | ----      | ----       |
| 200   | plan      | 计划       |
| 404   | not found | 计划未找到 |
| other | 错误信息  | 失败       |

See [example](../data/plan/getPlan.json)

## increaseJoinedCount

增加已加入车辆数量

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note    |
| ---- | ---- | ----    |
| pid  | uuid | 计划 ID |

Example:

```javascript
var pid = "00000000-0000-0000-0000-000000000000";
rpc.call("plan", "increaseJoinedCount", pid )
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| code  | data/msg  | meaning        |
| ----  | ----      | ----           |
| 200   | count     | 增加后的车辆数 |
| 404   | not found | 计划未找到     |
| other | 错误信息  | 失败           |

See [example](../data/plan/increaseJoinedCount.json)

## decreaseJoinedCount

减少已加入车辆数量

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note    |
| ---- | ---- | ----    |
| pid  | uuid | 计划 ID |

Example:

```javascript
var pid = "00000000-0000-0000-0000-000000000000";
rpc.call("plan", "decreaseJoinedCount", pid )
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| code  | data/msg  | meaning        |
| ----  | ----      | ----           |
| 200   | count     | 减少后的车辆数 |
| 404   | not found | 计划未找到     |
| other | 错误信息  | 失败           |

See [example](../data/plan/decreaseJoinedCount.json)

## setJoinedCounts

设置已加入车辆数量

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type              | note    |
| ----   | ----              | ----    |
| params | [{uuid, integer}] | 计划 ID |

{uuid, integer} 是 TypeScript 里的 tuple 类型，在 JavaScript 里用 [uuid, integer] 来代替。


Example:

```javascript
let params = [["00000000-0000-0000-0000-000000000000", 1000], ["00000000-0000-0000-0000-000000000001", 200]];
rpc.call("plan", "setJoinedCount", params)
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码 |
| status | string | 结果内容 |

| code  | status   | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See [example](../data/plan/setJoinedCount.json)
