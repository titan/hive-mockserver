<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [vehicle-model](#vehicle-model)
  - [vehicle](#vehicle)
  - [person](#person)
- [Cache](#cache)
  - [vehicle-model](#vehicle-model-1)
- [API](#api)
  - [获得车型 getVehicleModelsByMake](#%E8%8E%B7%E5%BE%97%E8%BD%A6%E5%9E%8B-getvehiclemodelsbymake)
    - [request](#request)
      - [example](#example)
    - [response](#response)
  - [获取报价提交表单(新车已上牌)(个人) setVehicleInfoOnCard](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E5%B7%B2%E4%B8%8A%E7%89%8C%E4%B8%AA%E4%BA%BA-setvehicleinfooncard)
    - [request](#request-1)
      - [example](#example-1)
    - [response](#response-1)
  - [获取报价提交表单(新车未上牌)(个人) setVehicleInfo](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E6%9C%AA%E4%B8%8A%E7%89%8C%E4%B8%AA%E4%BA%BA-setvehicleinfo)
    - [request](#request-2)
      - [example](#example-2)
    - [response](#response-2)
  - [获取报价提交表单(新车已上牌)(企业) setVehicleInfoOnCardEnterprise](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E5%B7%B2%E4%B8%8A%E7%89%8C%E4%BC%81%E4%B8%9A-setvehicleinfooncardenterprise)
    - [request](#request-3)
      - [example](#example-3)
    - [response](#response-3)
  - [获取报价提交表单(新车未上牌)(企业) setVehicleInfoEnterprise](#%E8%8E%B7%E5%8F%96%E6%8A%A5%E4%BB%B7%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E6%96%B0%E8%BD%A6%E6%9C%AA%E4%B8%8A%E7%89%8C%E4%BC%81%E4%B8%9A-setvehicleinfoenterprise)
    - [request](#request-4)
      - [example](#example-4)
    - [response](#response-4)
  - [提交驾驶人信息 setDriverInfo](#%E6%8F%90%E4%BA%A4%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-setdriverinfo)
    - [request](#request-5)
    - [response](#response-5)
  - [修改驾驶人信息 changeDriverInfo](#%E4%BF%AE%E6%94%B9%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-changedriverinfo)
  - [获取所有车信息 getVehicleInfos](#%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E8%BD%A6%E4%BF%A1%E6%81%AF-getvehicleinfos)
      - [example](#example-5)
  - [获取某个车信息 getVehicleInfo](#%E8%8E%B7%E5%8F%96%E6%9F%90%E4%B8%AA%E8%BD%A6%E4%BF%A1%E6%81%AF-getvehicleinfo)
      - [example](#example-6)
  - [获取驾驶人信息 getDriverInfos](#%E8%8E%B7%E5%8F%96%E9%A9%BE%E9%A9%B6%E4%BA%BA%E4%BF%A1%E6%81%AF-getdriverinfos)
  - [注：前端禁用](#%E6%B3%A8%EF%BC%9A%E5%89%8D%E7%AB%AF%E7%A6%81%E7%94%A8)
  - [上传证件照 uploadDriverImages](#%E4%B8%8A%E4%BC%A0%E8%AF%81%E4%BB%B6%E7%85%A7-uploaddriverimages)
  - [查看用户上传证件情况  uploadStatus](#%E6%9F%A5%E7%9C%8B%E7%94%A8%E6%88%B7%E4%B8%8A%E4%BC%A0%E8%AF%81%E4%BB%B6%E6%83%85%E5%86%B5--uploadstatus)
    - [request](#request-6)
      - [example](#example-7)
    - [response](#response-6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ChangeLog

1. 2016-10-10
  * vehicle 增加去年出险次数属性

## Data Structure

### vehicle-model

| name                 | type    | note           |
| ----                 | ----    | ----           |
| vehicle\_code        | string  | 车型代码       |
| vin\_code            | string  | VIN码          |
| vehicle\_name        | string  | 车型名称       |
| brand\_name          | string  | 品牌名称       |
| family\_name         | string  | 车系名称       |
| body\_type           | string  | 车身结构       |
| engine\_number       | string  | 车身结构       |
| engine\_desc         | string  | 发动机描述     |
| gearbox\_name        | string  | 变速箱类型     |
| year\_pattern        | string  | 车款           |
| group\_name          | string  | 车组名称       |
| cfg\_level           | string  | 配置级别       |
| purchase\_price      | float   | 新车购置价     |
| purchase\_price\_tax | float   | 新车购置价含税 |
| seat                 | integer | 座位           |
| effluent\_standard   | string  | 排放标准       |
| pl                   | string  | 排量           |
| fuel\_jet\_type      | string  | 燃油类型       |
| driven\_type         | string  | 驱动形式       |

### vehicle

| name                     | type          | note                   |
| ----                     | ----          | ----                   |
| id                       | uuid          | 车ID                   |
| user\_id                 | user          | 用户                   |
| owner                    | person        | 车主                   |
| owner\_type              | int           | 车主类型               |
| recommend                | string        | 推荐人                 |
| drivers                  | [person]      | 驾驶人                 |
| vehicle\_code            | string        | 车型代码               |
| license\_no              | string        | 车牌                   |
| engine\_no               | string        | 发动机号               |
| register\_date           | iso8601       | 车辆注册日期           |
| average\_mileage         | string        | 年平均行驶里程         |
| model                    | vehicle-model | 车型                   |
| is\_transfer             | boolean       | 是否过户车             |
| receipt\_no              | string        | 新车购置发票号         |
| receipt\_date            | iso8601       | 发票开票日期           |
| last\_insurance\_company | string        | 最近一次投保的保险公司 |
| insurance\_due\_date     | date          | 保险到期时间           |
| driving\_frontal\_view   | string        | 行驶证正面照           |
| driving\_rear\_view      | string        | 行驶证背面照           |
| accident\_times          | integer       | 最近一年出险次数       |

### person

| name                    | type   | note         |
| ----                    | ----   | ----         |
| id                      | uuid   | personID     |
| name                    | string | 姓名         |
| identity\_no            | string | 身份证       |
| phone                   | string | 手机号       |
| identity\_frontal\_view | string | 身份证正面照 |
| identity\_rear\_view    | string | 身份证背面照 |
| license\_frontal\_view  | string | 驾照正面照   |
| license\_rear\_view     | string | 驾照背面照   |


## Cache

### vehicle-model

| key                    | type | value                            | note       |
| ----                   | ---- | ----                             | ----       |
| vehicle-model-entities | hash | VehicleCode => VehicleModel JSON | 车型数据   |
| vehicle-vin-codes      | has  | vin => [VehicleCode] JSON        | vin 码映射 |
| vehicle-model          | set  | vin                              | vin 码     |

## API

### 查看用户上传证件情况  uploadStatus

#### request

| name      | type | note   |
| ----      | ---- | ----   |
| order\_id | uuid | 订单id |

##### example

```javascript

rpc.call("vehicle", "uploadStatus", order_id)
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

See 成功返回数据：[example](../data/vehicle/uploadStatus.json)

### 获取某个车信息 getVehicle

##### example

```javascript

let vid = "00000000-0000-0000-0000-000000000000";
rpc.call("vehicle", "getVehicle", vid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle | vehicle | Vehicle |

See [example](../data/vehicle/getVehicle.json)


### 获取某个车型信息 getVehicleModel

##### example

```javascript

let vehicle_code = "I0000000000000000250000000000041";
rpc.call("vehicle", "getVehicleModel", vid)
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle-model | vehicle-model | Vehicle Model |

See [example](../data/vehicle/getVehicleModel.json)


### 获取所有车信息 getVehicles

##### example

```javascript

rpc.call("vehicle", "getVehicles")
  .then(function (result) {

  }, function (error) {

  });

```

#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle | vehicle | Vehicle |

See [example](../data/vehicle/getVehicles.json)



### 获取驾驶人信息 getDrivers

```javascript
var vid = "00000000-0000-0000-0000-000000000000";
var pid = "00000000-0000-0000-0000-000000000000";

rpc.call("vehicle", "getDrivers", vid, pid)
  .then(function (result) {

  }, function (error) {

  });
```
#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle | vehicle | Vehicle |

See [example](../data/vehicle/getDrivers.json)


### 获取报价提交表单(新车已上牌)(个人) setVehicleInfoOnCard

#### request

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

##### example

```javascript
var name = "";
var identity_no = "";
var phone = "";
var recommend = "";
var vehicle_code = "";
var license_no = "";
var engine_no = "";
var register_date = "";
var average_mileage = "";
var is_transfer = "";
var last_insurance_company = "";
var insurance_due_date = "";

rpc.call("vehicle", "setVehicleInfoOnCard", name, identity_no, phone, recommend, vehicle_code, license_no, engine_no,
  register_date, average_mileage, is_transfer,last_insurance_company, insurance_due_date)
  .then(function (result) {

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


### 获取报价提交表单(新车未上牌)(个人) setVehicle

#### request

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

##### example

```javascript
var name = "";
var identity_no = "";
var phone = "";
var recommend = "";
var vehicle_code = "";
var engine_no = "";
var average_mileage = "";
var is_transfer = "";
var receipt_no = "";
var receipt_date = "";
var last_insurance_company = "";

rpc.call("vehicle", "setVehicleInfo", name, identity_no, phone, recommend, vehicle_code, engine_no,
  receipt_no, receipt_date, average_mileage, is_transfer,last_insurance_company)
  .then(function (result) {

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

See [example](../data/vehicle/setVehicleInfo.json)


### 添加驾驶人信息 setDriver
#### request

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

#### response

| name | type | note      |
| ---- | ---- | ----      |
| pid  | uuid | Person ID |

See [example](../data/vehicle/setDriver.json)

### 获得车型 getVehicleModelsByMake

#### request

| name          | type   | note     |
| ----          | ----   | ----     |
| vehicle\_code | string | 车型代码 |

##### example

```javascript
var code = "I0000000000000000250000000000041";

rpc.call("vehicle", "getVehicleModelsByMake", code)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle-model | vehicle-model | Vehicle Model |

See [example](../data/vehicle/getVehicleModelsByMake.json)

### 上传证件照 uploadDriverImages


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
#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle | vehicle | Vehicle |
See [example](../data/vehicle/uploadDriverImages.json)

### 获取用户车信息 getUserVehicles

##### example

```javascript
rpc.call("vehicle", "getUserVehicles")
  .then(function (result) {

  }, function (error) {

  });
```
#### response

| name          | type          | note          |
| ----          | ----          | ----          |
| vehicle | vehicle | Vehicle|

See [example](../data/vehicle/getUserVehicles.json)