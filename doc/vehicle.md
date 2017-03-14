<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [vehicle-model](#vehicle-model)
  - [vehicle](#vehicle)
- [Database](#database)
  - [vehicle_models](#vehicle_models)
  - [vehicles](#vehicles)
- [Cache](#cache)
  - [vehicle-model](#vehicle-model-1)
  - [vehicle](#vehicle-1)
- [API](#api)
  - [fetchVehicleModelsByVin](#fetchvehiclemodelsbyvin)
      - [request](#request)
      - [response](#response)
  - [getVehicleModel](#getvehiclemodel)
      - [request](#request-1)
      - [response](#response-1)
  - [fetchVehicleAndModelsByLicense](#fetchvehicleandmodelsbylicense)
      - [request](#request-2)
      - [response](#response-2)
  - [createNewVehicle](#createnewvehicle)
      - [request](#request-3)
      - [response](#response-3)
  - [createVehicle](#createvehicle)
      - [request](#request-4)
      - [response](#response-4)
  - [getVehicle](#getvehicle)
      - [request](#request-5)
      - [response](#response-5)
  - [getVehiclesByUser](#getvehiclesbyuser)
      - [request](#request-6)
      - [response](#response-6)
  - [setInsuranceDueDate](#setinsuranceduedate)
      - [request](#request-7)
      - [response](#response-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-03-14
  * 删除 person 数据结构
  * 删除 person 表
  * 删除 drivers 表
  * 删除 person-entities 缓存
  * 删除 createPerson 接口
  * 删除 getPerson 接口
  * 删除 addDrivers 接口
  * 删除 delDrivers 接口
  * 删除 uploadImages 接口
  * 删除 setPersonVerified 接口
  * 删除 setInsuranceDueDate 接口
  * 增加 ncd 到 vehicle 数据结构
  * 增加 ncd 表

1. 2017-03-13
  * 修改 uploadImages 的示例
  * 删除 person 的 license-rear-view

1. 2017-03-10
  * 删除 person 表的 license_rear_view 字段

1. 2017-03-09
  * 修改 vehicles 字段 vehicle_model_code 为 vehicle_code
  * 删除 createNewVehicle 入参 average_mileage, last_insurance_company
  * 增加 setInsuranceDueDate 方法
  * 修改 vehicles 字段 last_insurance_company, insurance_due_date 为 可选

1. 2017-03-07
  * 增加 getPerson 方法
  * 增加 缓存 person-entities
  * 增加 vehicle-model 的 source 说明

1. 2017-03-06
  * 增加 缓存 vehicles:${uid}

1. 2017-03-04
  * 删除 vehicles 表的 average_mileage 字段
  * 删除 vehicles 表的 transfer_date 字段
  * 重构 vehicle_model 数据结构

1. 2017-03-02
  * 删除 createPerson 的入参 drivers

1. 2017-03-01
  * 增加 drivers 表

1. 2017-02-28
  * 恢复 addDrivers 方法
  * 恢复 delDrivers 方法

1. 2017-02-27
  * 修改 createPerson 的入参 drivers 为 people
  * 删除　createVehicle 示例的入参 ownerphone

1. 2017-02-25
  * 删除 createVehicle 和 createNewVehicle　入参中的 owner_phone
  * 增加 createVehicle 和 createNewVehicle　入参 transfer_date
  * vehicle 增加 transfer_date

1. 2017-02-24
  * 增加 vehicle-license-vin 缓存
  * 增加 source 字段到 vehicle_models 表
  * 重命名 vehicle 表的 vehicle_code 字段为 vehicle_model_code

1. 2017-02-22
  * 重命名 applicant 为 insured

1. 2017-02-20
  * 删除 addDrivers 方法
  * 删除 delDrivers 方法

1. 2017-02-17
  * 增加 zt-response-code 缓存
  * 重命名 fetchVehicleModelByVin 为 fetchVehicleModelsByVin
  * 重命名 fetchVehicleAndModelByLicense 为 fetchVehicleAndModelsByLicense

1. 2017-02-10
  * 修改 vehicle 数据结构，去掉了 owner_type 和 vehicle_code
  * 重构 vehicle_models 数据库
  * 删除 vehicles 缓存
  * 删除 uploadStatus 方法
  * 增加 fetchVehicleModelByVin 方法
  * 重命名 setVehicle 为 createNewVehicle
  * 重命名 setVehicleOnCard 为 createVehicle
  * 删除 getVehicles 方法
  * 删除 getDriver 方法
  * 增加 delDrivers 方法
  * 删除 getVehicleModelsByMake 方法
  * 重命名 getUserVehicles 为 getVehicleByUser
  * 重命名 uploadDriverImages 为 uploadImages
  * 删除 getVehicleInfoByLicense 方法
  * 删除 getVehicleInfoByResponseNumber 方法

1. 2017-02-04
  * vehicles 增加投保人
  * setVehicleOnCard 增加投保人信息
  * setVehicle 增加投保人信息

1. 2017-01-05
  * person 增加 verified
  * person 增加 email
  * person 增加 address
  * 删除 addVehicleModels
  * 增加 setPersonVerified

1. 2016-12-17
  * Rename fetchVehicleModelByLicense to fetchVehicleAndModelByLicense
  * Rename getCarInfoByLicense to fetchVehicleModelByLicense
  * 删除 addVehicleModels 的 vin 参数

1. 2016-12-15
  * setDriver改为addDrivers
  * getDrivers改为getDriver
  * 缓存名vehicle改为vehicles
  * 增加接口addVehicleModels

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

| name   | type    | note     |
| ----   | ----    | ----     |
| source | integer | 数据来源 |
| code   | string  | 车型代码 |
| data   | json    | 车型数据 |

| code | meaning        |
| ---- | ----           |
| 0    | 自定义(老数据) |
| 1    | 精友           |
| 2    | 智通           |

## vehicle

| name                   | type                   | note                   |
| ----                   | ----                   | ----                   |
| id                     | uuid                   | 车ID                   |
| vin                    | string                 | VIN码                  |
| license-no             | string                 | 车牌                   |
| engine-no              | string                 | 发动机号               |
| register-date          | iso8601                | 车辆注册日期           |
| model                  | vehicle-model          | 车型                   |
| is-transfer            | boolean                | 是否过户车             |
| receipt-no             | string                 | 新车购置发票号         |
| receipt-date           | iso8601                | 发票开票日期           |
| last-insurance-company | string                 | 最近一次投保的保险公司 |
| insurance-due-date     | date                   | 保险到期时间           |
| driving-frontal-view   | string                 | 行驶证正面照           |
| driving-rear-view      | string                 | 行驶证背面照           |
| accident-status        | integer                | 最近出险状况           |
| ncd                    | {(Date,Date) => float} | 每保险周期的NCD系数    |

| accident-status | note           |
| ----            | ----           |
| 1               | 去年未出险     |
| 2               | 前年未出险     |
| 3               | 近两年均未出险 |

# Database

## vehicle_models

| field      | type      | null | default | index   | reference |
| ----       | ----      | ---- | ----    | ----    | ----      |
| code       | char(32)  |      |         | primary |           |
| source     | smallint  |      | 1       |         |           |
| data       | json      | ✓    |         |         |           |
| created_at | timestamp |      | now     |         |           |
| updated_at | timestamp |      | now     |         |           |
| deleted    | boolean   |      | false   |         |           |

## vehicles

| field                  | type          | null | default | index   | reference |
| ----                   | ----          | ---- | ----    | ----    | ----      |
| id                     | uuid          |      |         | primary |           |
| vehicle_code           | char(32)      |      |         |         |           |
| license_no             | char(16)      | ✓    |         |         |           |
| engine_no              | char(32)      | ✓    |         |         |           |
| register_date          | timestamp     | ✓    |         |         |           |
| is_transfer            | boolean       | ✓    |         |         |           |
| receipt_no             | char(32)      | ✓    |         |         |           |
| receipt_date           | timestamp     |      | 0.0     |         |           |
| last_insurance_company | char(16)      | ✓    |         |         |           |
| insurance_due_date     | timestamp     | ✓    | 0       |         |           |
| driving_frontal_view   | varchar(1024) | ✓    |         |         |           |
| driving_rear_view      | varchar(1024) | ✓    |         |         |           |
| fuel_type              | char(16)      | ✓    |         |         |           |
| accident_status        | smallint      | ✓    |         |         |           |
| vin                    | char(17)      | ✓    |         |         |           |
| created_at             | timestamp     |      | now     |         |           |
| updated_at             | timestamp     |      | now     |         |           |
| deleted                | boolean       |      | false   |         |           |

## ncd

| field    | type          | null | default | index   | reference |
| ----     | ----          | ---- | ----    | ----    | ----      |
| id       | uuid          |      |         | primary |           |
| vid      | uuid          |      |         |         | vehicles  |
| start_at | timestamp     |      |         |         |           |
| stop_at  | timestamp     |      |         |         |           |
| ncd      | numeric(3, 3) |      |         |         |           |

# Cache

## vehicle-model

| key                         | type       | value                   | note                 |
| ----                        | ----       | ----                    | ----                 |
| vehicle-model-entities      | hash       | {code => vehicle-model} | 车型数据             |
| vehicle-vin-codes           | hash       | {vin => [code]}         | vin 码映射           |
| vehicle-model               | set        | vin                     | vin 码               |
| zt-response-code:${license} | string     | response code           | 智通响应码(三天有效) |
| vehicles:${uid}             | sorted set | [vid]                   | uid 对应的 [vid]     |

## vehicle

| key                 | type | value            | note          |
| ----                | ---- | ----             | ----          |
| vehicle-entities    | hash | {vid => vehicle} | 车数据        |
| vehicle-license-vin | hash | {license => vin} | 车牌号vin映射 |

# API

## fetchVehicleModelsByVin

根据 vin 获取车型信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note  |
| ---- | ----   | ----  |
| vin  | string | vin码 |

#### response

成功：

| name | type          | note     |
| ---- | ----          | ----     |
| code | int           | 200      |
| data | vehicle-model | 车型数据 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/vehicle/fetchVehicleModelsByVin.json)

## getVehicleModel

根据 vehicle code 获取车型信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note         |
| ---- | ----   | ----         |
| code | string | vehicle code |

Example:

```javascript

let vehicle_code = "I0000000000000000250000000000041";

rpc.call("vehicle", "getVehicleModel", vehicle_code)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type | note |
| ---- | ---- | ---- |
| code | int  | 200  |
| data | json |      |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/vehicle/getVehicleModel.json)

## fetchVehicleAndModelsByLicense

通过车牌号获取车辆信息、车型信息列表

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name    | type      | note               |
| ----    | ----      | ----               |
| license | String(8) | 车牌号码, 豫JCC522 |

```javascript
rpc.call("vehicle", "fetchVehicleAndModelsByLicense", license)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | object | 见下 |

See [example](../data/vehicle/fetchVehicleAndModelsByLicense.json)

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## createNewVehicle

创建车辆信息(新车未上牌)

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name                   | type    | note             |
| ----                   | ----    | ----             |
| owner_name             | string  | 车主姓名         |
| owner_identity_no      | string  | 车主身份证编号   |
| insured_name           | string  | 投保人姓名       |
| insured_identity_no    | string  | 投保人身份证编号 |
| insured_phone          | string  | 投保人电话号码   |
| recommend              | string  | 推荐人           |
| vehicle_code           | string  | 车型代码         |
| engine_no              | string  | 发动机号         |
| receipt_no             | string  | 发票编号         |
| receipt_date           | iso8601 | 发票开具时间     |
| is_transfer            | boolean | 是否过户         |
| fuel_type              | string  | 燃油类型         |
| vin                    | string  | vin码            |

Example:

```javascript

let owner_name = "aaa";
let owner_identity_no = "440308197406255611";
let insured_name = "aaa";
let insured_identity_no = "440308197406255611";
let insured_phone = "18713575980";
let recommend = null;
let vehicle_code = "4028b2883f19328f013f1c4c8845019a";
let engine_no = "5555";
let receipt_no = "123456";
let receipt_date = new Date("2016-12-06 18:26:54");
let is_transfer = false;
let fuel_type = "汽油"
let vin = "WBAZV4101BL456778";

rpc.call("vehicle", "setVehicle", owner_name, owner_identity_no, insured_name, insured_identity_no, insured_phone, recommend, vehicle_code, engine_no, receipt_no, receipt_date, is_transfer, fuel_type, vin)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | vid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning       |
| ---- | ----           |
| 400  | 参数错误       |
| 403  | 请求接口不存在 |
| 404  | 未找到资源     |
| 408  | 请求超时       |
| 500  | 未知错误       |

## createVehicle

创建车辆信息（已上牌）

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name                   | type     | note             |
| ----                   | ----     | ----             |
| owner_name             | string   | 车主姓名         |
| owner_identity_no      | string   | 车主身份证编号   |
| insured_name           | string   | 投保人姓名       |
| insured_identity_no    | string   | 投保人身份证编号 |
| insured_phone          | string   | 投保人电话号码   |
| recommend              | string   | 推荐人           |
| vehicle_code           | string   | 车型代码         |
| license_no             | string   | 车牌             |
| engine_no              | string   | 发动机号         |
| register_date          | iso8601  | 注册日期         |
| is_transfer            | boolean  | 是否过户         |
| last_insurance_company | string   | 上次投保的公司   |
| insurance_due_date     | iso8601  | 保险到期时间     |
| fuel_type              | string   | 燃油类型         |
| vin                    | string   | vin码            |
| accident_status        | smallint | 出险次数         |

Example:

```javascript

let owner_name = "aaa";
let owner_identity_no = "440308197406255611";
let insured_name = "aaa";
let insured_identity_no = "440308197406255611";
let insured_phone = "18713575980";
let recommend = null;
let vehicle_code = "4028b2883f19328f013f1c4c8845019a";
let license_no = "a5678";
let engine_no = "5555";
let register_date = new Date("2016-12-06 18:26:54");
let is_transfer = false;
let last_insurance_company = null;
let insurance_due_date = new Date("2016-12-06 18:26:54");
let fuel_type = "汽油";
let vin = "WBAZV4101BL456778";
let accident_status = 1;

rpc.call("vehicle", "createVehicle", owner_name, owner_identity_no, insured_name, insured_identity_no, insured_phone, recommend, vehicle_code, license_no, engine_no, register_date, is_transfer, last_insurance_company, insurance_due_date, fuel_type, vin, accident_status)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | vid  |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning       |
| ---- | ----           |
| 400  | 参数错误       |
| 403  | 请求接口不存在 |
| 404  | 未找到资源     |
| 408  | 请求超时       |
| 500  | 未知错误       |

## getVehicle

获取某辆车信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note       |
| ---- | ---- | ----       |
| vid  | uuid | vehicle id |

Example:

```javascript

let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("vehicle", "getVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

成功：

| name | type   | note    |
| ---- | ----   | ----    |
| code | int    | 200     |
| data | json   |         |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 408  | 请求超时 |
| 500  | 未知错误 |

See [example](../data/vehicle/getVehicle.json)

## getVehiclesByUser

获取用户所有车信息

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

Example:

```javascript

rpc.call("vehicle", "getVehiclesByUser")
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

See [example](../data/vehicle/getVehicles.json)

## setInsuranceDueDate

设置保险到期日期

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name               | type    | note         |
| ----               | ----    | ----         |
| vid                | uuid    | vehicle ID   |
| insurance_due_date | iso8601 | 保险到期时间 |

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| data | person | 结果内容 |
| msg  | string | 错误信息 |

| code | meaning          |
| ---- | ----             |
| 200  | Success          |
| 500  | 错误信息         |

