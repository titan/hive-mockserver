<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [User](#user)
- [Database](#database)
  - [users](#users)
  - [user_tickets](#user_tickets)
- [Cache](#cache)
  - [pnrid-uid](#pnrid-uid)
- [API](#api)
  - [getUser](#getuser)
      - [request](#request)
      - [response](#response)
  - [getInviter](#getinviter)
      - [request](#request-1)
      - [response](#response-1)
  - [getUsers](#getusers)
      - [request](#request-2)
      - [response](#response-2)
  - [setTenderOpened](#settenderopened)
      - [request](#request-3)
      - [response](#response-3)
  - [getInsured](#getinsured)
      - [request](#request-4)
      - [response](#response-4)
  - [setInsured](#setinsured)
      - [request](#request-5)
      - [response](#response-5)
  - [getRecommend](#getrecommend)
      - [request](#request-6)
      - [response](#response-6)
  - [refresh](#refresh)
      - [request](#request-7)
      - [response](#response-7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-04-24
  * 增加 user_tickets 表
  * 增加 getRecommend 接口

1. 2017-04-20
  * 增加inviter 字段

1. 2017-04-19
  * 重命名 getUserByUserIds 为 getUsers

1. 2017-02-22
  * 删除 getAllUsers 方法
  * 重命名 getUserForInvite 方法为 getInviter
  * 增加 getUser 方法的可选参数 uid
  * 删除 getUserByUserId 方法
  * 修改 users 表中的 portrait 字段类型为 varchar(1024)
  * 增加 ticket 字段到 users 表中
  * 删除 getDiscountStatus 方法
  * 增加 getInsured 方法
  * 增加 setInsured 方法
  * 增加 insured 字段到 users 表中

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

| name          | type                        | note                     |
| ----          | ----                        | ----                     |
| id            | uuid                        | 用户 ID                  |
| openid        | string                      | openid                   |
| passsword     | string                      | 密码                     |
| name          | string                      | 姓名                     |
| gender        | string                      | 性别                     |
| identity_no   | string                      | 身份证                   |
| phone         | string                      | 手机号                   |
| nickname      | string                      | 昵称                     |
| portrait      | string                      | 头像                     |
| pnrid         | string                      | 汇付天下 ID              |
| ticket        | string                      | 微信扫码                 |
| tender_opened | string                      | 汇付天下自动投标是否开启 |
| insured       | [person](vehicle.md#person) | 投保人                   |
| inviter       | string                      | 代理人邀请码             |

# Database

## users

| field         | type          | null | default | index   | reference |
| ----          | ----          | ---- | ----    | ----    | ----      |
| id            | uuid          |      |         | primary |           |
| openid        | char(28)      |      |         | unique  |           |
| passsword     | char(32)      | ✓    |         |         |           |
| name          | char(64)      | ✓    |         |         |           |
| gender        | char(4)       | ✓    |         |         |           |
| identity_no   | char(18)      | ✓    |         |         |           |
| phone         | char(16)      | ✓    |         |         |           |
| nickname      | varchar(64)   | ✓    |         |         |           |
| portrait      | varchar(1024) | ✓    |         |         |           |
| created_at    | timestamp     |      | now     |         |           |
| updated_at    | timestamp     |      | now     |         |           |
| pnrid         | char(25)      |      |         | unique  |           |
| ticket        | char(96)      | ✓    |         |         |           |
| tender_opened | boolean       |      | false   |         |           |
| insured       | uuid          | ✓    |         |         | person    |
| inviter       | string        | ✓    |         |         |           |

## user_tickets

| field      | type      | null | default | index   | reference |
| ----       | ----      | ---- | ----    | ----    | ----      |
| id         | serial    |      |         | primary |           |
| uid        | uuid      |      |         |         |           |
| ticket     | char(96)  |      |         | unique  |           |
| used       | boolean   |      | false   |         |           |
| created_at | timestamp |      | now     |         |           |
| updated_at | timestamp |      | now     |         |           |

# Cache

## pnrid-uid

| key       | type | value        | note                              |
| ----      | ---- | ----         | ----                              |
| pnrid-uid | hash | pnrid => uid | 汇付天下 ID 与 User ID 的对应关系 |

# API

## getUser

获得用户信息

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note           |
| ---- | ---- | ----           |
| uid? | uuid | 不填取当前用户 |

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

## getInviter

获取邀请好友信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type   | note          |
| ----  | ----   | ----          |
| token | string | session token |

Example

```javascript

var token = "79e577b731c71aa23d1954c5f701aac3";

rpc.call("profile", "getInviter", token)
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

## getUsers

根据userid数组获得一些用户信息

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note       |
| ---- | ----   | ----       |
| uids | [uuid] | 用户id集合 |

Example

```javascript

var uids = [
];

rpc.call("profile", "getUsers", uids)
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

## getInsured

获取投保人信息

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name | type | note |
| ---- | ---- | ---- |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | meaning           |
| ---- | ----              |
| 200  | person            |
| 404  | Insured not found |
| 500  | 错误信息          |

[Example](../data/profile/getInsured.json)

## setInsured

设置投保人信息，只能绑定一次。

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name    | type | note      |
| ----    | ---- | ----      |
| insured | uuid | 投保人 Id |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | meaning           |
| ---- | ----              |
| 200  | okay              |
| 404  | Insured not found |
| 500  | 错误信息          |

## getRecommend

得到(新)用户的推荐人(老用户)。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note    |
| ---- | ---- | ----    |
| uid? | uuid | 用户 Id |

#### response

| name     | type   | note     |
| ----     | ----   | ----     |
| code     | int    | 结果编码 |
| data/msg | string | 结果内容 |

| code | meaning        |
| ---- | ----           |
| 200  | User           |
| 404  | 推荐人没有找到 |
| 500  | 错误信息       |

## refresh

刷新用户缓存

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile |            |

#### request

| name | type | note   |
| ---- | ---- | ----   |
| uid? | uuid | 用户ID |

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
