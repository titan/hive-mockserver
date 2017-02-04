<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [API](#api)
  - [createQuotation](#createquotation)
      - [request](#request)
      - [response](#response)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-02-04
  * 增加 createQuotation

# API

## createQuotation

创建报价，流程如下：

1. 检查验证码是否有效

2. 添加车辆信息

3. 添加车主信息

4. 创建报价

| domain | accessable |
| ----   | ----       |
| admin  |            |
| mobile | ✓          |

#### request

| name                     | type    | note                   |
| ----                     | ----    | ----                   |
| verify\_code             | string  | 手机验证码             |
| vehicle\_code            | string  | 车型编码               |
| vin                      | string  | 车辆vin码              |
| license\_no              | string  | 车牌                   |
| engine\_no               | string  | 发动机号               |
| register\_date           | date    | 车辆注册日期           |
| average\_mileage         | string  | 年平均行驶里程         |
| is\_transfer             | boolean | 是否过户车             |
| last\_insurance\_company | string  | 最近一次投保的保险公司 |
| insurance\_due\_date     | date    | 保险到期日期           |
| fuel\_type               | string  | 燃油类型               |
| accident_status          | string  | 最近出险状况           |
| owner                    | string  | 车主姓名               |
| identity\_no             | string  | 车主身份证件编号       |
| phone                    | string  | 车主电话               |
| recommend                | string  | 推荐人                 |

#### response

成功：

| name | type | note   |
| ---- | ---- | ----   |
| code | int  | 200    |
| data | uuid | qid |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

