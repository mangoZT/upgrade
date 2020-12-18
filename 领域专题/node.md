### NODE 的组成

# Node Standard Library：Node.js 标准库，对外提供的 JavaScript 接口，例如模块 http、buffer、fs、stream 等

# Node bindings：这里就是 JavaScript 与 C++ 连接的桥梁，对下层模块进行封装，向上层提供基础的 API 接口。

# V8：Google 开源的高性能 JavaScript 引擎，使用 C++ 开发，并且应用于谷歌浏览器。如果您感兴趣想学习更多的 V8 引擎知识，请访问 What is V8?

# Libuv：是一个跨平台的支持事件驱动的 I/O 库。它是使用 C 和 C++ 语言为 Node.js 所开发的，同时也是 I/O 操作的核心部分，例如读取文件和 OS 交互。来自一份 Libuv 的中文教程

# C-ares：C-ares 是一个异步 DNS 解析库

# Low-Level Components：提供了 http 解析、OpenSSL、数据压缩（zlib）等功能。

### 特点

# 单线程

# 非阻塞 I/O

# 事件驱动

# 跨平台

### 场景

# I/O 密集型场景

# ResutFul API

# RPC 服务

# 基础工具

# 论坛社区 https://cnodejs.org/

# BFF 服务前端的后端

# Serverless 无服务 FAAS BAAS

# Microservices 微服务
