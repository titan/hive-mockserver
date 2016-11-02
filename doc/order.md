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
- [缓存结构](#%E7%BC%93%E5%AD%98%E7%BB%93%E6%9E%84)
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
  - [生成核保 createUnderwrite](#%E7%94%9F%E6%88%90%E6%A0%B8%E4%BF%9D-createunderwrite)
    - [request](#request-13)
      - [example](#example)
    - [response](#response-8)
  - [工作人员填充验车信息 fillUnderwrite](#%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%A1%AB%E5%85%85%E9%AA%8C%E8%BD%A6%E4%BF%A1%E6%81%AF-fillunderwrite)
    - [request](#request-14)
      - [example](#example-1)
    - [response](#response-9)
  - [提交审核结果 submitUnderwriteResult](#%E6%8F%90%E4%BA%A4%E5%AE%A1%E6%A0%B8%E7%BB%93%E6%9E%9C-submitunderwriteresult)
    - [request](#request-15)
      - [example](#example-2)
    - [response](#response-10)
  - [修改预约验车地点  alterValidatePlace](#%E4%BF%AE%E6%94%B9%E9%A2%84%E7%BA%A6%E9%AA%8C%E8%BD%A6%E5%9C%B0%E7%82%B9--altervalidateplace)
    - [request](#request-16)
      - [example](#example-3)
    - [response](#response-11)
  - [修改审核结果  alterUnderwriteResult](#%E4%BF%AE%E6%94%B9%E5%AE%A1%E6%A0%B8%E7%BB%93%E6%9E%9C--alterunderwriteresult)
    - [request](#request-17)
      - [example](#example-4)
    - [response](#response-12)
  - [修改实际验车地点 alterRealPlace](#%E4%BF%AE%E6%94%B9%E5%AE%9E%E9%99%85%E9%AA%8C%E8%BD%A6%E5%9C%B0%E7%82%B9-alterrealplace)
    - [request](#request-18)
      - [example](#example-5)
    - [response](#response-13)
  - [修改备注 alterNote](#%E4%BF%AE%E6%94%B9%E5%A4%87%E6%B3%A8-alternote)
    - [request](#request-19)
      - [example](#example-6)
    - [response](#response-14)
  - [上传现场图片 uploadPhotos](#%E4%B8%8A%E4%BC%A0%E7%8E%B0%E5%9C%BA%E5%9B%BE%E7%89%87-uploadphotos)
    - [request](#request-20)
      - [example](#example-7)
    - [response](#response-15)
  - [根据订单编号得到核保信息 getUnderwriteByOrderNumber](#%E6%A0%B9%E6%8D%AE%E8%AE%A2%E5%8D%95%E7%BC%96%E5%8F%B7%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyordernumber)
    - [request](#request-21)
      - [example](#example-8)
    - [response](#response-16)
  - [根据订单号得到核保信息 getUnderwriteByOrderId](#%E6%A0%B9%E6%8D%AE%E8%AE%A2%E5%8D%95%E5%8F%B7%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyorderid)
    - [request](#request-22)
      - [example](#example-9)
    - [response](#response-17)
  - [根据核保ID得到核保信息 getUnderwriteByUWId](#%E6%A0%B9%E6%8D%AE%E6%A0%B8%E4%BF%9Did%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyuwid)
    - [request](#request-23)
      - [example](#example-10)
    - [response](#response-18)
  - [判断一个VIN码是否有订单 ValidOrder](#%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AAvin%E7%A0%81%E6%98%AF%E5%90%A6%E6%9C%89%E8%AE%A2%E5%8D%95-validorder)
    - [request](#request-24)
    - [response](#response-19)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ChangeLog

1. 2016-11-02
  * 在 order 中加入 paid\_at。

1. 2016-11-01
  * 在 plan-order 中增加车辆的真实价值。
  * 修改缓存名称：new-orders-id, new-pays-id

1. 2016-10-24
  * order-items 表将 pid 改为 oid

1. 2016-10-15
  * 增加订单编号

## Data Structure

### driver-order

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

### sale-order

| name       | type         | note              |
| ----       | ----         | ----              |
| id         | uuid         | 主键              |
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

### plan-order

| name          | type         | note              |
| ----          | ----         | ----              |
| id            | uuid         | 主键              |
| type          | int          | 订单类型 0        |
| state-code    | int          | 订单状态编码      |
| state         | string       | 订单状态          |
| vehicle       | vehicle      | 车辆              |
| plans         | [plan]       | 包含的 plan       |
| items         | [order-item] | 包含的 order-item |
| quotation     | quotation    | 报价              |
| promotion     | promotion    | 促销              |
| service-ratio | float        | 服务费率          |
| summary       | float        | 订单总额          |
| payment       | float        | 订单实付          |
| expect-at     | date         | 预计生效日期      |
| start-at      | date         | 合约生效时间      |
| stop-at       | date         | 合约失效时间      |
| real-value    | float        | 车辆真实价格      |
| paid-at       | date         | 订单支付时间      |

### order-item

| name      | type      | note             |
| ----      | ----      | ----             |
| id        | uuid      | 主键             |
| plan-item | plan-item | 对应的 plan-item |
| price     | float     | 价格             |

### order-event

| name        | type | note                |
| ----        | ---- | ----                |
| id          | uuid | 主键                |
| oid         | uuid | 订单 ID             |
| uid         | uuid | 触发事件的人        |
| data        | json | JSON 格式的事件数据 |
| occurred-at | date | 事件发生时间        |

### underwrite

| name                   | type      | note                     |
| ---------------------  | --------  | --------------           |
| order                  | order     | 订单                     |
| quotation              | quotation | 报价                     |
| operator               | operator  | 验车工作人员             |
| plan\_time             | ISO8601   | 计划核保时间             |
| real\_time             | ISO8601   | 实际核保完成时间         |
| validate\_place        | string    | 预约验车地点             |
| validate\_update\_time | ISO8601   | 预约验车地点最后修改时间 |
| real\_place            | string    | 实际验车地点             |
| real\_update\_time     | ISO8601   | 实际验车地点最后修改时间 |
| certificate\_state     | int       | 用户证件上传情况         |
| problem\_type          | string    | 车辆存在问题类型         |
| problem\_description   | string    | 车辆存在问题描述         |
| note                   | string    | 备注                     |
| note\_update\_time     | ISO8601   | 备注最后修改时间         |
| photos                 | [photo]   | 照片                     |
| underwrite\_result     | string    | 核保结果                 |
| result\_update\_time   | ISO8601   | 核保结果最后修改时间     |

### photo

| name         | type      | note         |
| ----         | ----      | ----         |
| photo        | string    | 照片         |


### order states

[![订单状态转换图](../img/order-states.svg)](订单状态转换图)
[![订单状态转换图](../img/order-states.png)](订单状态转换图)

## Database

### orders

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

### plan\_order\_ext

| field                | type      | null | default | index   | reference  |
| ----                 | ----      | ---- | ----    | ----    | ----       |
| id                   | serial    |      |         | primary |            |
| oid                  | uuid      |      |         |         | orders     |
| pid                  | uuid      |      |         |         | plans      |
| qid                  | uuid      |      |         |         | quotations |
| pmid                 | uuid      | ✓    |         |         | promotions |
| promotion            | real      | ✓    |         |         | promotion  |
| service\_ratio       | float     |      |         |         |            |
| expect\_at           | timestamp |      | now     |         |            |
| created\_at          | timestamp |      | now     |         |            |
| updated\_at          | timestamp |      | now     |         |            |
| vehicle\_real\_value | real      |      | 0.0     |         |            |

### driver\_order\_ext

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | serial    |      |         | primary |           |
| oid         | uuid      |      |         |         | orders    |
| pid         | uuid      |      |         |         | person    |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

### sale\_order\_ext

| field       | type      | null | default | index   | reference  |
| ----        | ----      | ---- | ----    | ----    | ----       |
| id          | serial    |      |         | primary |            |
| oid         | uuid      |      |         |         | orders     |
| pid         | uuid      |      |         |         | plans      |
| qid         | uuid      |      |         |         | quotations |
| created\_at | timestamp |      | now     |         |            |
| updated\_at | timestamp |      | now     |         |            |

### order\_items

| field | type  | null | default | index   | reference   |
| ----  | ----  | ---- | ----    | ----    | ----        |
| id    | uuid  |      |         | primary |             |
| piid  | uuid  |      |         |         | plan\_items |
| oid   | uuid  |      |         |         | orders      |
| price | float |      | 0.0     |         |             |

### order\_events

| field        | type      | null | default | index   | reference |
| ----         | ----      | ---- | ----    | ----    | ----      |
| id           | uuid      |      |         | primary |           |
| oid          | uuid      |      |         |         |           |
| uid          | uuid      |      |         |         |           |
| data         | json      |      |         |         |           |
| occurred\_at | timestamp |      | now     |         |           |

### underwrite

| field                  | type      | null | default | index   | reference |
| ----                   | ----      | ---- | ----    | ----    | ----      |
| id                     | uuid      |      |         | primary |           |
| oid                    | uuid      |      |         |         | orders    |
| opid                   | uuid      | ✓    |         |         | operators |
| plan\_time             | timestamp |      |         |         |           |
| real\_time             | timestamp | ✓    |         |         |           |
| validate\_place        | char(256) |      |         |         |           |
| validate\_update\_time | timestamp |      |         |         |           |
| real\_place            | char(256) | ✓    |         |         |           |
| real\_update\_time     | timestamp | ✓    |         |         |           |
| certificate\_state     | int       | ✓    |         |         |           |
| problem\_type          | char(64)  |      |         |         |           |
| problem\_description   | text      |      |         |         |           |
| note                   | text      | ✓    |         |         |           |
| note\_update\_time     | timestamp | ✓    |         |         |           |
| underwrite\_result     | char(10)  | ✓    |         |         |           |
| result\_update\_time   | timestamp | ✓    |         |         |           |
| created\_at            | timestamp |      | now     |         |           |
| updated\_at            | timestamp |      | now     |         |           |
| deleted                | boolean   |      | false   |         |           |

| certificate\_state | meaning      |
| ----               | ----         |
| 0                  | 未上传证件   |
| 1                  | 上传部分证件 |
| 2                  | 证件全部上传 |

### underwrite-photos

| field                  | type       | null | default | index   | reference  |
| ----                   | ----       | ---- | ----    | ----    | ----       |
| id                     | uuid       |      |         | primary |            |
| uwid                   | uuid       |      |         |         | underwrite |
| photo                  | char(1024) |      |         |         |            |
| created\_at            | timestamp  |      | now     |         |            |
| updated\_at            | timestamp  |      | now     |         |            |
| deleted                | boolean    |      | false   |         |            |

## 缓存结构

### driver-order

| key           | type       | value                  | note         |
| ----          | ----       | ----                   | ----         |
| driver-orders | sorted set | (订单更新时间, 订单ID) | 司机订单汇总 |

### sale-order

| key         | type       | value                  | note         |
| ----        | ----       | ----                   | ----         |
| sale-orders | sorted set | (订单更新时间, 订单ID) | 代售订单汇总 |

### plan-order

| key         | type       | value                  | note         |
| ----        | ----       | ----                   | ----         |
| plan-orders | sorted set | (订单更新时间, 订单ID) | 计划订单汇总 |

### orders

| key          | type       | value                  | note           |
| ----         | ----       | ----                   | ----           |
| orders       | sorted set | (订单更新时间, 订单ID) | 订单汇总       |
| orders-{uid} | sorted set | (订单更新时间, 订单ID) | 每个用户的订单 |

### order-entities

| key            | type | value               | note         |
| ----           | ---- | ----                | ----         |
| order-entities | hash | 订单ID => 订单 JSON | 所有订单实体 |

### order-driver-entities

| key                   | type | value               | note                 |
| ----                  | ---- | ----                | ----                 |
| order-driver-entities | hash | VID =>  驾驶人 JSON | 所有车辆已生效驾驶人 |

### underwrite

| key           | type       | value                  | note     |
| ----          | ----       | ----                   | ----     |
| underwrite-id | sorted set | (核保更新时间, 核保ID) | 核保汇总 |

### underwrite-entities

| key                 | type | value               | note         |
| ----                | ---- | ----                | ----         |
| underwrite-entities | hash | 核保ID => 核保 JSON | 所有核保实体 |

### new-orders

| key           | type       | value                  | note       |
| ----          | ----       | ----                   | ----       |
| new-orders-id | sorted set | (订单生成时间, 订单ID) | 新订单汇总 |

### new-pays

| key         | type       | value                  | note       |
| ----        | ----       | ----                   | ----       |
| new-pays-id | sorted set | (订单更新时间, 订单ID) | 新支付汇总 |

### VIN-orderID

| key         | type | value          | note   |
| ----        | ---- | ----           | ----   |
| VIN-orderID | hash | VIN => orderID | 订单ID |

## 接口

### 下计划单 placeAnPlanOrder

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

### 下司机单 placeAnDriverOrder

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

### 下代售单 placeAnSaleOrder

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| vid     | uuid          | 车辆 ID  |
| pid     | uuid          | plan ID  |
| qid     | uuid          | 报价 ID  |
| items   | {piid: price} | 代售条目 |
| summary | float         | 总价     |
| payment | float         | 实付     |

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

rpc.call("order", "placeAnSaleOrder", vid, pid, qid, items, summary, payment)
  .then(function (result) {

  }, function (error) {

  });

```



### 修改代售单 updateSaleOrder

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
### 修改订单编号 updatePlanOrderNo

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| order_no| string        |  订单no   |

```javascript
let order_no = "111000100120160000001";

rpc.call("order", "updatePlanOrderNo", order_no)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | number | 状态码    |
| order-no | string | newOrderNo |


### 根据vid获取代售单 getSaleOrder

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

### 根据vid获取已生效计划单 getPlanOrderByVehicle

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| vid     | uuid          | 车辆 ID  |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getPlanOrderByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });


```

### 根据vid获取司机单 getDriverOrderByVehicle

#### request

| name    | type          | note     |
| ----    | ----          | ----     |
| vid     | uuid          | 车辆 ID  |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("order", "getDriverOrderByVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });


```

### 更新订单状态 updateOrderState

#### request

| name       | type   | note         |
| ----       | ----   | ----         |
| order-id   | uuid   | 订单 ID      |
| state-code | int    | 订单状态编码 |
| state      | string | 订单状态     |

```javascript
let order_id = "00000000-0000-0000-0000-000000000000";
let state_code = 2;
let state = '已支付';

rpc.call("order", "updateOrderState", order_id, state_code, state)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| order-id | uuid   | Order ID |


### 获取订单列表 getOrders

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

### 获取订单详情 getOrder

#### request

| name     | type | note      |
| ----     | ---- | ----      |
| order-id | uuid | Order ID |

#### response

| name  | type  | note       |
| ----  | ----  | ----       |
| order | order | Order 详情 |

### 获取驾驶人信息 getDriverOrders

#### request

| name | type | note       |
| ---- | ---- | ----       |
| vid  | uuid | vehicle ID |

#### response

| name    | type   | note           |
| ----    | ----   | ----           |
| drivers | driver | 驾驶人详情详情 |


### 获取订单状态 getOrderState

#### request

| name | type | note       |
| ---- | ---- | ----       |
| vid  | uuid | vehicle ID |
| qid  | uuid | 报价 ID    |

#### response

##### 没有对应订单

| name  | value     | note       |
| ----  | ----      | ----       |
| code  | 500       | 返回状态码 |
| state | not found | 返回状态   |

##### 有对应订单

| name       | type   | note       |
| ----       | ----   | ----       |
| state      | int    | 订单状态码 |
| state-code | string | 订单状态   |


See [计划订单](../data/order/getPlanOrder.json)

See [司机订单](../data/order/getDriverOrder.json)

See [代售订单](../data/order/getSaleOrder.json)

### 生成核保 createUnderwrite

#### request

| name                 | type      | note                     |
| ----                 | ----      | ----                     |
| oid                  | uuid      | 订单id                   |
| plan-time            | timestamp | 计划核保时间             |
| validate-place       | string    | 预约验车地点             |

##### example

```javascript

rpc.call("underwrite", "createUnderwrite", oid, plan_time, validate_place)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/createUnderwrite.json)


### 工作人员填充验车信息 fillUnderwrite

#### request

| name                | type     | note             |
| ----                | ----     | ----             |
| uwid                | uuid     | 核保编号         |
| real-place          | string   | 实际验车地点     |
| opid                | uuid     | 操作员id         |
| certificate-state   | int      | 用户证件上传情况 |
| problem-type        | [string] | 车辆存在问题类型 |
| problem-description | string   | 车辆存在问题描述 |
| note                | string   | 备注             |
| photos              | [photo]  | 照片             |


##### example

```javascript

var uwid = "01994420-87b9-11e6-a929-134811bad5bf";
var real_place = "北京市东城区东直门东方银座";
var opid = "01994420-87b9-11e6-a929-134811bad5bf";
var certificate_state = 1;
var problem_type = ["剐蹭","调漆"];
var problem_description = "追尾。。。。";
var note = "备注内容";
var photos =[
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg",
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg",
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg",
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg",
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg",
  "http://pic.58pic.com/58pic/13/19/86/55m58PICf9t_1024.jpg"
]

rpc.call("underwrite", "fillUnderwrite", uwid, real_place, opid, certificate_state, problem_type, problem_description, note, photos)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/fillUnderwrite.json)

### 提交审核结果 submitUnderwriteResult

#### request

| name              | type   | note     |
| ----              | ----   | ----     |
| uwid              | uuid   | 核保编号 |
| underwrite-result | string | 核保结果 |

##### example

```javascript

var uwid = "b2288950-8849-11e6-86a9-8d3457e084f0";
var underwrite_result = "未通过";

rpc.call("underwrite", "submitUnderwriteResult", uwid, underwrite_result)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name  | type     | note     |
| ----  | ----     | ----     |
| code  | int      | 结果编码 |
| msg   | string   | 结果内容 |

| code  | msg      | meaning  |
| ----  | ----     | ----     |
| 200   | null     | 成功     |
| other | 错误信息 | 失败     |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 修改预约验车地点  alterValidatePlace

#### request

| name           | type   | note         |
| ----           | ----   | ----         |
| uwid           | uuid   | 核保编号     |
| validate-place | string | 预约验车地点 |

##### example

```javascript

var uwid = "b2288950-8849-11e6-86a9-8d3457e084f0";
var validate_place = "北京市东城区东直门东方银座";

rpc.call("underwrite", "alterValidatePlace", uwid, validate_place)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 修改审核结果  alterUnderwriteResult

#### request

| name              | type   | note     |
| ----              | ----   | ----     |
| uwid              | uuid   | 核保编号 |
| underwrite-result | string | 核保结果 |

##### example

```javascript

var uwid = "b2288950-8849-11e6-86a9-8d3457e084f0";
var underwrite_result = "通过";

rpc.call("underwrite", "alterUnderwriteResult", uwid, underwrite_result);
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 修改实际验车地点 alterRealPlace

#### request

| name       | type   | note         |
| ----       | ----   | ----         |
| uwid       | uuid   | 核保编号     |
| real-place | string | 实际验车地点 |

##### example

```javascript

var uwid = "b2288950-8849-11e6-86a9-8d3457e084f0";
var real_place = "北京市东城区东直门东方银座";

rpc.call("underwrite", "alterRealPlace", uwid, real_place);
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 修改备注 alterNote

#### request

| name             | type    | note             |
| ----             | ----    | ----             |
| uwid             | uuid    | 核保编号         |
| note             | string  | 备注             |

##### example

```javascript

var uwid = "b2288950-8849-11e6-86a9-8d3457e084f0";
var note = "备注内容";

rpc.call("underwrite", "alterNote", uwid, note)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 上传现场图片 uploadPhotos

#### request

| name  | type   | note     |
| ----  | ----   | ----     |
| uwid  | uuid   | 核保id   |
| photo | string | 图片地址 |

##### example

```javascript

var uwid = "0000000000-0000-0000-0000-000000000000";
var photo = "http://www.baidu.com";

rpc.call("underwrite", "uploadPhotos", uwid, photo)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/sucessful.json)

### 根据订单编号得到核保信息 getUnderwriteByOrderNumber

#### request

| name | type   | note     |
| ---- | ----   | ----     |
| no   | string | 订单编号 |

##### example

```javascript

var no = "000000000000000000000000000000";

rpc.call("underwrite", "getUnderwriteByOrderNumber", no)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/getUnderwriteByOrder.json)

### 根据订单号得到核保信息 getUnderwriteByOrderId

#### request

| name     | type   | note   |
| ----     | ----   | ----   |
| order-id | string | 订单号 |

##### example

```javascript

var order_id = "0000000000-0000-0000-0000-000000000000";

rpc.call("underwrite", "getUnderwriteByOrderId", order_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/getUnderwriteByOrderId.json)


### 根据核保ID得到核保信息 getUnderwriteByUWId

#### request

| name | type   | note     |
| ---- | ----   | ----     |
| uwid  | string | 核保号 |

##### example

```javascript

var uwid = "0000000000-0000-0000-0000-000000000000";

rpc.call("underwrite", "getUnderwriteByUWId", uwid)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| msg  | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/underwrite/getUnderwriteByUWId.json)

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
