---
title: Vite：下一代前端构建工具
date: 2026-03-30
excerpt: Vite 是一个现代化的前端构建工具，以其极快的开发服务器启动速度和热更新能力著称...
tags:
  - Vite
  - 构建工具
  - 前端工程化
readingTime: 3
---

## Vite 的优势

Vite 利用浏览器原生 ES 模块支持，实现了极快的开发服务器启动速度。

## 核心特性

- 即时的开发服务器启动
- 闪电般的 HMR（热模块替换）
- 优化的生产构建
- 丰富的插件生态

## 与 Webpack 对比

相比 Webpack，Vite 在开发模式下不需要打包，直接利用浏览器的模块系统，大大提升了开发体验。

## 开始使用

```bash
npm create vite@latest my-project
cd my-project
npm install
npm run dev
```
