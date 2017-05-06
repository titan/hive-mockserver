<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [API](#api)
  - [SendMessage](#sendmessage)
      - [request](#request)
      - [response](#response)
  - [SendMessageForOrder](#sendmessagefororder)
      - [request](#request-1)
      - [response](#response-1)
  - [VerifyCheckcode](#verifycheckcode)
      - [request](#request-2)
      - [response](#response-2)
  - [VerifyCheckcodeForOrder](#verifycheckcodefororder)
      - [request](#request-3)
      - [response](#response-3)
  - [SendMessageViaTemplate](#sendmessageviatemplate)
        - [request](#request-4)
        - [attention](#attention)
      - [response](#response-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-03-10
  * 增加 VerifyCheckcodeForOrder 方法 
  * 增加 SendMessageForOrder 方法 


# API

## SendMessage

发送手机验证码（包括对图形验证码的校验）

#### request

| name        | type   | note                  |
| ----        | ----   | ----                  |
| openid      | string | 用户的 OPENID         |
| phonenumber | string | 用户的 手机号         |
| reqtxt      | string | 用户填写的 图形验证码 |

Example:

```javascript
rpc.call("checkcode", "SendMessage")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name | type | note                                   |
| ---- | ---- | ----                                   |
| 404  | code | 图形验证码由于某种原因储存到Redis失败  |
| 405  | code | 图形验证码填写错误                     |
| 406  | code | 用户提交的手机号为空（null或者“”）     |
| 200  | code | 图形验证码填写验证成功，发送短信验证码 |



## SendMessageForOrder

发送手机验证码（包括对图形验证码的校验）

#### request

| name        | type   | note                  |
| ----        | ----   | ----                  |
| openid      | string | 用户的 OPENID         |
| phonenumber | string | 用户的 手机号         |
| reqtxt      | string | 用户填写的 图形验证码 |

Example:

```javascript
rpc.call("checkcode", "SendMessage")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name | type | note                                   |
| ---- | ---- | ----                                   |
| 404  | code | 图形验证码由于某种原因储存到Redis失败  |
| 405  | code | 图形验证码填写错误                     |
| 406  | code | 用户提交的手机号为空（null或者“”）     |
| 200  | code | 图形验证码填写验证成功，发送短信验证码 |

## VerifyCheckcode

检验手机验证码

#### request

| name         | type   | note                  |
| ----         | ----   | ----                  |
| phonenumber  | string | 用户的 手机号         |
| reqcheckcode | string | 用户发送的 手机验证码 |

Example:

```javascript
rpc.call("checkcode", "VerifyCheckcode")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name | type | note               |
| ---- | ---- | ----               |
| 405  | code | 手机验证码填写错误 |
| 200  | code | 手机验证码填写正确 |




## VerifyCheckcodeForOrder

检验手机验证码

#### request

| name         | type   | note                  |
| ----         | ----   | ----                  |
| phonenumber  | string | 用户的 手机号         |
| reqcheckcode | string | 用户发送的 手机验证码 |

Example:

```javascript
rpc.call("checkcode", "VerifyCheckcode")
  .then(function (data) {

  }, function (err) {

  });
```

#### response

| name | type | note               |
| ---- | ---- | ----               |
| 405  | code | 手机验证码填写错误 |
| 200  | code | 手机验证码填写正确 |



## SendMessageViaTemplate

发送模板消息

##### request

| name        | type   | note                                   |
| ----        | ----   | ----                                   |
| phonenumber | string | 用户填写的手机号码                     |
| tpl\_id     | string | 模板消息的id编号                       |
| tpl\_value  | object | 模板消息中变量的值(注意按照下面的格式) |

##### attention

注意此处tpl\_value为一个对象，对象的属性为类型（#code#，#time#，#address#等，具体参见“短信通知模板”）。

举例如下：

    {"#code#": "1202"} , {"#time#": "1992-11-20"}, {"#number#": "100.00"}

Example:

```javascript
var phonenumber = "18602236842";
var tpl_id = "1549694";
var tpl_value = {"#time#":"12:00"};
rpc.call("checkcode", "SendMessageViaTemplate", phonenumber, tpl_id, tpl_value)
  .then(function (data) {

  }, function (error) {

  });
```

#### response

| name | type | note                               |
| ---- | ---- | ----                               |
| 200  | code | 向云片网提交请求成功               |
| 406  | code | 用户提交的手机号为空（null或者“”） |
