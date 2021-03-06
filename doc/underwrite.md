<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Data Structure](#data-structure)
  - [underwrite](#underwrite)
  - [photo](#photo)
- [Database](#database)
  - [underwrite](#underwrite-1)
  - [underwrite-photos](#underwrite-photos)
- [缓存结构](#%E7%BC%93%E5%AD%98%E7%BB%93%E6%9E%84)
  - [underwrite](#underwrite-2)
  - [underwrite-entities](#underwrite-entities)
- [接口](#%E6%8E%A5%E5%8F%A3)
  - [工作人员填充验车信息 fillUnderwrite](#%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%A1%AB%E5%85%85%E9%AA%8C%E8%BD%A6%E4%BF%A1%E6%81%AF-fillunderwrite)
    - [request](#request)
      - [example](#example)
    - [response](#response)
  - [提交审核结果 submitUnderwriteResult](#%E6%8F%90%E4%BA%A4%E5%AE%A1%E6%A0%B8%E7%BB%93%E6%9E%9C-submitunderwriteresult)
    - [request](#request-1)
      - [example](#example-1)
    - [response](#response-1)
  - [根据订单编号得到核保信息 getUnderwriteByOrderNumber](#%E6%A0%B9%E6%8D%AE%E8%AE%A2%E5%8D%95%E7%BC%96%E5%8F%B7%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyordernumber)
    - [request](#request-2)
      - [example](#example-2)
    - [response](#response-2)
  - [根据订单号得到核保信息 getUnderwriteByOrderId](#%E6%A0%B9%E6%8D%AE%E8%AE%A2%E5%8D%95%E5%8F%B7%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyorderid)
    - [request](#request-3)
      - [example](#example-3)
    - [response](#response-3)
  - [根据核保ID得到核保信息 getUnderwriteByUWId](#%E6%A0%B9%E6%8D%AE%E6%A0%B8%E4%BF%9Did%E5%BE%97%E5%88%B0%E6%A0%B8%E4%BF%9D%E4%BF%A1%E6%81%AF-getunderwritebyuwid)
    - [request](#request-4)
      - [example](#example-4)
    - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
