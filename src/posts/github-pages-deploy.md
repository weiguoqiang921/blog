---
title: 使用 GitHub Pages 部署静态网站
date: 2026-04-01
excerpt: GitHub Pages 是一个免费的静态网站托管服务，非常适合部署个人博客、项目文档等...
tags:
  - GitHub
  - 部署
  - 教程
readingTime: 4
---

## 什么是 GitHub Pages

GitHub Pages 是 GitHub 提供的免费静态网站托管服务，可以直接从 GitHub 仓库部署网站。

## 部署步骤

1. 创建一个 GitHub 仓库
2. 在项目根目录添加 `gh-pages` 配置
3. 修改 `vite.config.ts` 设置正确的 base 路径
4. 运行部署命令

## 自动化部署

使用 GitHub Actions 可以实现自动化部署，每次推送代码时自动构建和部署。

## 注意事项

- 确保设置正确的 base 路径
- 使用 HTTPS
- 配置自定义域名（可选）
