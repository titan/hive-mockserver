<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [driver-order](#driver-order)
  - [sale-order](#sale-order)
  - [plan-order](#plan-order)
  - [order-item](#order-item)
  - [order-event](#order-event)
  - [underwrite](#underwrite)
  - [photo](#photo)
  - [order states](#order-states)
- [Database](#database)
  - [orders](#orders)
  - [plan\_order\_ext](#plan%5C_order%5C_ext)
  - [driver\_order\_ext](#driver%5C_order%5C_ext)
  - [sale\_order\_ext](#sale%5C_order%5C_ext)
  - [order\_items](#order%5C_items)
  - [order\_events](#order%5C_events)
  - [underwrite](#underwrite-1)
  - [underwrite-photos](#underwrite-photos)
- [Cache](#cache)
  - [driver-order](#driver-order-1)
  - [sale-order](#sale-order-1)
  - [plan-order](#plan-order-1)
  - [orders](#orders-1)
  - [order-entities](#order-entities)
  - [order-driver-entities](#order-driver-entities)
  - [underwrite](#underwrite-2)
  - [underwrite-entities](#underwrite-entities)
  - [new-orders](#new-orders)
  - [new-pays](#new-pays)
  - [VIN-orderID](#vin-orderid)
- [接口](#%E6%8E%A5%E5%8F%A3)
  - [下计划单 placeAnPlanOrder](#%E4%B8%8B%E8%AE%A1%E5%88%92%E5%8D%95-placeanplanorder)
    - [request](#request)
    - [response](#response)
  - [下司机单 placeAnDriverOrder](#%E4%B8%8B%E5%8F%B8%E6%9C%BA%E5%8D%95-placeandriverorder)
    - [request](#request-1)
    - [response](#response-1)
  - [下代售单 placeAnSaleOrder](#%E4%B8%8B%E4%BB%A3%E5%94%AE%E5%8D%95-placeansaleorder)
    - [request](#request-2)
  - [修改代售单 updateSaleOrder](#%E4%BF%AE%E6%94%B9%E4%BB%A3%E5%94%AE%E5%8D%95-updatesaleorder)
    - [request](#request-3)
  - [修改订单编号 updatePlanOrderNo](#%E4%BF%AE%E6%94%B9%E8%AE%A2%E5%8D%95%E7%BC%96%E5%8F%B7-updateplanorderno)
    - [request](#request-4)
    - [response](#response-2)
  - [根据vid获取代售单 getSaleOrder](#%E6%A0%B9%E6%8D%AEvid%E8%8E%B7%E5%8F%96%E4%BB%A3%E5%94%AE%E5%8D%95-getsaleorder)
    - [request](#request-5)
  - [根据vid获取已生效计划单 getPlanOrderByVehicle](#%E6%A0%B9%E6%8D%AEvid%E8%8E%B7%E5%8F%96%E5%B7%B2%E7%94%9F%E6%95%88%E8%AE%A1%E5%88%92%E5%8D%95-getplanorderbyvehicle)
    - [request](#request-6)
  - [根据vid获取司机单 getDriverOrderByVehicle](#%E6%A0%B9%E6%8D%AEvid%E8%8E%B7%E5%8F%96%E5%8F%B8%E6%9C%BA%E5%8D%95-getdriverorderbyvehicle)
    - [request](#request-7)
  - [更新订单状态 updateOrderState](#%E6%9B%B4%E6%96%B0%E8%AE%A2%E5%8D%95%E7%8A%B6%E6%80%81-updateorderstate)
    - [request](#request-8)
    - [response](#response-3)
  - [获取订单列表 getOrders](#%E8%8E%B7%E5%8F%96%E8%AE%A2%E5%8D%95%E5%88%97%E8%A1%A8-getorders)
    - [request](#request-9)
    - [response](#response-4)
  - [获取订单详情 getOrder](#%E8%8E%B7%E5%8F%96%E8%AE%A2%E5%8D%95%E8%AF%A6%E6%83%85-getorder)
    - [request](#request-10)
    - [response](#response-5)
  - [获取驾驶人信息 getDriverOrders](#%E8%8E%B7%E5%8F%96%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-getdriverorders)
    - [request](#request-11)
    - [response](#response-6)
  - [获取订单状态 getOrderState](#%E8%8E%B7%E5%8F%96%E8%AE%A2%E5%8D%95%E7%8A%B6%E6%80%81-getorderstate)
    - [request](#request-12)
    - [response](#response-7)
      - [没有对应订单](#%E6%B2%A1%E6%9C%89%E5%AF%B9%E5%BA%94%E8%AE%A2%E5%8D%95)
      - [有对应订单](#%E6%9C%89%E5%AF%B9%E5%BA%94%E8%AE%A2%E5%8D%95)
  - [判断一个VIN码是否有订单 ValidOrder](#%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AAvin%E7%A0%81%E6%98%AF%E5%90%A6%E6%9C%89%E8%AE%A2%E5%8D%95-validorder)
    - [request](#request-24)
    - [response](#response-19)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-01-09
  * plan order 增加根据订单号获取订单信息

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
| type       | int      | 订单类型 1   |
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
| type       | int          | 订单类型 2        |
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

| name               | type         | note              |
| ----               | ----         | ----              |
| id                 | uuid         | 主键              |
| no                 | string       | 订单编号          |
| type               | int          | 订单类型 0        |
| state-code         | int          | 订单状态编码      |
| state              | string       | 订单状态          |
| vehicle            | vehicle      | 车辆              |
| plans              | [plan]       | 包含的 plan       |
| items              | [order-item] | 包含的 order-item |
| quotation          | quotation    | 报价              |
| promotion          | promotion    | 促销              |
| service-ratio      | float        | 服务费率          |
| summary            | float        | 订单总额          |
| payment            | float        | 订单实付          |
| expect-at          | date         | 预计生效日期      |
| start-at           | date         | 合约生效时间      |
| stop-at            | date         | 合约失效时间      |
| real-value         | float        | 车辆真实价格      |
| paid-at            | date         | 订单支付时间      |
| outside-quotation1 | float        | 安盛天平报价      |
| outside-quotation2 | float        | 人保报价          |
| screenshot1        | string       | 安盛天平报价截屏  |
| screenshot2        | string       | 人保报价截屏      |
| recommend          | string       | 推荐人            |
| ticket             | string       | 扫码 ticket       |

## order-item

| name      | type      | note             |
| ----      | ----      | ----             |
| id        | uuid      | 主键             |
| plan-item | plan-item | 对应的 plan-item |
| price     | float     | 价格             |

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

# Database

## orders

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| no          | char(32)  |      |         | ✓       |           |
| vid         | uuid      |      |         |         | vehicles  |
| type        | smallint  |      | 0       |         |           |
| state\_code | int       |      | 0       |         |           |
| state       | string    | ✓    |         |         |           |
| summary     | float     |      | 0.0     |         |           |
| payment     | float     |      | 0.0     |         |           |
| start\_at   | timestamp |      | now     |         |           |
| stop\_at    | timestamp |      | now     |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |
| paid\_at    | timestamp | ✓    |         |         |           |

## plan\_order\_ext

| field                | type          | null | default | index   | reference  |
| ----                 | ----          | ---- | ----    | ----    | ----       |
| id                   | serial        |      |         | primary |            |
| oid                  | uuid          |      |         |         | orders     |
| pid                  | uuid          |      |         |         | plans      |
| qid                  | uuid          |      |         |         | quotations |
| pmid                 | uuid          | ✓    |         |         | promotions |
| promotion            | real          | ✓    |         |         | promotion  |
| service\_ratio       | float         |      |         |         |            |
| expect\_at           | timestamp     |      | now     |         |            |
| created\_at          | timestamp     |      | now     |         |            |
| updated\_at          | timestamp     |      | now     |         |            |
| vehicle\_real\_value | real          |      | 0.0     |         |            |
| outside\_quotation1  | real          |      | 0.0     |         |            |
| outside\_quotation2  | real          |      | 0.0     |         |            |
| screenshot1          | varchar(1024) | ✓    | 0.0     |         |            |
| screenshot2          | varchar(1024) | ✓    | 0.0     |         |            |
| ticket               | char(96)      | ✓    |         |         |            |
| recommend            | varchar(32)   | ✓    |         |         |            |

## driver\_order\_ext

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | serial    |      |         | primary |           |
| oid         | uuid      |      |         |         | orders    |
| pid         | uuid      |      |         |         | person    |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

## sale\_order\_ext

| field       | type      | null | default | index   | reference  |
| ----        | ----      | ---- | ----    | ----    | ----       |
| id          | serial    |      |         | primary |            |
| oid         | uuid      |      |         |         | orders     |
| pid         | uuid      |      |         |         | plans      |
| qid         | uuid      |      |         |         | quotations |
| created\_at | timestamp |      | now     |         |            |
| updated\_at | timestamp |      | now     |         |            |
| opr\_level  | smallint  |      | -1      |         |            |

## order\_items

| field | type  | null | default | index   | reference   |
| ----  | ----  | ---- | ----    | ----    | ----        |
| id    | uuid  |      |         | primary |             |
| piid  | uuid  |      |         |         | plan\_items |
| oid   | uuid  |      |         |         | orders      |
| price | float |      | 0.0     |         |             |

## order\_events

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| oid          | uuid      |      |         |         |           |
| uid          | uuid      |      |         |         |           |
| data         | json      |      |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |

## 缓存结构

## driver-order

| key           | type       | value                  | note         |
| ----          | ----       | ----                   | ----         |
| driver-orders | sorted set | (订单更新时间, 订单ID) | 司机订单汇总 |

## sale-order

| key         | type       | value                  | note         |
| ----        | ----       | ----                   | ----         |
| sale-orders | sorted set | (订单更新时间, 订单ID) | 代售订单汇总 |

## plan-order

| key         | type       | value                  | note         |
| ----        | ----       | ----                   | ----         |
| plan-orders | sorted set | (订单更新时间, 订单ID) | 计划订单汇总 |

## orders

| key          | type       | value                  | note           |
| ----         | ----       | ----                   | ----           |
| orders       | sorted set | (订单更新时间, 订单ID) | 订单汇总       |
| orders-{uid} | sorted set | (订单更新时间, 订单ID) | 每个用户的订单 |

## order-entities

| key            | type | value               | note         |
| ----           | ---- | ----                | ----         |
| order-entities | hash | 订单ID => 订单 JSON | 所有订单实体 |

## order-driver-entities

| key                   | type | value               | note                 |
| ----                  | ---- | ----                | ----                 |
| order-driver-entities | hash | VID =>  驾驶人 JSON | 所有车辆已生效驾驶人 |

### new-orders

| key           | type       | value                  | note       |
| ----          | ----       | ----                   | ----       |
| new-orders-id | sorted set | (订单生成时间, 订单ID) | 新订单汇总 |

## new-pays

| key         | type       | value                  | note       |
| ----        | ----       | ----                   | ----       |
| new-pays-id | sorted set | (订单更新时间, 订单ID) | 新支付汇总 |

## VIN-orderID

| key         | type | value          | note   |
| ----        | ---- | ----           | ----   |
| VIN-orderID | hash | VIN => orderID | 订单ID |

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

# External Queue

当报价状态改变时，订单模块通过外部消息队列给分销系统提供对应的消息。

具体的内容见 [分销系统](http://git.fengchaohuzhu.com:10080/agent/document/src/master/doc/recommend.md#external-queue)

# API

## placeAnPlanOrder

下计划单

#### request

| name          | type         | note         |
| ----          | ----         | ----         |
| vid           | uuid         | 车辆 ID      |
| plans         | {pid: items} | 计划 ID 列表 |
| qid           | uuid         | 报价 ID      |
| pm-price      | float        | 优惠价格     |
| service-ratio | float        | 服务费率     |
| summary       | float        | 总价         |
| payment       | float        | 实付         |

其中, items 的结构为: `{piid: price}`。piid 是 plan-item 的 ID。

```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let qid = "00000000-0000-0000-0000-000000000000";
let plans = {
  "00000000-0000-0000-0000-000000000000": {
    "00000000-0000-0000-0000-000000000000": 1000.00,
    "00000000-0000-0000-0000-000000000001": 2000.00
  },
  "00000000-0000-0000-0000-000000000001": {
    "00000000-0000-0000-0000-000000000002": 1000.00,
    "00000000-0000-0000-0000-000000000003": 2000.00
  }
};
let pm_price = 500;
let service_ratio = 0;
let summary = 6000;
let payment = 6000;
let expect_at = "2016-08-01T00:00:00.000+800Z";

rpc.call("order", "placeAnPlanOrder", vid, plans, qid, pm_price, service_ratio, summary, payment, expect_at)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| order-id | uuid   | Order ID |
| order-no | string | Order No |

See [example](../data/order/placeAnPlanOrder.json)

## placeAnDriverOrder

下司机单

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

rpc.call("order", "placeAnDriverOrder", vid, dids, summary, payment)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| order-id | uuid   | Order ID |
| order-no | string | Order No |

See [example](../data/order/placeAnDriverOrder.json)

## placeAnSaleOrder

下代售单

#### request

| name       | type          | note     |
| ----       | ----          | ----     |
| vid        | uuid          | 车辆 ID  |
| pid        | uuid          | plan ID  |
| qid        | uuid          | 报价 ID  |
| items      | {piid: price} | 代售条目 |
| summary    | float         | 总价     |
| payment    | float         | 实付     |
| opr\_level | int           | 等级     |


```javascript
let vid = "00000000-0000-0000-0000-000000000000";
let pid = "00000000-0000-0000-0000-000000000004";
let qid = "00000000-0000-0000-0000-000000000000";
let items = {
  "00000000-0000-0000-0000-000000000008": 1000,
  "00000000-0000-0000-0000-000000000009": 2000
};
let summary = 2000;
let payment = 2000;
let opr_level = 5;

rpc.call("order", "placeAnSaleOrder", vid, pid, qid, items, summary, payment, opr_level)
  .then(function (result) {

  }, function (error) {

  });

```

## updateSaleOrder

修改代售单

#### request

| name     | type          | note     |
| ----     | ----          | ----     |
| order-id | uuid          | 车辆 ID  |
| items    | {piid: price} | 代售条目 |

```javascript
let order_id = "00000000-0000-0000-0000-000000000000";
let items = {
  "00000000-0000-0000-0000-000000000008": 1000,
  "00000000-0000-0000-0000-000000000009": 2000
};

rpc.call("order", "updateSaleOrder", order_id, items)
  .then(function (result) {

  }, function (error) {

  });


```
## updatePlanOrderNo

修改订单编号

#### request

| name      | type   | note   |
| ----      | ----   | ----   |
| order\_no | string | 订单no |

```javascript
let order_no = "111000100120160000001";

rpc.call("order", "updatePlanOrderNo", order_no)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note       |
| ----     | ----   | ----       |
| code     | number | 状态码     |
| order-no | string | newOrderNo |


## getSaleOrder

根据vid获取代售单

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| vid     | uuid          | 车辆 ID  |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getSaleOrder", vid)
  .then(function (result) {

  }, function (error) {

  });

```

## getPlanOrderByVehicle

根据vid获取已生效计划单

#### request

| name | type | note    |
| ---- | ---- | ----    |
| vid  | uuid | 车辆 ID |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getPlanOrderByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });


```

## getDriverOrderByVehicle

根据vid获取司机单

#### request

| name | type | note    |
| ---- | ---- | ----    |
| vid  | uuid | 车辆 ID |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getDriverOrderByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });


```

## updateOrderState

更新订单状态

#### request

| name       | type          | note      |
| ----       | ----          | ----      |
| uid        |uuid           |user-id    |
| order_id   | uuid          | 订单 ID   |
| state_code | int           |订单状态编码 |
| state      | string        |订单状态    |

```javascript
let uid = "00000000-0000-0000-0000-000000000000"
let order_no = "111000100320160000000";
let state_code = 2;
let state = '已支付';

rpc.call("order", "updateOrderState", uid, order_no, state_code, state)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| order-id | uuid   | Order ID |

## getAllOrders

 获取已报价

#### request

| name        | type   | note         |
| ----        | ----   | ----         |
| start       | number | 起始记录     |
| limit       | number | 每页显示条数 |
| max         | number | 记最大录数   |
| nowScore    | number | 当前score    |
| order\_id   | string | 订单编号     |
| ownername   | string | 车主姓名     |
| phone       | string | 车主电话     |
| license\_no | string | 车牌号       |
| begintime   | string | 开始时间     |
| endtime     | string | 结束时间     |
| state       | string | 订单状态     |

```javascript
let start = 0;
let limit = 10;
let maxScore = (new Date()).getTime();
let nowScore = (new Date()).getTime();
let order_id = "111000100320160000023";
let ownername = "张三";
let phone = "18141912911";
let license_no = "京8903T";
let begintime = "2016/11/15";
let endtime = "2016/11/15";
let state = 1;

rpc.call("order", "getAllOrders", start, limit, maxScore, nowScore, order_id, ownername, phone, license_no, begintime, endtime, state)
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
| 500  | 未知错误 |

See [example](../data/order/getOrders.json)


## getOrders

获取订单列表

#### request

| name   | type | note           |
| ----   | ---- | ----           |
| uid    | uuid | User ID        |
| offset | int  | 结果集起始地址 |
| limit  | int  | 结果集大小     |

#### response

| name   | type    | note   |
| ----   | ----    | ----   |
| orders | [order] | Orders |

See [example](../data/order/getOrders.json)

## getOrder

获取订单详情

#### request

| name     | type | note     |
| ----     | ---- | ----     |
| order-id | uuid | Order ID |

#### response

| name  | type  | note       |
| ----  | ----  | ----       |
| order | order | Order 详情 |

## getDriverForVehicle

获取对应车的驾驶人信息

#### request

| name | type | note       |
| ---- | ---- | ----       |
| vid  | uuid | vehicle ID |

#### response

返回信息

| name    | type   | note           |
| ----    | ----   | ----           |
| drivers | driver | 驾驶人详情详情   |
 
| name    | type   | note           |
| ----    | ----   | ----           |
| code    | 500    | 系统内部错误     | 

| name    | type   | note            |
| ----    | ----   | ----            |
| code    | 404    | 没有找到对应信息   |

## getOrderState

获取订单状态

#### request

| name | type | note       |
| ---- | ---- | ----       |
| vid  | uuid | vehicle ID |
| qid  | uuid | 报价 ID    |

#### response

没有对应订单

| name  | value     | note       |
| ----  | ----      | ----       |
| code  | 500       | 返回状态码 |
| state | not found | 返回状态   |

有对应订单

| name       | type   | note       |
| ----       | ----   | ----       |
| state      | int    | 订单状态码 |
| state-code | string | 订单状态   |


See [计划订单](../data/order/getPlanOrder.json)

See [司机订单](../data/order/getDriverOrder.json)

See [代售订单](../data/order/getSaleOrder.json)

### 判断一个VIN码是否有订单 ValidOrder

#### request

```javascript

rpc.call("order", "ValidOrder")

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

| code | meanning          |
| ---- | ----              |
| 408  | 请求超时          |
| 500  | 未知错误          |

See [example](../data/quotation/ValidOrder.json)



### 根据订单号获取订单信息

#### request

```javascript

rpc.call("order", "getOrderByOrderNo", order_no)

  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | object | order   |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 404  |  未找到对应订单信息  |
| 408  | 请求超时   　    　 |
| 500  | 未知错误      　    |

See [example](../data/order/Order.json)



### 刷新单个订单

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| type    | number        | 订单类型  |
| uid     | uuid          | 用户id    |
```javascript

其中计划单type为1,司机单为2,代售单为3

let type = 1; 
let uid  = "00000000-0000-0000-0000-000000000000";
let oid  = "00000000-0000-0000-0000-000000000000";
rpc.call("order", "refresh_order", type, uid, oid)
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

| code | meanning          |
| ---- | ----              |
| 408  | 请求超时           |
