<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [plan-group](#plan-group)
  - [plan](#plan)
- [Database](#database)
  - [plan_groups](#plan_groups)
  - [plans](#plans)
- [Cache](#cache)
- [API](#api)
  - [getPlanGroups](#getplangroups)
      - [request](#request)
      - [response](#response)
  - [getPlans](#getplans)
      - [request](#request-1)
      - [response](#response-1)
  - [increaseJoinedCount](#increasejoinedcount)
      - [request](#request-2)
      - [response](#response-2)
  - [decreaseJoinedCount](#decreasejoinedcount)
      - [request](#request-3)
      - [response](#response-3)
  - [setJoinedCount](#setjoinedcount)
      - [request](#request-4)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-02-10
  * 增加 plan-group 数据结构
  * 修改 plan 数据结构
  * 删除 plan-slim 数据结构
  * 删除 plan-rule 数据结构
  * 删除 plan-item 数据结构
  * 增加 plan_group 数据库
  * 删除 plan_rules 数据库
  * 删除 plan_items 数据库
  * 删除 plan-slim-entities 缓存
  * 修改 plan-joined-count 缓存类型
  * 增加 getPlanGroups 方法
  * 增加 getPlans 方法
  * 删除 getAvailablePlans 方法
  * 删除 getJoinedPlans 方法
  * 删除 getPlan 方法
  * 修改 increaseJoinedCount 方法
  * 修改 descreaseJoinedCount 方法
  * 修改 setJoinedCount 方法

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

## plan-group

| name        | type   | note         |
| ----        | ----   | ----         |
| title       | string | 标题         |
| description | string | 描述         |
| mask        | number | 关联计划掩码 |
| discount    | number | 折扣         |

掩码保存了打包的 plan 编号

## plan

| name        | type    | note     |
| ----        | ----    | ----     |
| title       | string  | 标题     |
| description | string  | 描述     |
| optional    | boolean | 是否可选 |

# Database

## plan_groups

| field       | type         | null | default | index   | reference |
| ----        | ----         | ---- | ----    | ----    | ----      |
| id          | uuid         |      |         | primary |           |
| title       | vchar(128)   |      |         |         |           |
| description | text         | ✓    |         |         |           |
| mask        | integer      |      |         |         |           |
| discount    | numeric(2,2) | ✓    |         |         |           |
| created_at  | timestamp    |      | now     |         |           |
| updated_at  | timestamp    |      | now     |         |           |

## plans

| field       | type       | null | default | index   | reference |
| ----        | ----       | ---- | ----    | ----    | ----      |
| id          | smallint   |      |         | primary |           |
| title       | vchar(128) |      |         |         |           |
| description | text       | ✓    |         |         |           |
| optional    | boolean    |      | false   |         |           |
| created_at  | timestamp  |      | now     |         |           |
| updated_at  | timestamp  |      | now     |         |           |

# Cache

| name              | type         | note         |
| ----              | ----         | ----         |
| plan-entities     | {id => plan} | 计划实体缓存 |
| plan-joined-count | number       | 已加入车辆数 |

# API

## getPlanGroups

获取所有计划套餐

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
| ---- | ---- | ---- |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | data/msg     | meaning |
| ----  | ----         | ----    |
| 200   | [plan-group] | 成功    |
| other | 错误信息     | 失败    |

## getPlans

获取所有计划

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
| ---- | ---- | ---- |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | data/msg | meaning |
| ----  | ----     | ----    |
| 200   | [plan]   | 成功    |
| other | 错误信息 | 失败    |

## increaseJoinedCount

增加已加入车辆数量

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note    |
| ---- | ---- | ----    |

Example:

```javascript
rpc.call("plan", "increaseJoinedCount")
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| code  | data/msg  | meaning        |
| ----  | ----      | ----           |
| 200   | count     | 增加后的车辆数 |
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

Example:

```javascript
rpc.call("plan", "decreaseJoinedCount")
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| code  | data/msg | meaning        |
| ----  | ----     | ----           |
| 200   | count    | 减少后的车辆数 |
| other | 错误信息 | 失败           |

See [example](../data/plan/decreaseJoinedCount.json)

## setJoinedCount

设置已加入车辆数量

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name  | type   | note     |
| ----  | ----   | ----     |
| count | number | 车辆数量 |


Example:

```javascript
const count = 1000;
rpc.call("plan", "setJoinedCount", count)
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| msg/data | string | 结果内容 |

| code  | msg/data | meaning |
| ----  | ----     | ----    |
| 200   | 车辆数   | 成功    |
| other | 错误信息 | 失败    |

See [example](../data/plan/setJoinedCount.json)
