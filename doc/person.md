<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [person](#person)
- [Database](#database)
  - [person](#person-1)
- [Cache](#cache)
  - [person-entities](#person-entities)
- [API](#api)
  - [createPerson](#createperson)
      - [request](#request)
      - [response](#response)
  - [getPerson](#getperson)
      - [request](#request-1)
      - [response](#response-1)
  - [updateViews](#updateviews)
      - [request](#request-2)
      - [response](#response-2)
  - [setPersonVerified](#setpersonverified)
      - [request](#request-3)
      - [response](#response-3)
  - [updateInsuredPhone](#updateinsuredphone)
      - [request](#request-4)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-03-29
  * 增加 updateInsuredPhone 方法

1. 2017-03-18
  *　修改 updateViews 接口参数
　
1. 2017-03-15
  * 删除 addDrivers 接口
  * 删除 delDrivers 接口
  * 删除 drivers 表
  * 删除 uploadImages 接口
  * 增加 updateViews 接口

1. 2017-03-14
  * 增加 person 数据结构
  * 增加 person 数据表
  * 增加 drivers 数据库
  * 增加 person-entities 缓存
  * 增加 createPerson 接口
  * 增加 getPerson 接口
  * 增加 addDrivers 接口
  * 增加 delDrivers 接口
  * 增加 uploadImages 接口
  * 增加 setPersonVerified 接口
  * 修改 delDrivers 的入参 vid 为 oid

# Data Structure

## person

| name                  | type    | note                 |
| ----                  | ----    | ----                 |
| id                    | uuid    | personID             |
| name                  | string  | 姓名                 |
| identity-no           | string  | 身份证               |
| phone                 | string  | 手机号               |
| email                 | string  | 电子邮箱             |
| address               | string  | 寄件地址             |
| identity-frontal-view | string  | 身份证正面照         |
| identity-rear-view    | string  | 身份证背面照         |
| license-frontal-view  | string  | 驾照正面照           |
| verified              | boolean | 是否通过权威机构认证 |

# Database

## person

| field                 | type          | null | default | index   | reference |
| ----                  | ----          | ---- | ----    | ----    | ----      |
| id                    | uuid          |      |         | primary |           |
| name                  | char(20)      |      |         |         |           |
| identity_no           | char(18)      |      |         |         |           |
| phone                 | char(16)      | ✓    |         |         |           |
| email                 | varchar(128)  | ✓    |         |         |           |
| address               | varchar(128)  | ✓    |         |         |           |
| identity_frontal_view | varchar(1024) | ✓    |         |         |           |
| identity_rear_view    | varchar(1024) | ✓    |         |         |           |
| license_frontal_view  | varchar(1024) | ✓    |         |         |           |
| verified              | boolean       |      | false   |         |           |
| created_at            | timestamp     |      | now     |         |           |
| updated_at            | timestamp     |      | now     |         |           |
| deleted               | boolean       |      | false   |         |           |

# Cache

## person-entities

| key             | type | value           | note     |
| ----            | ---- | ----            | ----     |
| person-entities | hash | {pid => people} | 人员信息 |

# API

## createPerson

创建人员信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name   | type     | note         |
| ----   | ----     | ----         |
| people | [person] | 人员信息数组 |

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| data | [pid]  | 结果内容 |
| msg  | string | 错误信息 |

| code | meaning  |
| ---- | ----     |
| 200  | Success  |
| 500  | 错误信息 |

## getPerson

获取人员信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note    |
| ---- | ----   | ----    |
| pid  | string | 人员 ID |

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 结果编码 |
| data | person | 结果内容 |
| msg  | string | 错误信息 |

| code | meaning  |
| ---- | ----     |
| 200  | Success  |
| 500  | 错误信息 |

## updateViews

上传证件照

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name                  | type   | note           |
| ----                  | ----   | ----           |
| pid                   | string | person id      |
| identity-frontal-view | string | 身份证件正面照 |
| identity-rear-view    | string | 身份证件背面照 |
| license-frontal-view  | string | 驾照           |

```javascript

var pid = "00000000-0000-0000-0000-000000000000";
var identity_frontal_view = "";
var identity_rear_view = "";
var license_frontal_view = "http://www.xxxxxxxxx";

rpc.call("person", "updateViews", pid, identity_frontal_view, identity_rear_view, license_frontal_view)
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

## setPersonVerified

设置人员认证标志

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name       | type    | note             |
| ----       | ----    | ----             |
| identiy-no | string  | 用户身份证件号码 |
| flag       | boolean | 认证是否开通     |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | meaning          |
| ---- | ----             |
| 200  | Success          |
| 404  | Person not found |
| 500  | 错误信息         |


## updateInsuredPhone

修改投保人手机号

| domain | accessable |
| ----   | ----       |
| mobile | ✓          |

#### request

| name | type   | note   |
| ---- | ----   | ----   |
| pid  | uuid   | person_id |
| phone| string | 新手机号|

```javascript


rpc.call("mobile", "updateInsuredPhone", pid, phone) 
  .then(function (result) {

  }, function (error) {

  });
```

#### response


| name | type    | note |
| ---- | ----    | ---- |
| code | int     | 200  |
| data | uuid    | pid  |