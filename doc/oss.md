<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [API](#api)
  - [sign](#sign)
      - [request](#request)
      - [response](#response)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2016-11-17
  * sign 返回结果中的 expire 改为 x\_oss\_date

1. 2016-11-12
  * 删除 sign 返回结果中的 host; date 改为 expire

1. 2016-11-11
  * 初步完成签名服务文档

# API

## sign

为上传至 ALI OSS 系统的资源进行上传请求签名。

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name          | type   | note                               |
| ----          | ----   | ----                               |
| resource      | string | 要上传的资源名称（含 bucket 名称） |
| content\_md5  | string | 资源内容的 md5 签名                |
| content\_type | string | 资源的类型申明                     |

#### response

| name | type   | note     |
| ---- | ----   | ----     |
| code | int    | 200      |
| msg  | string | 错误信息 |
| data | object | 成功结果 |

错误:

| code | meanning     |
| ---- | ----         |
| 404  | 访问用户无效 |
| 500  | 未知错误     |

成功:

| name         | type   | note           |
| ----         | ----   | ----           |
| signature    | string | 签名           |
| access\_key  | string | 访问密钥       |
| x\_oss\_date | string | 签名的时间信息 |

See [example](../data/oss/sign.json)
