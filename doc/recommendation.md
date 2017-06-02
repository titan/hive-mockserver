<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [recommendations](#recommendations)
- [Cache](#cache)
- [Database](#database)
  - [recommendation](#recommendation)
- [API](#api)
  - [createRecommendation](#createrecommendation)
      - [request](#request)
      - [response](#response)
  - [getRecommendation](#getrecommendation)
      - [request](#request-1)
      - [response](#response-1)
  - [deleteRecommendation](#deleterecommendation)
      - [request](#request-2)
      - [response](#response-2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog
1. 2017-06-02
  * 数据结构以及接口设计v1.0.0

# Data Structure

## recommendations

| name        | type   | note         |
| ----        | ----   | ----         |
| uid         | string | 被推荐人     |
| type        | string | 活动类型     |
| inviter     | string | 邀请人       |
| occurred_at | Date   | 事件发生时间 |

# Cache

| key                    | type | value                     | note                 |
| ----                   | ---- | ----                      | ----                 |
| recommendations:${uid} | zset | {date => recommendations} | 该用户参加的活动记录 |

# Database

## recommendation

| field       | type    | null | default | index   | reference |
| ----        | ----    | ---- | ----    | ----    | ----      |
| id          | uuid    |      |         | primary |           |
| uid         | uuid    |      |         |         | users     |
| type        | int     |      |         |         |           |
| inviter     | string  |      |         |         |           |
| occurred_at | Date    |      | now     |         |           |
| updated_at  | Date    |      | now     |         |           |
| deleted     | boolean |      | false   |         |           |


# API

## createRecommendation

增加推荐关系

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name    | type   | note                         |
| ----    | ----   | ----                         |
| uid     | string | 被推荐用户                   |
| type    | number | 活动类型                     |
| inviter | string | 邀请人（邀请码或者邀请人id） |

#### response

成功：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    | 200  |
| data | string | id   |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |



## getRecommendation

获取推荐关系

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type   | note       |
| ---- | ----   | ----       |
| uid? | string | 被推荐用户 |

#### response

成功：

| name | type  | note                 |
| ---- | ----  | ----                 |
| code | int   | 200                  |
| data | array | 该用户参加的所有活动 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |

## deleteRecommendation

删除推荐关系

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name  | type   | note                 |
| ----  | ----   | ----                 |
| uid   | string | 用户id               |
| type? | string | 删除对应活动推荐关系 |

注：如果参数type为空,则删除该用户的所有推荐关系

#### response

成功：

| name | type  | note                 |
| ---- | ----  | ----                 |
| code | int   | 200                  |
| data | array | 该用户参加的所有活动 |

失败：

| name | type   | note |
| ---- | ----   | ---- |
| code | int    |      |
| msg  | string |      |

| code | meanning |
| ---- | ----     |
| 500  | 未知错误 |
