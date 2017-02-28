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

1. 2017-02-28
  * 增加 创建报价流程图

1. 2017-02-25
  * 增加 receipt_no,receipt_date 参数到　createQuotation
  * 修改 createQuotation 流程图中对是否创建报价的逻辑判断

1. 2017-02-22
  * 增加 checkTicketOrRecommender 方法
  * 删除 createQuotation 方法的 phone 参数
  * 重命名 createQuotation 方法的 owner 参数为 owner_name
  * 重命名 createQuotation 方法的 identity_no 参数为 owner_identity_no
  * 增加 insured_name 参数到 createQuotation
  * 增加 insured_identity_no 参数到 createQuotation
  * 增加 insured_phone 参数到 createQuotation

1. 2017-02-10
  * 增加 createDriverOrder

1. 2017-02-06
  * 增加 getLastQuotation

1. 2017-02-04
  * 增加 createQuotation

# API

## createQuotation

创建报价，流程如下：

![报价流程1](../img/mobile-createQuotation-workflow1.png)
![报价流程2](../img/mobile-createQuotation-workflow2.png)


| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name                   | type    | note                   |
| ----                   | ----    | ----                   |
| verify_code            | string  | 手机验证码             |
| city_code              | string  | 城市编码               |
| vehicle_code           | string  | 车型编码               |
| vin                    | string  | 车辆vin码              |
| license_no             | string  | 车牌                   |
| engine_no              | string  | 发动机号               |
| register_date          | date    | 车辆注册日期           |
| average_mileage        | string  | 年平均行驶里程         |
| is_transfer            | boolean | 是否过户车             |
| transfer_date          | date    | 过户日期（否传空字符串）|
| last_insurance_company | string  | 最近一次投保的保险公司 |
| insurance_due_date     | date    | 保险到期日期           |
| fuel_type              | string  | 燃油类型               |
| accident_status        | string  | 最近出险状况           |
| owner_name             | string  | 车主姓名               |
| owner_identity_no      | string  | 车主身份证件编号       |
| insured_name           | string  | 投保人姓名             |
| insured_identity_no    | string  | 投保人身份证件编号     |
| insured_phone          | string  | 投保人电话号码         |
| insurer_code           | string  | 保险公司编码           |
| recommend              | string  | 推荐人                 |
| receipt_no             | string  | 发票编号　　　　　　　　　|
| receipt_date           | date    |发票开具日期　　　　　　　　|
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
rpc.call("mobile", "checkTicketOrRecommender", recommend)
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


## getQuotation

通过qid获取报价列表信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type   | note           |
| ----      | ----   | ----           |
| qid       | string | 报价ID          |

```javascript
rpc.call("mobile", "getQuotation", qid)
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

