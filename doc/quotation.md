# Quotation 模块

## 数据结构

### quotation

| name    | type              | note         |
| ----    | ----              | ----         |
| id      | uuid              | 主键         |
| state   | int               | 报价状态     |
| groups  | [quotation-group] | 对应计划集合 |
| vehicle | vehicle           | 对应的车辆   |

报价的 ID 与 vehicle 的 ID 是一致的。

[![报价状态转换图](../img/quotation-states.png)](报价状态转换图)

### quotation-group

| name         | type             | note         |
| ----         | ----             | ----         |
| id           | uuid             | 主键         |
| plan         | plan             | 对应的计划   |
| is-must-have | boolean          | 是否必选     |
| items        | [quotation-item] | 包含的 items |

### quotation-item

| name         | type                   | note             |
| ----         | ----                   | ----             |
| id           | uuid                   | 主键             |
| item         | plan-item              | 对应的 plan-item |
| is-must-have | boolean                | 是否必选         |
| quotas       | [quotation-item-quota] | 限额列表         |
| prices       | [quotation-item-price] | 价格列表         |

注意，[quotation-item-quota] 中，大多数情况都是只有一个元素，甚至为空。只有第三者险有多个元素。
prices 的长度与 quotas 相同，其内部的元素与 quotas 一一对应。

### quotation-item-price

| name       | type  | note     |
| ----       | ----  | ----     |
| id         | uuid  | 主键     |
| price      | float | 原价     |
| real-price | float | 真实价格 |

### quotation-item-quota

| name | type   | note |
| ---- | ----   | ---- |
| id   | uuid   | 主键 |
| num  | float  | 数量 |
| unit | string | 单位 |

## 表结构

### quotations

| field       | type      | null | default | index   | reference |
| ----        | ----      | ---- | ----    | ----    | ----      |
| id          | uuid      |      |         | primary |           |
| vid         | uuid      |      |         |         | vehicles  |
| state       | int       |      | 0       |         |           |
| created\_at | timestamp |      | now     |         |           |
| updated\_at | timestamp |      | now     |         |           |

### quotation\_groups

| field          | type      | null | default | index   | reference  |
| ----           | ----      | ---- | ----    | ----    | ----       |
| id             | uuid      |      |         | primary |            |
| qid            | uuid      |      |         |         | quotations |
| pid            | uuid      |      |         |         | plans      |
| is\_must\_have | bool      |      | false   |         |            |
| created\_at    | timestamp |      | now     |         |            |
| updated\_at    | timestamp |      | now     |         |            |

### quotation\_items

| field          | type      | null | default | index   | reference         |
| ----           | ----      | ---- | ----    | ----    | ----              |
| id             | uuid      |      |         | primary |                   |
| qgid           | uuid      |      |         |         | quotation\_groups |
| piid           | uuid      |      |         |         | plan\_items       |
| is\_must\_have | bool      |      | false   |         |                   |
| created\_at    | timestamp |      | now     |         |                   |
| updated\_at    | timestamp |      | now     |         |                   |

### quotation\_item\_quotas

| field       | type      | null | default | index   | reference       |
| ----        | ----      | ---- | ----    | ----    | ----            |
| id          | uuid      |      |         | primary |                 |
| qiid        | uuid      |      |         |         | quotation\_items|
| number      | float     |      |         |         |                 |
| unit        | char(16)  |      |         |         |                 |
| sorted      | int       |      | 0       |         |                 |
| created\_at | timestamp |      | now     |         |                 |
| updated\_at | timestamp |      | now     |         |                 |

sorted 是元素在列表中的顺序

### quotation\_item\_prices

| field       | type      | null | default | index   | reference       |
| ----        | ----      | ---- | ----    | ----    | ----            |
| id          | uuid      |      |         | primary |                 |
| qiid        | uuid      |      |         |         | quotation\_items|
| price       | float     |      |         |         |                 |
| real\_price | float     |      |         |         |                 |
| sorted      | int       |      | 0       |         |                 |
| created\_at | timestamp |      | now     |         |                 |
| updated\_at | timestamp |      | now     |         |                 |

sorted 是元素在列表中的顺序

## 缓存结构

### quotation

| key        | type | value               | note         |
| ----       | ---- | ----                | ----         |
| quotations | hash | 报价ID => 报价 JSON | 所有报价实体 |

## 接口

### 创建报价 createQuotation

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| vid            | uuid    | 车辆 ID  |

```javascript
let vid = "00000000-0000-0000-0000-000000000000";

rpc.call("quotation", "createQuotation", vid)
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

See [example](../data/quotation/createQuotation.json)


### 增加报价组 addQuotationGroups

**不能从 mobile 域调用!**

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| qid            | uuid    | 报价 ID  |
| vid            | uuid    | 计划 ID  |
| groups | [group] | 报价组 |
| promotion | number] | 促销价格 |

```javascript
let qid = "00000000-0000-0000-0000-000000000000";
let vid = "00000000-0000-0000-0000-000000000000";
let groups = [];
let promotion = 0;

rpc.call("quotation", "addQuotationGroups", qid, vid, groups, promotion)
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

See [example](../data/quotation/addQuotationGroup.json)

### 获取已报价 getQuotatedQuotations

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| start            | number   | 起始记录  |
| limit          | number    | 记录条数  |

```javascript
let start = 0;
let limit = -1;

rpc.call("quotation", "getQuotatedQuotations", start, limit)
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

See [example](../data/quotation/getQuotatedQuotations.json)

### 获取未报价 getUnquotatedQuotations

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| start            | number   | 起始记录  |
| limit          | number    | 记录条数  |

```javascript
let start = 0;
let limit = -1;

rpc.call("quotation", "getUnquotatedQuotations", start, limit)
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

See [example](../data/quotation/getUnquotatedQuotations.json)

### 获取所有报价 getQuotations

#### request

| name           | type    | note     |
| ----           | ----    | ----     |

```javascript

rpc.call("quotation", "getQuotations")
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

See [example](../data/quotation/getQuotations.json)

### 获取某个报价 getQuotation

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| qid            | uuid    | 报价 ID  |

```javascript

let qid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getQuotation", qid)
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

See [example](../data/quotation/getQuotation.json)

### 获取二维码 getTicket

#### request

| name           | type    | note     |
| ----           | ----    | ----     |
| oid            | uuid    | 订单 ID  |

```javascript

let oid = "00000000-0000-0000-0000-000000000000";
rpc.call("quotation", "getTicket", oid)
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

See [example](../data/quotation/getTicket.json)
