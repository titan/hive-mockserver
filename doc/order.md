<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [driver-order](#driver-order)
  - [sale-order](#sale-order)
  - [plan-order](#plan-order)
  - [plan-order-item](#plan-order-item)
  - [order-event](#order-event)
    - [order states](#order-states)
- [Event](#event)
  - [OrderEvent](#orderevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix)
- [Database](#database)
  - [plan_orders](#plan_orders)
  - [plan_order_items](#plan_order_items)
  - [driver_orders](#driver_orders)
  - [driver_order_items](#driver_order_items)
  - [sale_orders](#sale_orders)
  - [order_events](#order_events)
- [Cache](#cache)
  - [order-entities](#order-entities)
  - [order-driver-entities](#order-driver-entities)
  - [vehicle-plan-order](#vehicle-plan-order)
  - [vehicle-sale-order](#vehicle-sale-order)
- [API](#api)
  - [createPlanOrder](#createplanorder)
      - [request](#request)
      - [response](#response)
  - [createDriverOrder](#createdriverorder)
      - [request](#request-1)
      - [response](#response-1)
  - [createSaleOrder](#createsaleorder)
      - [request](#request-2)
      - [response](#response-2)
  - [pay](#pay)
      - [request](#request-3)
      - [response](#response-3)
  - [underwrite](#underwrite)
      - [request](#request-4)
      - [response](#response-4)
  - [takeEffect](#takeeffect)
      - [request](#request-5)
      - [response](#response-5)
  - [expire](#expire)
      - [request](#request-6)
      - [response](#response-6)
  - [applyWithdraw](#applywithdraw)
      - [request](#request-7)
      - [response](#response-7)
  - [refuseWithdraw](#refusewithdraw)
      - [request](#request-8)
      - [response](#response-8)
  - [agreeWithdraw](#agreewithdraw)
      - [request](#request-9)
      - [response](#response-9)
  - [refund](#refund)
      - [request](#request-10)
      - [response](#response-10)
  - [renameNo](#renameno)
      - [request](#request-11)
      - [response](#response-11)
  - [getPlanOrderByVehicle](#getplanorderbyvehicle)
      - [request](#request-12)
      - [response](#response-12)
  - [getDriverOrderByVehicle](#getdriverorderbyvehicle)
      - [request](#request-13)
      - [response](#response-13)
  - [getOrders](#getorders)
      - [request](#request-14)
      - [response](#response-14)
  - [getOrder](#getorder)
      - [request](#request-15)
      - [response](#response-15)
  - [getOrderByQid](#getorderbyqid)
      - [request](#request-16)
      - [response](#response-16)
  - [getOrdersByVid](#getordersbyvid)
      - [request](#request-17)
      - [response](#response-17)
  - [refresh](#refresh)
      - [request](#request-18)
      - [response](#response-18)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-02-18
  * 去掉 plan-order 数据结构中的 quotation, promotion 和 plans 字段
  * 重命名 order-item 为 plan-order-item
  * 重命名 plan-order-item 的 plan-item 属性为 plan
  * 删除 driver-order-items 表中的 price 字段
  * 删除外部队列
  * 删除 getDriverForVehicle 方法
  * 重命名 getPlanOrderByVehicle 方法为 getPlanOrdersByVehicle
  * 重命名 getDriverOrderByVehicle 方法为 getDriverOrdersByVehicle
  * 删除 getOrdersByVid 方法
  * 重命名 getOrders 方法为 getPlanOrdersByUser
  * 重命名 getOrder 方法为 getPlanOrder
  * 重命名 getOrderByQid 方法为 getPlanOrderByQid

1. 2017-02-11
	* 重命名 placeAnDriverOrder 方法为 createDriverOrder
	* 重命名 placeAnSaleOrder 方法为 createSaleOrder
  * 删除 updateSaleOrder 方法
	* 重命名 updatePlanOrderNo 方法为 updateOrderNo
  * 删除 getSaleOrder 方法
	* 重命名 ValidOrder 方法为 getOrdersByVid
	* 重命名 getOrderState 方法为 getOrderByQid
	* 重命名 refresh_order 方法为 refresh
  * 增加 pay 方法
  * 增加 underwrite 方法
  * 增加 takeEffect 方法
  * 增加 expire 方法
  * 增加 applyWithdraw 方法
  * 增加 refuseWithdraw 方法
  * 增加 agreeWithdraw 方法
  * 增加 refund 方法
	* 重命名 updateOrderNo 方法为 renameNo

1. 2017-02-10
  * 删除 driver-order 缓存
  * 删除 plan-order 缓存
  * 删除 sale-order 缓存
  * 删除 orders 缓存
  * 删除 new-orders 缓存
  * 删除 new-pays 缓存
  * 删除 VIN-orderID 缓存
  * 增加 plan-orders 表
  * 增加 plan-order-items 表
  * 增加 driver-orders 表
  * 增加 driver-order-items 表
  * 增加 sale-orders 表
  * 删除 orders 表
  * 删除 plan_order_ext 表
  * 删除 driver_order_ext 表
  * 删除 sale_order_ext 表
  * 删除 order_items 表
  * driver_orders 表增加 uid 字段
  * sale_orders 表增加 uid 字段
  * plan_orders 表增加 evtid 字段
  * driver_orders 表增加 evtid 字段
  * sale_orders 表增加 evtid 字段
  * 删除 getAllOrders 方法
  * 删除 updateOrderState 方法
  * order event 增加 RENAME_NO 事件
	* 重命名 placeAnPlanOrder 方法为 createPlanOrder

1. 2017-02-09
  * 增加 OrderEvent

1. 2017-02-04
  * order 增加投保人

1. 2017-01-03
  * plan order 增加推荐人和推荐 ticket

1. 2016-12-02
  * 移除核保模块

1. 2016-11-14
  * 在 sale-order 中加入 opr-level。
  * 在 plan-order 中加入安盛天平报价，截屏。
  * 在 plan-order 中加入人保报价，截屏。

1. 2016-11-02
  * 在 order 中加入 paid\_at。

1. 2016-11-01
  * 在 plan-order 中增加车辆的真实价值。
  * 修改缓存名称：new-orders-id, new-pays-id

1. 2016-10-24
  * order-items 表将 pid 改为 oid

1. 2016-10-15
  * 增加订单编号

# Data Structure

## driver-order

| name       | type     | note         |
| ----       | ----     | ----         |
| id         | uuid     | 主键         |
| no         | string   | 订单编号     |
| type       | int      | 订单类型 2   |
| state-code | int      | 订单状态编码 |
| state      | string   | 订单状态     |
| vehicle    | vehicle  | 车辆         |
| drivers    | [driver] | 增加的司机   |
| summary    | float    | 订单总额     |
| payment    | float    | 订单实付     |
| start-at   | date     | 合约生效时间 |
| stop-at    | date     | 合约失效时间 |
| paid-at    | date     | 订单支付时间 |

## sale-order

| name       | type         | note              |
| ----       | ----         | ----              |
| id         | uuid         | 主键              |
| no         | string       | 订单编号          |
| type       | int          | 订单类型 3        |
| state-code | int          | 订单状态编码      |
| state      | string       | 订单状态          |
| vehicle    | vehicle      | 车辆              |
| plan       | plan         | 对应的 plan       |
| items      | [order-item] | 包含的 order-item |
| summary    | float        | 订单总额          |
| payment    | float        | 订单实付          |
| start-at   | date         | 合约生效时间      |
| stop-at    | date         | 合约失效时间      |
| paid-at    | date         | 订单支付时间      |
| opr-level  | int          | 选中的三者险      |

## plan-order

| name               | type              | note              |
| ----               | ----              | ----              |
| id                 | uuid              | 主键              |
| no                 | string            | 订单编号          |
| type               | int               | 订单类型 1        |
| state-code         | int               | 订单状态编码      |
| state              | string            | 订单状态          |
| vehicle            | vehicle           | 车辆              |
| items              | [plan-order-item] | 包含的 order-item |
| service-ratio      | float             | 服务费率          |
| summary            | float             | 订单总额          |
| payment            | float             | 订单实付          |
| expect-at          | date              | 预计生效日期      |
| start-at           | date              | 合约生效时间      |
| stop-at            | date              | 合约失效时间      |
| real-value         | float             | 车辆真实价格      |
| paid-at            | date              | 订单支付时间      |
| outside-quotation1 | float             | 安盛天平报价      |
| outside-quotation2 | float             | 人保报价          |
| screenshot1        | string            | 安盛天平报价截屏  |
| screenshot2        | string            | 人保报价截屏      |
| recommend          | string            | 推荐人            |
| ticket             | string            | 扫码 ticket       |

## plan-order-item

| name  | type  | note        |
| ----  | ----  | ----        |
| id    | uuid  | 主键        |
| plan  | plan  | 对应的 plan |
| price | float | 价格        |

## order-event

| name        | type | note                |
| ----        | ---- | ----                |
| id          | uuid | 主键                |
| oid         | uuid | 订单 ID             |
| uid         | uuid | 触发事件的人        |
| data        | json | JSON 格式的事件数据 |
| occurred-at | date | 事件发生时间        |

### order states

[![订单状态转换图](../img/order-states.svg)](订单状态转换图)
[![订单状态转换图](../img/order-states.png)](订单状态转换图)

# Event

## OrderEvent

### Event Data Structure

| name               | type     | note         |
| ----               | ----     | ----         |
| id                 | uuid     | event id     |
| type               | smallint | event type   |
| opid               | uuid     | operator id  |
| oid                | uuid     | order id     |
| order-type         | smallint | order type   |
| occurred-at        | iso8601  | 事件发生时间 |
| amount             | float    | 金额         |
| qid                | uuid     | quotation id |
| expect-at          | iso8601  | 期盼生效时间 |
| real-value         | float    | 车辆实际价值 |
| recommend          | string   | 推荐人       |
| ticket             | string   | 推荐码       |
| outside-quotation1 | float    | 第三方报价1  |
| outside-quotation2 | float    | 第三方报价2  |
| screenshot1        | string   | 第三方截图1  |
| screenshot2        | string   | 第三方截图2  |
| reason             | text     | 拒绝理由     |
| no                 | string   | 订单编号     |

### Event Type

| type | name            | note         |
| ---- | ----            | ----         |
| 0    | CANCEL          | 取消订单     |
| 1    | CREATE          | 创建订单     |
| 2    | PAY             | 支付订单     |
| 3    | UNDERWRITE      | 订单核保     |
| 4    | TAKE_EFFECT     | 订单生效     |
| 5    | EXPIRED         | 订单到期     |
| 6    | APPLY_WITHDRAW  | 申请提现     |
| 7    | REFUSE_WITHDRAW | 拒绝提现申请 |
| 8    | AGREE_WITHDRAW  | 同意提现申请 |
| 9    | REFUND          | 银行退款     |
| 10   | RENAME_NO       | 更换订单编号 |


### Event Type And Data Structure Matrix

| type | amount | qid  | expect-at | real-value | recommend | ticket | outside-quotations | reason | no   |
| ---- | ----   | ---- | ----      | ----       | ----      | ----   | ----               | ----   | ---- |
| 0    |        |      |           |            |           |        |                    |        |      |
| 1    | ✓      | ✓    | ✓         | ✓          | ?         | ?      | ?                  |        | ✓    |
| 2    | ✓      |      |           |            |           |        |                    |        |      |
| 3    |        |      |           |            |           |        |                    |        |      |
| 4    |        |      |           |            |           |        |                    |        |      |
| 5    |        |      |           |            |           |        |                    |        |      |
| 6    |        |      |           |            |           |        |                    |        |      |
| 7    |        |      |           |            |           |        |                    | ✓      |      |
| 8    |        |      |           |            |           |        |                    |        |      |
| 9    |        |      |           |            |           |        |                    |        |      |
| 10   |        |      |           |            |           |        |                    |        | ✓    |

# Database

## plan_orders

| field              | type          | null | default | index   | reference    |
| ----               | ----          | ---- | ----    | ----    | ----         |
| id                 | uuid          |      |         | primary |              |
| no                 | char(32)      |      |         | ✓       |              |
| uid                | uuid          |      |         |         | users        |
| pgid               | uuid          | ✓    |         |         | plangroups   |
| qid                | uuid          |      |         |         | quotations   |
| vid                | uuid          |      |         |         | vehicles     |
| state              | smallint      |      | 0       |         |              |
| state_description  | string        | ✓    |         |         |              |
| summary            | float         |      | 0.0     |         |              |
| payment            | float         |      | 0.0     |         |              |
| applicant          | uuid          |      |         |         | person       |
| promotion          | float         | ✓    |         |         |              |
| service_ratio      | float         |      |         |         |              |
| vehicle_real_value | real          |      | 0.0     |         |              |
| outside_quotation1 | real          |      | 0.0     |         |              |
| outside_quotation2 | real          |      | 0.0     |         |              |
| screenshot1        | varchar(1024) | ✓    | 0.0     |         |              |
| screenshot2        | varchar(1024) | ✓    | 0.0     |         |              |
| ticket             | char(96)      | ✓    |         |         |              |
| recommend          | varchar(32)   | ✓    |         |         |              |
| expect_at          | timestamp     |      | now     |         |              |
| start_at           | timestamp     | ✓    |         |         |              |
| stop_at            | timestamp     | ✓    |         |         |              |
| paid_at            | timestamp     | ✓    |         |         |              |
| created_at         | timestamp     |      | now     |         |              |
| updated_at         | timestamp     |      | now     |         |              |
| evtid              | uuid          | ✓    |         |         | order_events |

## plan_order_items

| field | type  | null | default | index   | reference   |
| ----  | ----  | ---- | ----    | ----    | ----        |
| id    | uuid  |      |         | primary |             |
| oid   | uuid  |      |         |         | plan_orders |
| pid   | uuid  |      |         |         | plans       |
| price | float |      | 0.0     |         |             |

## driver_orders

| field             | type      | null | default | index   | reference    |
| ----              | ----      | ---- | ----    | ----    | ----         |
| id                | uuid      |      |         | primary |              |
| no                | char(32)  |      |         | ✓       |              |
| uid               | uuid      |      |         |         | users        |
| vid               | uuid      |      |         |         | vehicles     |
| state             | smallint  |      | 0       |         |              |
| state_description | string    | ✓    |         |         |              |
| summary           | float     |      | 0.0     |         |              |
| payment           | float     |      | 0.0     |         |              |
| applicant         | uuid      |      |         |         | person       |
| paid_at           | timestamp | ✓    |         |         |              |
| start_at          | timestamp |      | now     |         |              |
| stop_at           | timestamp |      | now     |         |              |
| created_at        | timestamp |      | now     |         |              |
| updated_at        | timestamp |      | now     |         |              |
| evtid             | uuid      | ✓    |         |         | order_events |

## driver_order_items

| field | type  | null | default | index   | reference     |
| ----  | ----  | ---- | ----    | ----    | ----          |
| id    | uuid  |      |         | primary |               |
| oid   | uuid  |      |         |         | driver_orders |
| pid   | uuid  |      |         |         | person        |

## sale_orders

| field             | type      | null | default | index   | reference    |
| ----              | ----      | ---- | ----    | ----    | ----         |
| id                | uuid      |      |         | primary |              |
| no                | char(32)  |      |         | ✓       |              |
| uid               | uuid      |      |         |         | users        |
| vid               | uuid      |      |         |         | vehicles     |
| type              | smallint  |      | 0       |         |              |
| state             | smallint  |      | 0       |         |              |
| state_description | string    | ✓    |         |         |              |
| summary           | float     |      | 0.0     |         |              |
| payment           | float     |      | 0.0     |         |              |
| applicant         | uuid      |      |         |         | person       |
| paid_at           | timestamp | ✓    |         |         |              |
| start_at          | timestamp |      | now     |         |              |
| stop_at           | timestamp |      | now     |         |              |
| created_at        | timestamp |      | now     |         |              |
| updated_at        | timestamp |      | now     |         |              |
| evtid             | uuid      | ✓    |         |         | order_events |

## order_events

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| oid         | uuid      |      |         |         |           |
| uid         | uuid      |      |         |         |           |
| data        | json      |      |         |         |           |
| occurred_at | timestamp |      | now     |         |           |

# Cache

## order-entities

| key            | type | value        | note         |
| ----           | ---- | ----         | ----         |
| order-entities | hash | oid => order | 所有订单实体 |

## order-driver-entities

| key                   | type | value               | note                 |
| ----                  | ---- | ----                | ----                 |
| order-driver-entities | hash | vid => drivers | 所有车辆已生效驾驶人 |

## vehicle-plan-order

根据 vehicle id 得到对应的计划单

| key      | type | value           | note |
| ----     | ---- | ----            | ---- |
| vid-poid | hash | vid => plan oid |      |

## vehicle-sale-order

根据 vehicle id 得到对应的代售单

| key      | type | value           | note |
| ----     | ---- | ----            | ---- |
| vid-soid | hash | vid => sale oid |      |

# API

## createPlanOrder

创建计划订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name          | type         | note         |
| ----          | ----         | ----         |
| vid           | uuid         | 车辆 ID      |
| plans         | {pid: price} | 计划 ID 列表 |
| qid           | uuid         | 报价 ID      |
| pm-price      | float        | 优惠价格     |
| service-ratio | float        | 服务费率     |
| summary       | float        | 总价         |
| payment       | float        | 实付         |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let qid = "00000000-0000-0000-0000-000000000000";
let plans = {
  "1": 1000.00,
  "2": 2000.00
};
let pm_price = 500;
let service_ratio = 0;
let summary = 6000;
let payment = 6000;
let expect_at = "2016-08-01T00:00:00.000+800Z";

rpc.call("order", "createPlanOrder", vid, plans, qid, pm_price, service_ratio, summary, payment, expect_at)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | number | 状态码   |
| data | object | 结构如下 |

| name       | type   | note     |
| ----       | ----   | ----     |
| order-id   | uuid   | Order Id |
| order-no   | string | Order No |
| created-at | Date   | 创建时间 |

## createDriverOrder

创建司机订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name    | type   | note         |
| ----    | ----   | ----         |
| vid     | uuid   | 车辆 ID      |
| dids    | [uuid] | 司机 ID 列表 |
| summary | float  | 总价         |
| payment | float  | 实付         |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let dids = [
  "00000000-0000-0000-0000-000000000000",
  "00000000-0000-0000-0000-000000000001",
  "00000000-0000-0000-0000-000000000002",
  "00000000-0000-0000-0000-000000000003"
];
let summary = 200;
let payment = 200;

rpc.call("order", "createDriverOrder", vid, dids, summary, payment)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | number | 状态码   |
| data | object | 结构如下 |

| name       | type   | note     |
| ----       | ----   | ----     |
| order-id   | uuid   | Order Id |
| order-no   | string | Order No |
| created-at | Date   | 创建时间 |

## createSaleOrder

创建代售订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name       | type         | note     |
| ----       | ----         | ----     |
| vid        | uuid         | 车辆 ID  |
| qid        | uuid         | 报价 ID  |
| items      | {pid: price} | 代售条目 |
| summary    | float        | 总价     |
| payment    | float        | 实付     |
| opr\_level | int          | 等级     |


```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let qid = "00000000-0000-0000-0000-000000000000";
let items = {
  "16777216": 1000,
  "33554432": 2000
};
let summary = 2000;
let payment = 2000;
let opr_level = 5;

rpc.call("order", "createSaleOrder", vid, pid, qid, items, summary, payment, opr_level)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | number | 状态码   |
| data | object | 结构如下 |

| name       | type   | note     |
| ----       | ----   | ----     |
| order-id   | uuid   | Order Id |
| order-no   | string | Order No |
| created-at | Date   | 创建时间 |

## pay

支付订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |
| amount | number | 支付金额 |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## underwrite

核保订单

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## takeEffect

订单生效

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## expire

订单到期

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## applyWithdraw

申请提现

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## refuseWithdraw

拒绝提现申请

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |
| reason | string | 拒绝原因 |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## agreeWithdraw

同意提现申请

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## refund

银行退款

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name   | type   | note     |
| ----   | ----   | ----     |
| oid    | uuid   | 订单 ID  |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | oid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |

## renameNo

修改订单编号

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name      | type   | note   |
| ----      | ----   | ----   |
| order\_no | string | 订单no |

```javascript
let order_no = "111000100120160000001";

rpc.call("order", "renameNo", order_no)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name | type   | note       |
| ---- | ----   | ----       |
| code | number | 状态码     |
| data | string | newOrderNo |

## getPlanOrdersByVehicle

根据vid获取所有计划订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note    |
| ---- | ---- | ----    |
| vid  | uuid | 车辆 ID |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getPlanOrdersByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });


```

#### response

| name | type    | note   |
| ---- | ----    | ----   |
| code | number  | 状态码 |
| data | [order] | Orders |

See [example](../data/order/getPlanOrders.json)

## getDriverOrdersByVehicle

根据vid获取所有司机订单

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note    |
| ---- | ---- | ----    |
| vid  | uuid | 车辆 ID |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getDriverOrdersByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name | type    | note   |
| ---- | ----    | ----   |
| code | number  | 状态码 |
| data | [order] | Orders |

See [example](../data/order/getDriverOrders.json)

## getPlanOrdersByUser

获取用户的订单列表

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name   | type | note           |
| ----   | ---- | ----           |
| uid    | uuid | User ID        |

#### response

| name | type    | note   |
| ---- | ----    | ----   |
| code | number  | 状态码 |
| data | [order] | Orders |

See [example](../data/order/getPlanOrders.json)

## getPlanOrder

获取订单详情

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note     |
| ---- | ---- | ----     |
| oid  | uuid | Order ID |

#### response

| name | type   | note       |
| ---- | ----   | ----       |
| code | number | 状态码     |
| data | order  | Order 详情 |

See [example](../data/order/getPlanOrder.json)

## getPlanOrderByQid

根据报价获取订单

#### request

| name | type | note       |
| ---- | ---- | ----       |
| qid  | uuid | 报价 ID    |

#### response

成功：

| name | type  | note  |
| ---- | ----  | ----  |
| code | int   | 200   |
| data | order | Order |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/order/getPlanOrder.json)

## refresh

刷新订单

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type   | note           |
| ---- | ----   | ----           |
| no   | string | 订单编号(可选) |

```javascript
rpc.call("order", "refresh", type, uid, oid)
  .then(function (result) {

  }, function (error) {

  });

```

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

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
