<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [ChangeLog](#changelog)
- [Data Structure](#data-structure)
  - [project](#project)
- [Database](#database)
  - [projects](#projects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# ChangeLog

1. 2017-05-20
  * 增加 project 数据结构
  * 增加 projects 表

# Data Structure

## project

| name         | type    | note         |
|--------------|---------|--------------|
| id           | integer | 唯一标识     |
| title        | string  | 标题         |
| verify-owner | boolean | 是否验证车主 |

# Database

## projects

| field        | type         | null | default | index   | reference |
|--------------|--------------|------|---------|---------|-----------|
| id           | smallint     |      |         | primary |           |
| title        | varchar(128) |      |         |         |           |
| verify_owner | boolean      |      | false   |         |           |
| created_at   | timestamp    |      | now     |         |           |
| updated_at   | timestamp    |      | now     |         |           |
