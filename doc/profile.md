# Profile 模块

## 数据结构

### user

| name        | type    | note    |
| ----        | ----    | ----    |
| id          | uuid    | 用户 ID  |
| openid      | string  | openid  |
| passsword   | string  | 密码     |
| name        | string  | 姓名     |
| gender      | string  | 性别     |
| identity\_no| string  | 身份证   |
| phone       | string  | 手机号   |
| nickname    | string  | 昵称     |
| portrait    | string  | 头像     |

## 数据库结构

### users

| field           | type       | null | default | index   | reference |
| ----            | ----       | ---- | ----    | ----    | ----      |
| id              | uuid       |      |         | primary |           |
| openid          | char(28)   |      |         |         |           |
| passsword       | char(32)   |   ✓  |         |         |           |
| name            | char(64)   |   ✓  |         |         |           |
| gender          | char(4)    |   ✓  |         |         |           |
| identity\_no    | char(18)   |   ✓  |         |         |           |
| phone           | char(16)   |   ✓  |         |         |           |
| nickname        | char(64)   |   ✓  |         |         |           |
| portrait        | char(1024) |   ✓  |         |         |           |
| created\_at     | timestamp  |      | now     |         |           |
| updated\_at     | timestamp  |      | now     |         |           |

## 接口

### 获得当前用户信息 getUser

#### request

| name    | type   | note    |
| ----    | ----   | ----    |

##### example

```javascript


rpc.call("profile", "getUser")
  .then(function (result) {

  }, function (error) {
        
  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功     |
| other | 错误信息  | 失败     |

See 成功返回数据：[example](../data/profile/getUser.json)

### 根据userid获得某个用户信息 getUserByUserId

#### request

| name    | type   | note    |
| ----    | ----   | ----    |
| user_id | uuid   | 用户id   |

##### example

```javascript

rpc.call("profile", "getUserByUserId", user_id)
  .then(function (result) {

  }, function (error) {
        
  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg   | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功     |
| other | 错误信息  | 失败     |

See 成功返回数据：[example](../data/profile/getUserByUserId.json)

### 获得用户openid getUserOpenId

#### request

| name | type | note    |
| ---- | ---- | ----    |
| uid  | uuid | 用户 ID |

##### example

```javascript

var uid = "00000000-0000-0000-0000-000000000001"
rpc.call("profile", "getUserOpenId", uid)
  .then(function (result) {

  }, function (error) {
        
  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功     |
| other | 错误信息  | 失败     |

See 成功返回数据：[example](../data/profile/getUserOpenId.json)

### 刷新用户缓存 refresh

#### !!禁止前端调用！！
#### request

| name    | type   | note    |
| ----    | ----   | ----    |

##### example

```javascript

rpc.call("profile", "refresh")
  .then(function (result) {

  }, function (error) {
        
  });
```
#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功     |
| other   | 错误信息  | 失败     |

See 成功返回数据：[example](../data/profile/sucessful.json)

### 获取所有用户信息 getAllUsers

#### request

| name    | type   | note    |
| ----    | ----   | ----    |
| start   | int    | 起始记录 |
| limit   | int    | 记录条数 |

##### example

```javascript

var start = 1;
var limit = 20;
rpc.call("profile", "getAllUsers", start, limit)
  .then(function (result) {

  }, function (error) {
        
  });
```
#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | null     | 成功     |
| other   | 错误信息  | 失败     |

See 成功返回数据：[example](../data/profile/getAllUsers.json)

### 根据userid数组获得一些用户信息 getUserByUserIds

#### request

| name    | type   | note    |
| ----    | ----   | ----    |
| user_ids | [uuid]   | 用户id   |

##### example

```javascript

var user_ids = [
  
]
rpc.call("profile", "getUserByUserIds")
  .then(function (result) {

  }, function (error) {
        
  });
```

#### response

| name   | type   | note     |
| ----   | ----   | ----     |
| code   | int    | 结果编码  |
| data/msg    | string | 结果内容  |

| code  | msg      | meaning |
| ----  | ----     | ----    |
| 200   | users     | 用户信息     |
| 404   | not found  | 未找到     |
| 500   | err  | 错误信息     |

See 成功返回数据：[example](../data/profile/getUserByUserIds.json)
