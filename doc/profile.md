<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [User](#user)
- [Database](#database)
  - [users](#users)
- [Cache](#cache)
  - [pnrid-uid](#pnrid-uid)
- [API](#api)
  - [getUser](#getuser)
      - [request](#request)
      - [response](#response)
  - [getDiscountStatus](#getdiscountstatus)
      - [request](#request-1)
      - [response](#response-1)
  - [getUserForInvite](#getuserforinvite)
      - [request](#request-2)
      - [response](#response-2)
  - [getUserByUserId](#getuserbyuserid)
      - [request](#request-3)
      - [response](#response-3)
  - [getUserOpenId](#getuseropenid)
    - [request](#request-4)
      - [response](#response-4)
  - [refresh](#refresh)
      - [request](#request-5)
      - [response](#response-5)
  - [getAllUsers](#getallusers)
      - [request](#request-6)
      - [response](#response-6)
  - [getUserByUserIds](#getuserbyuserids)
      - [request](#request-7)
      - [response](#response-7)
  - [setTenderOpened](#settenderopened)
      - [request](#request-8)
      - [response](#response-8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-01-05
  * user 增加自动投标开通标志
  * 增加 setTenderOpened
  * 删除 getUserOpenId

1. 2016-12-05
  * 增加getUserForInvite接口

1. 2016-11-16
  * User 增加 pnrid 属性
  * users 表增加 pnrid 字段
  * 增加 pnrid-uid 缓存
  * 增加 toc

# Data Structure

## User

| name           | type   | note                     |
| ----           | ----   | ----                     |
| id             | uuid   | 用户 ID                  |
| openid         | string | openid                   |
| passsword      | string | 密码                     |
| name           | string | 姓名                     |
| gender         | string | 性别                     |
| identity\_no   | string | 身份证                   |
| phone          | string | 手机号                   |
| nickname       | string | 昵称                     |
| portrait       | string | 头像                     |
| pnrid          | string | 汇付天下 ID              |
| tender\_opened | string | 汇付天下自动投标是否开启 |

# Database

## users

| field          | type       | null | default | index   | reference |
| ----           | ----       | ---- | ----    | ----    | ----      |
| id             | uuid       |      |         | primary |           |
| openid         | char(28)   |      |         | unique  |           |
| passsword      | char(32)   | ✓    |         |         |           |
| name           | char(64)   | ✓    |         |         |           |
| gender         | char(4)    | ✓    |         |         |           |
| identity\_no   | char(18)   | ✓    |         |         |           |
| phone          | char(16)   | ✓    |         |         |           |
| nickname       | char(64)   | ✓    |         |         |           |
| portrait       | char(1024) | ✓    |         |         |           |
| created\_at    | timestamp  |      | now     |         |           |
| updated\_at    | timestamp  |      | now     |         |           |
| pnrid          | char(25)   |      |         | unique  |           |
| tender\_opened | boolean    |      | false   |         |           |

# Cache

## pnrid-uid

| key       | type | value        | note                              |
| ----      | ---- | ----         | ----                              |
| pnrid-uid | hash | pnrid => uid | 汇付天下 ID 与 User ID 的对应关系 |

# API

## getUser

获得当前用户信息

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name    | type   | note    |
| ----    | ----   | ----    |

Example

```javascript


rpc.call("profile", "getUser")
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/profile/getUser.json)


## getDiscountStatus

获得当前用户优惠情况

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type   | note           |
| ----      | ----   | ----           |
| recommend | string | 推荐码或推荐人 |

#### response

注: code 200时，返回结果data是布尔型，满足情况为true,否则为false

| name | type    | note |
| ---- | ----    | ---- |
| code | int     | 200  |
| data | boolean | true |

## getUserForInvite

获取邀请好友信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note       |
| ---- | ----   | ----       |
| key  | string | invite key |

Example

```javascript

var key = "79e577b731c71aa23d1954c5f701aac3";

rpc.call("profile", "getUserForInvite", key)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/profile/getUser.json)

## getUserByUserId

根据userid获得某个用户信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name     | type | note   |
| ----     | ---- | ----   |
| user\_id | uuid | 用户id |

Example:

```javascript

rpc.call("profile", "getUserByUserId", user_id)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/profile/getUserByUserId.json)

## refresh

刷新用户缓存

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note         |
| ---- | ---- | ----         |
| uid  | uuid | 用户ID(可选) |

Example:

```javascript

rpc.call("profile", "refresh")
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/profile/sucessful.json)

## getAllUsers

获取所有用户信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name    | type   | note    |
| ----    | ----   | ----    |
| start   | int    | 起始记录 |
| limit   | int    | 记录条数 |

Example

```javascript

var start = 1;
var limit = 20;
rpc.call("profile", "getAllUsers", start, limit)
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功    |
| other | 错误信息 | 失败    |

See 成功返回数据：[example](../data/profile/getAllUsers.json)

## getUserByUserIds

根据userid数组获得一些用户信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name      | type   | note   |
| ----      | ----   | ----   |
| user\_ids | [uuid] | 用户id |

Example

```javascript

var user_ids = [

]
rpc.call("profile", "getUserByUserIds")
  .then(function (result) {

  }, function (error) {

  });
```

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | msg       | meaning  |
| ---- | ----      | ----     |
| 200  | users     | 用户信息 |
| 404  | not found | 未找到   |
| 500  | err       | 错误信息 |

See 成功返回数据：[example](../data/profile/getUserByUserIds.json)

## setTenderOpened

设置用户的自动投标开通标志

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type    | note             |
| ---- | ----    | ----             |
| flag | boolean | 自动投标是否开通 |
| uid  | uuid    | 仅 admin 域有效  |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | meaning        |
| ---- | ----           |
| 200  | Success        |
| 404  | User not found |
| 500  | 错误信息       |

