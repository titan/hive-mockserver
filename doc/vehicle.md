<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [vehicle-model](#vehicle-model)
  - [vehicle](#vehicle)
  - [person](#person)
- [Database](#database)
  - [vehicle\_models](#vehicle%5C_models)
  - [vehicles](#vehicles)
  - [person](#person-1)
- [Cache](#cache)
  - [vehicle-model](#vehicle-model-1)
  - [vehicle](#vehicle-1)
- [API](#api)
  - [查看用户上传证件情况  uploadStatus](#%E6%9F%A5%E7%9C%8B%E7%94%A8%E6%88%B7%E4%B8%8A%E4%BC%A0%E8%AF%81%E4%BB%B6%E6%83%85%E5%86%B5--uploadstatus)
    - [request](#request)
      - [example](#example)
    - [response](#response)
  - [获取某个车型信息 getVehicleModel](#%E8%8E%B7%E5%8F%96%E6%9F%90%E4%B8%AA%E8%BD%A6%E5%9E%8B%E4%BF%A1%E6%81%AF-getvehiclemodel)
      - [example](#example-1)
    - [response](#response-1)
  - [获取某个车信息 getVehicle](#%E8%8E%B7%E5%8F%96%E6%9F%90%E4%B8%AA%E8%BD%A6%E4%BF%A1%E6%81%AF-getvehicle)
      - [example](#example-2)
    - [response](#response-2)
  - [获取所有车信息 getVehicles](#%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E8%BD%A6%E4%BF%A1%E6%81%AF-getvehicles)
      - [example](#example-3)
    - [response](#response-3)
  - [获取驾驶人信息 getDrivers](#%E8%8E%B7%E5%8F%96%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-getdrivers)
    - [response](#response-4)
  - [获取报价提交表单(新车已上牌)(个人) setVehicleOnCard](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E5%B7%B2%E4%B8%8A%E7%89%8C%E4%B8%AA%E4%BA%BA-setvehicleoncard)
    - [request](#request-1)
      - [example](#example-4)
    - [response](#response-5)
  - [获取报价提交表单(新车未上牌)(个人) setVehicle](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E6%9C%AA%E4%B8%8A%E7%89%8C%E4%B8%AA%E4%BA%BA-setvehicle)
    - [request](#request-2)
      - [example](#example-5)
    - [response](#response-6)
  - [添加驾驶人信息 setDriver](#%E6%B7%BB%E5%8A%A0%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-setdriver)
    - [request](#request-3)
    - [response](#response-7)
  - [获得车型 getVehicleModelsByMake](#%E8%8E%B7%E5%BE%97%E8%BD%A6%E5%9E%8B-getvehiclemodelsbymake)
    - [request](#request-4)
      - [example](#example-6)
    - [response](#response-8)
  - [上传证件照 uploadDriverImages](#%E4%B8%8A%E4%BC%A0%E8%AF%81%E4%BB%B6%E7%85%A7-uploaddriverimages)
    - [response](#response-9)
  - [获取用户车信息 getUserVehicles](#%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E8%BD%A6%E4%BF%A1%E6%81%AF-getuservehicles)
      - [example](#example-7)
    - [response](#response-10)
  - [提交出险次数 damageCount](#%E6%8F%90%E4%BA%A4%E5%87%BA%E9%99%A9%E6%AC%A1%E6%95%B0-damagecount)
    - [response](#response-11)
  - [通过车牌号获取车辆信息 getVehicleInfoByLicense](#%E9%80%9A%E8%BF%87%E8%BD%A6%E7%89%8C%E5%8F%B7%E8%8E%B7%E5%8F%96%E8%BD%A6%E8%BE%86%E4%BF%A1%E6%81%AF-getvehicleinfobylicense)
      - [example](#example-8)
    - [request](#request-5)
    - [response](#response-12)
  - [通过响应码获取车型信息 getVehicleInfoByResponseNumber](#%E9%80%9A%E8%BF%87%E5%93%8D%E5%BA%94%E7%A0%81%E8%8E%B7%E5%8F%96%E8%BD%A6%E5%9E%8B%E4%BF%A1%E6%81%AF-getvehicleinfobyresponsenumber)
      - [example](#example-9)
    - [request](#request-6)
    - [response](#response-13)
  - [通过车牌号获取车辆信息、车型信息列表 getCarInfoByLicense](#%E9%80%9A%E8%BF%87%E8%BD%A6%E7%89%8C%E5%8F%B7%E8%8E%B7%E5%8F%96%E8%BD%A6%E8%BE%86%E4%BF%A1%E6%81%AF%E8%BD%A6%E5%9E%8B%E4%BF%A1%E6%81%AF%E5%88%97%E8%A1%A8-getcarinfobylicense)
      - [example](#example-10)
    - [request](#request-7)
    - [response](#response-14)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2016-12-15
  * 增加数据库设计

1. 2016-11-07
  * 添加通过车牌号查询车辆信息

1. 2016-10-26
  * vin-code 从 vehicle-model 移到 vehicle
  * vin-code 改名为 vin


1. 2016-10-10
  * vehicle 增加去年出险次数属性

# Data Structure

## vehicle-model

| name               | type    | note           |
| ----               | ----    | ----           |
| vehicle-code       | string  | 车型代码       |
| vehicle-name       | string  | 车型名称       |
| brand-name         | string  | 品牌名称       |
| family-name        | string  | 车系名称       |
| body-type          | string  | 车身结构       |
| engine-number      | string  | 车身结构       |
| engine-desc        | string  | 发动机描述     |
| gearbox-name       | string  | 变速箱类型     |
| year-pattern       | string  | 车款           |
| group-name         | string  | 车组名称       |
| cfg-level          | string  | 配置级别       |
| purchase-price     | float   | 新车购置价     |
| purchase-price-tax | float   | 新车购置价含税 |
| seat               | integer | 座位           |
| effluent-standard  | string  | 排放标准       |
| pl                 | string  | 排量           |
| fuel-jet-type      | string  | 燃油类型       |
| driven-type        | string  | 驱动形式       |

## vehicle

| name                   | type          | note                   |
| ----                   | ----          | ----                   |
| id                     | uuid          | 车ID                   |
| vin                    | string        | VIN码                  |
| user-id                | user          | 用户                   |
| owner                  | person        | 车主                   |
| owner-type             | int           | 车主类型               |
| recommend              | string        | 推荐人                 |
| drivers                | [person]      | 驾驶人                 |
| vehicle-code           | string        | 车型代码               |
| license-no             | string        | 车牌                   |
| engine-no              | string        | 发动机号               |
| register-date          | iso8601       | 车辆注册日期           |
| average-mileage        | string        | 年平均行驶里程         |
| model                  | vehicle-model | 车型                   |
| is-transfer            | boolean       | 是否过户车             |
| receipt-no             | string        | 新车购置发票号         |
| receipt-date           | iso8601       | 发票开票日期           |
| last-insurance-company | string        | 最近一次投保的保险公司 |
| insurance-due-date     | date          | 保险到期时间           |
| driving-frontal-view   | string        | 行驶证正面照           |
| driving-rear-view      | string        | 行驶证背面照           |
| accident-status        | integer       | 最近出险状况           |

| accident-status | note           |
| ----            | ----           |
| 1               | 去年未出险     |
| 2               | 前年未出险     |
| 3               | 近两年均未出险 |

## person

| name                  | type   | note         |
| ----                  | ----   | ----         |
| id                    | uuid   | personID     |
| name                  | string | 姓名         |
| identity-no           | string | 身份证       |
| phone                 | string | 手机号       |
| identity-frontal-view | string | 身份证正面照 |
| identity-rear-view    | string | 身份证背面照 |
| license-frontal-view  | string | 驾照正面照   |
| license-rear-view     | string | 驾照背面照   |

# Database

## vehicle\_models

| field                | type      | null | default | index   | reference |
| ----                 | ----      | ---- | ----    | ----    | ----      |
| vehicle\_code        | char(32)  |      |         | primary |           |
| vehicle\_name        | char(64)  | ✓    |         |         |           |
| brand\_name          | char(32)  | ✓    |         |         |           |
| family\_name         | char(32)  | ✓    |         |         |           |
| body\_type           | char(16)  | ✓    |         |         |           |
| engine\_desc         | char(16)  | ✓    |         |         |           |
| gearbox\_name        | char(16)  | ✓    |         |         |           |
| year\_pattern        | char(8)   | ✓    |         |         |           |
| group\_name          | char(32)  | ✓    |         |         |           |
| cfg\_level           | char(16)  | ✓    |         |         |           |
| purchase\_price      | real      |      | 0.0     |         |           |
| purchase\_price\_tax | real      |      | 0.0     |         |           |
| seat                 | smallint  |      | 0       |         |           |
| effluent\_standard   | char(8)   | ✓    |         |         |           |
| pl                   | char(16)  | ✓    |         |         |           |
| fuel\_jet\_type      | char(16)  | ✓    |         |         |           |
| driven\_type         | char(8)   | ✓    |         |         |           |
| created\_at          | timestamp |      | now     |         |           |
| updated\_at          | timestamp |      | now     |         |           |
| deleted              | boolean   |      | false   |         |           |

## vehicles

| field                    | type          | null | default | index   | reference |
| ----                     | ----          | ---- | ----    | ----    | ----      |
| id                       | uuid          |      |         | primary |           |
| uid                      | uuid          |      |         |         | users     |
| owner                    | uuid          |      |         |         |           |
| vehicle\_code            | char(32)      |      |         |         |           |
| license\_no              | char(16)      | ✓    |         |         |           |
| engine\_no               | char(32)      | ✓    |         |         |           |
| register\_date           | timestamp     | ✓    |         |         |           |
| average\_mileage         | char(16)      | ✓    |         |         |           |
| is_transfer              | boolean       | ✓    |         |         |           |
| receipt\_no              | char(32)      | ✓    |         |         |           |
| receipt\_data            | timestamp     |      | 0.0     |         |           |
| last\_insurance\_company | char(16)      |      | 0.0     |         |           |
| insurance\_due\_date     | timestamp     |      | 0       |         |           |
| driving\_frontal\_view   | varchar(1024) | ✓    |         |         |           |
| driving\_rear\_view      | varchar(1024) | ✓    |         |         |           |
| recommend                | char(32)      | ✓    |         |         |           |
| fuel\_type               | char(16)      | ✓    |         |         |           |
| accident\_status         | smallint      | ✓    |         |         |           |
| vin                      | char(17)      | ✓    |         |         |           |
| created\_at              | timestamp     |      | now     |         |           |
| updated\_at              | timestamp     |      | now     |         |           |
| deleted                  | boolean       |      | false   |         |           |

## person

| field                   | type          | null | default | index   | reference |
| ----                    | ----          | ---- | ----    | ----    | ----      |
| id                      | uuid          |      |         | primary |           |
| name                    | char(20)      |      |         |         |           |
| identity\_no            | char(18)      |      |         |         |           |
| phone                   | char(16)      | ✓    |         |         |           |
| identity\_frontal\_view | varchar(1024) | ✓    |         |         |           |
| identity\_rear\_view    | varchar(1024) | ✓    |         |         |           |
| license\_frontal\_view  | varchar(1024) | ✓    |         |         |           |
| license\_rear\_view     | varchar(1024) | ✓    |         |         |           |
| created\_at             | timestamp     |      | now     |         |           |
| updated\_at             | timestamp     |      | now     |         |           |
| deleted                 | boolean       |      | false   |         |           |

# Cache

## vehicle-model

| key                    | type | value                            | note       |
| ----                   | ---- | ----                             | ----       |
| vehicle-model-entities | hash | VehicleCode => VehicleModel JSON | 车型数据   |
| vehicle-vin-codes      | has  | vin => [VehicleCode] JSON        | vin 码映射 |
| vehicle-model          | set  | vin                              | vin 码     |

## vehicle

| key              | type  | value                           | note       |
| ----             | ----  | ----                            | ----       |
| vehicle-entities | hash  | ID => Vehicle JSON              | 车数据      |
| vehicle          | list  | ID                              | 车ID       |

# API

## 查看用户上传证件情况  uploadStatus

### request

| name      | type | note   |
| ----      | ---- | ----   |
| order\_id | uuid | 订单id |

#### example

```javascript

var order_id = "94845290-901d-11e6-baa4-e13a142bc7ae";

rpc.call("vehicle", "uploadStatus", order_id)
  .then(function (result) {

  }, function (error) {

  });
```

### response

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

See 成功返回数据：[example](../data/vehicle/uploadStatus.json)

## 获取某个车型信息 getVehicleModel

#### example

```javascript

let vehicle_code = "I0000000000000000250000000000041";

rpc.call("vehicle", "getVehicleModel", vid)
  .then(function (result) {

  }, function (error) {

  });

```

### response

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

See [example](../data/vehicle/getVehicleModel.json)


## 获取某个车信息 getVehicle

#### example

```javascript

let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("vehicle", "getVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });

```

### response

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

See [example](../data/vehicle/getVehicle.json)

## 获取所有车信息 getVehicles

#### example

```javascript

rpc.call("vehicle", "getVehicles")
  .then(function (result) {

  }, function (error) {

  });

```

### response

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

See [example](../data/vehicle/getVehicles.json)



## 获取驾驶人信息 getDrivers

```javascript
var vid = "00000000-0000-0000-0000-000000000000";
var pid = "00000000-0000-0000-0000-000000000000";

rpc.call("vehicle", "getDrivers", vid, pid)
  .then(function (result) {

  }, function (error) {

  });
```
### response

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

See [example](../data/vehicle/getDrivers.json)


## 获取报价提交表单(新车已上牌)(个人) setVehicleOnCard

### request

| name                     | type    | note           |
| ----                     | ----    | ----           |
| name                     | string  | 驾驶人姓名     |
| identity\_no             | string  | 身份证编号     |
| phone                    | string  | 电话号码       |
| recommend                | string  | 推荐人         |
| vehicle\_code            | string  | 车型代码       |
| license\_no              | string  | 车牌           |
| engine\_no               | string  | 发动机号       |
| register\_date           | iso8601 | 注册日期       |
| average\_mileage         | string  | 年平均行驶里程 |
| is\_transfer             | boolean | 是否过户       |
| last\_insurance\_company | string  | 上次投保的公司 |
| insurance\_due\_date     | iso8601 | 保险到期时间   |
| fuel_type                | string  | 燃油类型       |
| vin                      | string  | vin码         |

#### example

```javascript

let name = "aaa";
let identity_no = "440308197406255611";
let phone = "18713575980";
let recommend = null;
let vehicle_code = "4028b2883f19328f013f1c4c8845019a";
let license_no = "a5678";
let engine_no = "5555";
let register_date = new Date("2016-12-06 18:26:54");
let average_mileage = "3万以上";
let is_transfer = false;
let last_insurance_company = null;
let insurance_due_date = new Date("2016-12-06 18:26:54");
let fuel_type = "汽油";
let vin = "WBAZV4101BL456778";

rpc.call("vehicle", "setVehicleOnCard", name, identity_no, phone, recommend, vehicle_code, license_no, engine_no,
  register_date, average_mileage, is_transfer,last_insurance_company, insurance_due_date, fuel_type, vin)
  .then(function (result) {

  }, function (error) {

  });

```

### response

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
| 400  | 参数错误          |
| 403  | 请求接口不存在     |
| 404  | 未找到资源        |
| 408  | 请求超时          |
| 500  | 未知错误          |

See [example](../data/vehicle/setVehicle.json)

## 获取报价提交表单(新车未上牌)(个人) setVehicle

### request

| name                     | type    | note           |
| ----                     | ----    | ----           |
| name                     | string  | 驾驶人姓名     |
| identity\_no             | string  | 身份证编号     |
| phone                    | string  | 电话号码       |
| recommend                | string  | 推荐人         |
| vehicle\_code            | string  | 车型代码       |
| engine\_no               | string  | 发动机号       |
| receipt\_no              | string  | 发票编号       |
| receipt\_date            | iso8601 | 发票开具时间   |
| average\_mileage         | string  | 年平均行驶里程 |
| is\_transfer             | boolean | 是否过户       |
| last\_insurance\_company | string  | 上次投保的公司 |
| fuel_type                | string  | 燃油类型       |
| vin                      | string  | vin码         |


#### example

```javascript

let name = "aaa";
let identity_no = "440308197406255611";
let phone = "18713575980";
let recommend = null;
let vehicle_code = "4028b2883f19328f013f1c4c8845019a";
let engine_no = "5555";
let receipt_no = "123456";
let receipt_date = new Date("2016-12-06 18:26:54");
let average_mileage = "3万以上";
let is_transfer = false;
let last_insurance_company = null;
let fuel_type = "汽油"
let vin = "WBAZV4101BL456778";

rpc.call("vehicle", "setVehicle", name, identity_no, phone, recommend, vehicle_code, engine_no,
  receipt_no, receipt_date, average_mileage, is_transfer,last_insurance_company, fuel_type, vin)
  .then(function (result) {

  }, function (error) {

  });
```

### response

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
| 400  | 参数错误          |
| 403  | 请求接口不存在     |
| 404  | 未找到资源        |
| 408  | 请求超时          |
| 500  | 未知错误          |

See [example](../data/vehicle/setVehicle.json)


## 添加驾驶人信息 setDriver
### request

| name    | type     | note       |
| ----    | ----     | ----       |
| vid     | uuid     | 车辆 ID    |
| drivers | [person] | 驾驶人信息 |

```javascript

var drivers = [
  {
    name: "",
    identity_no: "",
    phone: "",
    is_primary: ""
  }
];

rpc.call("vehicle", "setDriver", vid, drivers)
  .then(function (result) {

  }, function (error) {

  });
```

### response

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

See [example](../data/vehicle/setDriver.json)

## 获得车型 getVehicleModelsByMake

### request

| name          | type   | note     |
| ----          | ----   | ----     |
| vehicle\_code | string | 车型代码 |

#### example

```javascript
var code = "I0000000000000000250000000000041";

rpc.call("vehicle", "getVehicleModelsByMake", code)
  .then(function (result) {

  }, function (error) {

  });
```

### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle-model | vehicle-model | Vehicle Model |

See [example](../data/vehicle/getVehicleModelsByMake.json)

## 上传证件照 uploadDriverImages

```javascript

var vid = "00000000-0000-0000-0000-000000000000";
var driving_frontal_view = "";
var driving_rear_view = "";
var identity_frontal_view = "";
var identity_rear_view = "";
var license_frontal_views = {
  "00000000-0000-0000-0000-000000000000": "http://www.xxxxxxxxx",
  "00000000-0000-0000-0000-000000000001": "http://www.xxxxxxxxx"
};

rpc.call("vehicle", "uploadDriverImages", vid, driving_frontal_view, driving_rear_view, identity_frontal_view, identity_rear_view, license_frontal_views)
  .then(function (result) {

  }, function (error) {

  });
```
### response

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
See [example](../data/vehicle/uploadDriverImages.json)

## 获取用户车信息 getUserVehicles

#### example

```javascript
rpc.call("vehicle", "getUserVehicles")
  .then(function (result) {

  }, function (error) {

  });
```
### response

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

See [example](../data/vehicle/getUserVehicles.json)

## 提交出险次数 damageCount

```javascript

var vid = "00000000-0000-0000-0000-000000000000";
var count = 2;

rpc.call("vehicle", "damageCount", vid, count)
  .then(function (result) {

  }, function (error) {

  });
```
### response

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
See [example](../data/vehicle/damageCount.json)


## 通过车牌号获取车辆信息 getVehicleInfoByLicense

测试用，以后移除

#### example

```javascript
rpc.call("vehicle", "getVehicleInfoByLicense", licenseNumber)
  .then(function (result) {

  }, function (error) {

  });
```
### request
| name | type   | note |
| ---- | ----   | ---- |
| licenseNo | String(8) | 车牌号码, 豫JCC522 |

测试只能用 豫JCC522，其他车牌请求超时。 

如下参数不用调用者提供，但是在请求报文中必须出现：

| name | type   | note |
| ---- | ----   | ---- |
| applicationID | String(32) | 请求方标识，由智通引擎提供 |
| operType | String(32) |  接口类型, 固定值:BDB |
| sendTime | String(20) | 请求时间，调用接口时系统时间,如:2016-05-01 16:10:10 |

### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | JSON | 见下 |

```
{ responseNo: 'ecef20bc-9379-478f-bf4a-4015a35a904f',
     engineNo: '870**86',
     licenseNo: '豫JCC522',
     frameNo: 'LSGPC52****013740',
     firstRegisterDate: '2011-01-14' }
```

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 400  | 数据不存在          |
| 500  | 未知错误          |

## 通过响应码获取车型信息 getVehicleInfoByResponseNumber

测试用，以后移除

#### example

```javascript
rpc.call("vehicle", "getVehicleInfoByResponseNumber", licenseNumber，responseNumber)
  .then(function (result) {

  }, function (error) {

  });
```
### request
| name | type   | note |
| ---- | ----   | ---- |
| licenseNo | String(8) | 车牌号码, 豫JCC522 |
| responseNo | String(36) | 响应码。调用 getVehicleInfoByLicense 返回。 如.8f250190-31b9-4cf9-bea7-99f586ce31f1 |

测试只能用 豫JCC522，ecef20bc-9379-478f-bf4a-4015a35a904f，其他车牌请求超时。 

如下参数不用调用者提供，但是在请求报文中必须出现：

| name | type   | note |
| ---- | ----   | ---- |
| applicationID | String(32) | 请求方标识，由智通引擎提供 |
| operType | String(32) |  接口类型, 固定值:JYK |
| sendTime | String(20) | 请求时间，调用接口时系统时间,如:2016-05-01 16:10:10 |

### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | JSON | 见下 |


```
{ vehicleFgwCode: 'SGM7150DMAA',
       brandCode: '3fe5c096-a157-4b69-8917-b2f168fbd571',
       brandName: '上汽通用雪佛兰',
       engineDesc: '1.5L',
       familyName: '科鲁兹',
       gearboxType: '手动档',
       remark: '手动档 经典版 SE 国Ⅴ',
       newCarPrice: '85900',
       purchasePriceTax: '89571',
       importFlag: '1',
       purchasePrice: '85900',
       seat: '5',
       standardName: '雪佛兰SGM7150DMAA轿车',
       vehicleFgwName: null,
       parentVehName: null },
     { vehicleFgwCode: 'SGM7150DMAA',
       brandCode: '563e87a3-3109-4d38-a330-db45be35d673',
       brandName: '上汽通用雪佛兰',
       engineDesc: '1.5L',
       familyName: '科鲁兹',
       gearboxType: '手动档',
       remark: '手动档 经典版 SL 国Ⅴ',
       newCarPrice: '75900',
       purchasePriceTax: '79144',
       importFlag: '1',
       purchasePrice: '75900',
       seat: '5',
       standardName: '雪佛兰SGM7150DMAA轿车',
       vehicleFgwName: null,
       parentVehName: null }
```

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 400  | 数据不存在          |
| 500  | 未知错误          |


## 通过车牌号获取车辆信息、车型信息列表 getCarInfoByLicense

#### example

```javascript
rpc.call("vehicle", "getVehicleInfoByLicense", licenseNumber)
  .then(function (result) {

  }, function (error) {

  });
```
### request
| name | type   | note |
| ---- | ----   | ---- |
| licenseNo | String(8) | 车牌号码, 豫JCC522 |

测试只能用 豫JCC522，其他车牌请求超时。 

如下参数不用调用者提供，但是在请求报文中必须出现：

| name | type   | note |
| ---- | ----   | ---- |
| applicationID | String(32) | 请求方标识，由智通引擎提供 |
| operType | String(32) |  接口类型, 固定值:BDB |
| sendTime | String(20) | 请求时间，调用接口时系统时间,如:2016-05-01 16:10:10 |

### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | JSON | 见下 |


data 字段解释

| name | type   | note    |
| ---- | ----   | ----    |
|	responseNo  		|		String(36)			|         响应码,如.8f250190-31b9-4cf9-bea7-99f586ce31f1			|
|	engineNo  			|		String(25)			|         发动机号,8 位以上 100****00,8 位及以下 004**761			|
|	licenseNo  			|		String(8) 			|        车牌号 如. 渝 GF8853			|
|	frameNo  			|		String(17)			|          车架号(VIN 码), LJVA34D****010008			|
|	firstRegisterDate  	|		String(20)			|         初登日期, 如. 2013-09-01,获取不到返回为 null			|
| modelList     |   JSON           |    车型列表，见下           |


modelList 字段解释

| name | type   | note    |
| ---- | ----   | ----    |
|	state  				|		String(1) 			|        请求状态,0-失败;1-成功			|
|	msgCode  			|		String(12)			|         错误编码,8 位编码,State 为 0 时才有值			|
|	msg  				|		String(80)			|         返回信息,失败原因等信息			|

data 字段解释

| name | type   | note    |
| ---- | ----   | ----    |
|	vehicleFgwCode  						|		String(50) 	|	发改委编码,SGM7181ATA	|
|	brandCode  						|		String(36) 	|	品牌型号编码,如. 16a65866-4fe2-49d3-b9f9-bd512c3274f9	|
|	brandName  						|		String(50) 	|	品牌型号名称,一汽红旗	|
|	engineDesc 						|		String(10) 	|	 排量,2.4L	|
|	familyName  						|		String(100)	|	车系名称, 世纪星	|
|	gearboxType  						|		String(100)	|	车挡类型, 手动档	|
|	remark 						|		String(200)	|	 备注, 手动档 老款	|
|	newCarPrice  						|		String(11) 	|	新车购置价,如.215000	|
|	purchasePriceTax  						|		String(11) 	|	含税价格,如.233400	|
|	importFlag  						|		String(1) 0	|	进口标识,:国产,1:合资,2:进口	|
|	purchasePrice  						|		String(18) 	|	参考价,215000	|
|	seat  						|		String(50) 	|	座位数,5	|
|	standardName  						|		String(100)	|	款型名称, 红旗 CA7242E6L1 轿车	|
|	vehicleFgwName  						|		String(100)	|	发改委名称, 红旗	|
|	parentVehName  						|		String(100)	|	年份款型, 2008 款 豪华型	|



```
{
    "responseNo": "97c75995-0dd0-45d1-ad03-cf42396410a7",
    "engineNo": "870**86",
    "licenseNo": "豫JCC522",
    "frameNo": "LSGPC52****013740",
    "firstRegisterDate": "2011-01-14",
    "modelList": {
        "state": "1",
        "msg": "success",
        "msgCode": null,
        "data": [
            {
                "vehicleFgwCode": "SGM7150DMAA",
                "brandCode": "3fe5c096-a157-4b69-8917-b2f168fbd571",
                "brandName": "上汽通用雪佛兰",
                "engineDesc": "1.5L",
                "familyName": "科鲁兹",
                "gearboxType": "手动档",
                "remark": "手动档 经典版 SE 国Ⅴ",
                "newCarPrice": "85900",
                "purchasePriceTax": "89571",
                "importFlag": "1",
                "purchasePrice": "85900",
                "seat": "5",
                "standardName": "雪佛兰SGM7150DMAA轿车",
                "vehicleFgwName": null,
                "parentVehName": null
            },
            {
                "vehicleFgwCode": "SGM7150DMAA",
                "brandCode": "563e87a3-3109-4d38-a330-db45be35d673",
                "brandName": "上汽通用雪佛兰",
                "engineDesc": "1.5L",
                "familyName": "科鲁兹",
                "gearboxType": "手动档",
                "remark": "手动档 经典版 SL 国Ⅴ",
                "newCarPrice": "75900",
                "purchasePriceTax": "79144",
                "importFlag": "1",
                "purchasePrice": "75900",
                "seat": "5",
                "standardName": "雪佛兰SGM7150DMAA轿车",
                "vehicleFgwName": null,
                "parentVehName": null
            }
        ]
    }
}

```

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning          |
| ---- | ----              |
| 400  | 数据不存在，具体见返回的 msg 内容          |
| 500  | 未知错误          |
