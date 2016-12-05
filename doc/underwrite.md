## Data Structure
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

## Database

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

### underwrite

| key           | type       | value                  | note     |
| ----          | ----       | ----                   | ----     |
| underwrite-id | sorted set | (核保更新时间, 核保ID) | 核保汇总 |

### underwrite-entities

| key                 | type | value               | note         |
| ----                | ---- | ----                | ----         |
| underwrite-entities | hash | 核保ID => 核保 JSON | 所有核保实体 |

## 接口

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
