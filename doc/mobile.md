<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [API](#api)
  - [createQuotation](#createquotation)
      - [request](#request)
      - [response](#response)
  - [getLastQuotation](#getlastquotation)
      - [request](#request-1)
      - [response](#response-1)
  - [createDriverOrder](#createdriverorder)
      - [request](#request-2)
      - [response](#response-2)
  - [checkTicketOrRecommender](#checkticketorrecommender)
      - [request](#request-3)
      - [response](#response-3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-02-22
  * 增加 checkTicketOrRecommender 方法

1. 2017-02-10
  * 增加 createDriverOrder

1. 2017-02-06
  * 增加 getLastQuotation

1. 2017-02-04
  * 增加 createQuotation

# API

## createQuotation

创建报价，流程如下：

1. 检查验证码是否有效

2. 添加车辆信息

3. 添加车主信息

4. 创建报价

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name                   | type    | note                   |
| ----                   | ----    | ----                   |
| verify_code            | string  | 手机验证码             |
| vehicle_code           | string  | 车型编码               |
| vin                    | string  | 车辆vin码              |
| license_no             | string  | 车牌                   |
| engine_no              | string  | 发动机号               |
| register_date          | date    | 车辆注册日期           |
| average_mileage        | string  | 年平均行驶里程         |
| is_transfer            | boolean | 是否过户车             |
| last_insurance_company | string  | 最近一次投保的保险公司 |
| insurance_due_date     | date    | 保险到期日期           |
| fuel_type              | string  | 燃油类型               |
| accident_status        | string  | 最近出险状况           |
| owner                  | string  | 车主姓名               |
| identity_no            | string  | 车主身份证件编号       |
| phone                  | string  | 车主电话               |
| recommend              | string  | 推荐人                 |

#### response

成功：

| name | type | note |
| ---- | ---- | ---- |
| code | int  | 200  |
| data | uuid | qid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## getLastQuotation

得到用户最后一次的报价，流程如下：

1. 获得用户名下的所有车辆;

2. 遍历所有车辆，得到最后一次的报价。

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note |
| ---- | ---- | ---- |

#### response

成功：

| name | type        | note |
| ---- | ----        | ---- |
| code | int         | 200  |
| data | [quotation] |      |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## createDriverOrder

创建司机订单，流程如下：

1. 保存司机到 person;

2. 创建司机订单。

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name    | type                          | note       |
| ----    | ----                          | ----       |
| vid     | uuid                          | 车辆 ID    |
| drivers | [[person](vehicle.md#person)] | 驾驶人信息 |
| summary | float                         | 总价       |
| payment | float                         | 实付       |

#### response

成功：

| name | type   | note   |
| ---- | ----   | ----   |
| code | int    | 200    |
| data | object | 见下面 |


| name     | type   | note     |
| ----     | ----   | ----     |
| order-id | uuid   | Order ID |
| order-no | string | Order No |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## checkTicketOrRecommender

检查用户的 ticket 或推荐人是否有效。有效，则用户为种子用户;反之为非种子用户。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type   | note           |
| ----      | ----   | ----           |
| recommend | string | 推荐码或推荐人 |

```javascript
rpc.call("profile", "checkTicketOrRecommender", recommend)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

注: code 200时，返回结果data是布尔型，满足情况为true,否则为false

| name | type    | note |
| ---- | ----    | ---- |
| code | int     | 200  |
| data | boolean | true |
