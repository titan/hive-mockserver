<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [RedPacket](#redpacket)
  - [RedPacketNotification](#redpacketnotification)
- [Event](#event)
  - [RedPacketEvent](#redpacketevent)
    - [Event Data Structure](#event-data-structure)
    - [Event Type](#event-type)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix)
  - [RollEvent](#rollevent)
    - [Event Data Structure](#event-data-structure-1)
    - [Event Type](#event-type-1)
    - [Event Type And Data Structure Matrix](#event-type-and-data-structure-matrix-1)
- [Database](#database)
  - [redpacket_events](#redpacket_events)
  - [roll_events](#roll_events)
- [Cache](#cache)
- [API](#api)
  - [addRoll](#addroll)
      - [request](#request)
      - [response](#response)
  - [createRedPacket](#createredpacket)
      - [request](#request-1)
      - [response](#response-1)
  - [roll](#roll)
      - [request](#request-2)
      - [response](#response-2)
  - [checkout](#checkout)
      - [request](#request-3)
      - [response](#response-3)
  - [getRedPackets](#getredpackets)
      - [request](#request-4)
      - [response](#response-4)
  - [getUncheckoutRedPacketAndRolls](#getuncheckoutredpacketandrolls)
      - [request](#request-5)
      - [response](#response-5)
  - [getRedPacketNotifications](#getredpacketnotifications)
      - [request](#request-6)
      - [response](#response-6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-06-03
  * 增加 RedPacketNotification 数据结构
  * 增加 redpacket-notifications 缓存
  * 重命名 getUncheckoutRedPacket 接口为 getUncheckoutRedPacketAndRolls
  * 增加 getRedPacketNotifications 接口

1. 2017-06-02
  * 增加 RedPacket 数据结构
  * 增加 RedPacketEvent 数据结构
  * 增加 RollEvent 数据结构
  * 增加 redpacket\_events 表
  * 增加 roll\_events 表
  * 增加 redpacket-entities 缓存
  * 增加 redpacket:{uid} 缓存
  * 增加 redpackets 缓存
  * 增加 rolls 缓存
  * 增加 addRoll 接口
  * 增加 createRedPacket 接口
  * 增加 roll 接口
  * 增加 checkout 接口
  * 增加 getRedPackets 接口
  * 增加 getUncheckoutRedPacket 接口

# Data Structure

## RedPacket

| name    | type    | note       |
|---------|---------|------------|
| balance | float   | 红包金额   |
| rolled  | integer | 已翻倍次数 |
| state   | integer | 红包状态   |


## RedPacketNotification

| name         | type   | note     |
|--------------|--------|----------|
| title        | string | 通知内容 |
| occurred\_at | Date   | 通知时间 |


[![红包状态转换图](../img/redpacket-states.png)](红包状态转换图)

# Event

## RedPacketEvent

### Event Data Structure

| name        | type     | note          |
|-------------|----------|---------------|
| id          | uuid     | event id      |
| type        | smallint | event type    |
| uid         | uuid     | user id       |
| rid         | uuid     | red packet id |
| occurred-at | iso8601  | 事件发生时间  |
| amount      | float    | 金额          |
| factor      | integer  | 翻倍因子      |

### Event Type

| code | name             | note     |
|------|------------------|----------|
|    0 | REPLAY           | 重播事件 |
|    1 | CREATE           | 创建红包 |
|    2 | ROLL             | 红包翻倍 |
|    3 | CHECKOUT         | 红包提现 |

### Event Type And Data Structure Matrix

| type | amount | factor |
|------|--------|--------|
|    0 |        |        |
|    1 | ✓      |        |
|    2 |        | ✓      |
|    3 | ✓      |        |

## RollEvent

### Event Data Structure

| name        | type     | note          |
|-------------|----------|---------------|
| id          | uuid     | event id      |
| type        | smallint | event type    |
| uid         | uuid     | user id       |
| occurred-at | iso8601  | 事件发生时间  |
| count       | integer  | 次数          |

### Event Type

| code | name     | note     |
|------|----------|----------|
|    0 | REPLAY   | 重播事件 |
|    1 | INCREASE | 增加次数 |
|    2 | DECREASE | 减少次数 |

### Event Type And Data Structure Matrix

| type | count |
|------|-------|
|    0 |       |
|    1 | ✓     |
|    2 | ✓     |

# Database

## redpacket_events

| field       | type      | null | default | index   | reference |
|-------------|-----------|------|---------|---------|-----------|
| id          | uuid      |      |         | primary |           |
| uid         | uuid      |      |         |         | users     |
| type        | smallint  |      |         |         |           |
| data        | json      |      |         |         |           |
| occurred_at | timestamp |      | now     |         |           |

## roll_events

| field       | type      | null | default | index   | reference |
|-------------|-----------|------|---------|---------|-----------|
| id          | uuid      |      |         | primary |           |
| uid         | uuid      |      |         |         | users     |
| type        | smallint  |      |         |         |           |
| data        | json      |      |         |         |           |
| occurred_at | timestamp |      | now     |         |           |

# Cache

| key                     | type       | value                              | note                 |
|-------------------------|------------|------------------------------------|----------------------|
| redpacket-entities      | hash       | id => RedPacket                    | 所有红包实体         |
| redpacket:{uid}         | sorted set | (timestamp, rid)                   | 用户的红包列表       |
| redpackets              | hash       | uid => rid                         | 用户对应的未提现红包 |
| rolls                   | hash       | uid => integer                     | 用户对应的可翻倍次数 |
| redpacket-notifications | sorted set | (timestamp, RedPacketNotification) | 红包通知             |

# API

## addRoll

增加红包可翻倍次数。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| uid? | uuid |      |

在管理域时可以根据 uid 参数增加可翻倍次数; 在mobile域只能增加自己可翻倍次数。

#### response

成功：

| name | type | note           |
|------|------|----------------|
| code | int  | 200            |
| data | int  | 剩余可翻倍次数 |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning           |
|------|--------------------|
|  500 | 未知错误           |

## createRedPacket

创建红包，创建一个红包要消耗一个红包可翻倍次数。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| uid? | uuid |      |

在管理域时可以根据 uid 参数创建红包; 在mobile域只能创建自己的红包。

#### response

成功：

| name | type      | note |
|------|-----------|------|
| code | int       |  200 |
| data | RedPacket |      |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning           |
|------|--------------------|
|  404 | 无足够的可翻倍次数 |
|  500 | 未知错误           |

See [example](../data/redpacket/createRedPacket.json)

## roll

红包翻倍，消耗一个红包可翻倍次数。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| rid  | uuid |      |

#### response

成功：

| name | type      | note |
|------|-----------|------|
| code | int       |  200 |
| data | RedPacket |      |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning         |
|------|------------------|
|  404 | 红包不存在       |
|  416 | 翻倍次数超过限制 |
|  500 | 未知错误         |

See [example](../data/redpacket/roll.json)

## checkout

红包提现。提现后，根据剩余的红包可翻倍次数来决定是否创建新的红包。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| rid  | uuid |      |

#### response

成功：

| name | type      | note |
|------|-----------|------|
| code | int       |  200 |
| data | RedPacket |      |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning   |
|------|------------|
|  404 | 红包不存在 |
|  500 | 未知错误   |

See [example](../data/redpacket/checkout.json)

## getRedPackets

获得用户名下的所有红包，包括未提现的和已提现的。

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| uid? | uuid |      |

在管理域时可以根据 uid 参数获得红包信息; 在mobile域只能获得自己的红包信息。

#### response

成功：

| name | type        | note |
|------|-------------|------|
| code | int         |  200 |
| data | [RedPacket] |      |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning   |
|------|------------|
|  500 | 未知错误   |

See [example](../data/redpacket/getRedPackets.json)

## getUncheckoutRedPacketAndRolls

获得用户名下的未提现红包和可翻倍次数

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|
| uid? | uuid |      |

在管理域时可以根据 uid 参数获得红包信息; 在mobile域只能获得自己的红包信息。

#### response

成功：

| name | type   | note     |
|------|--------|----------|
| code | int    | 200      |
| data | Object | 详情如下 |

| name      | type      | note       |
|-----------|-----------|------------|
| redpacket | RedPacket | 红包       |
| rolls     | int       | 可翻倍次数 |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning   |
|------|------------|
|  404 | 红包不存在 |
|  500 | 未知错误   |

See [example](../data/redpacket/getUncheckoutRedPacketAndRolls.json)

## getRedPacketNotifications

获得所有用户的红包广播通告

| domain | accessable |
| ----   | ----       |
| admin  | ✓          |
| mobile | ✓          |

#### request

| name | type | note |
|------|------|------|

#### response

成功：

| name | type                    | note     |
|------|-------------------------|----------|
| code | int                     | 200      |
| data | [RedPacketNotification] | 详情如下 |

失败：

| name | type   | note |
|------|--------|------|
| code | int    |      |
| msg  | string |      |

| code | meanning   |
|------|------------|
|  404 | 红包不存在 |
|  500 | 未知错误   |

See [example](../data/redpacket/getRedPacketNotifications.json)
