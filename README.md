# Blog

一个使用 React + TypeScript + Vite 构建的个人博客网站。

## 技术栈

- ⚡ Vite - 下一代前端构建工具
- ⚛️ React 18 - 用户界面库
- 🔷 TypeScript - 类型安全
- 📝 Markdown - 使用 .md 文件编写文章，自动解析
- 🎨 CSS - 原生样式，支持明暗主题
- 🚀 多平台部署 - 支持 GitHub Pages 和 Gitee Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 📝 添加新文章

在 `src/posts/` 目录下创建 `.md` 文件，文件名即为文章 ID（URL 路径）。

### 文章格式

```markdown
---
title: 文章标题
date: 2026-04-02
excerpt: 文章摘要，会显示在首页列表中...
tags:
  - 标签1
  - 标签2
readingTime: 5
---

## 这里开始写正文

使用标准的 Markdown 语法编写内容...
```

## 🚀 部署

### 双平台部署配置

项目支持同时部署到 **GitHub Pages** 和 **Gitee Pages**。

#### 1. 配置环境变量

修改以下文件中的配置：

**`.env.github`**（GitHub Pages）
```env
VITE_BASE_PATH=/你的仓库名/
VITE_SITE_URL=https://你的用户名.github.io/你的仓库名
```

**`.env.gitee`**（Gitee Pages）
```env
VITE_BASE_PATH=/你的仓库名/
VITE_SITE_URL=https://你的用户名.gitee.io/你的仓库名
```

> 注意：Gitee 如果部署在根路径，`VITE_BASE_PATH` 设为 `/`

### GitHub Pages 部署

#### 方式一：自动部署（推荐）

1. 推送代码到 `master` 分支
2. GitHub Actions 自动构建部署
3. 在仓库设置中启用 Pages，选择 "GitHub Actions" 作为 Source

#### 方式二：手动部署

```bash
npm run deploy:github
```

### Gitee Pages 部署

#### 方式一：手动上传

```bash
# 构建 Gitee 版本
npm run build:gitee

# 将 dist 目录内容上传到 Gitee 仓库
```

#### 方式二：使用 Gitee Pages

1. 将代码推送到 Gitee 仓库
2. 进入仓库 → 服务 → Gitee Pages
3. 选择分支和目录，点击启动
4. **每次更新后需手动点击"更新"按钮**

### 构建命令一览

| 命令 | 说明 |
|------|------|
| `npm run build` | 默认构建 |
| `npm run build:github` | GitHub 版本构建 |
| `npm run build:gitee` | Gitee 版本构建 |
| `npm run deploy:github` | 构建并部署到 GitHub |
| `npm run deploy:gitee` | 构建 Gitee 版本（需手动上传） |

## 项目结构

```
blog/
├── src/
│   ├── components/     # 可复用组件
│   ├── hooks/          # 自定义 Hooks
│   ├── pages/          # 页面组件
│   ├── posts/          # 📝 Markdown 文章目录
│   ├── utils/          # 工具函数
│   └── App.tsx         # 应用入口
├── .env.github         # GitHub Pages 环境配置
├── .env.gitee          # Gitee Pages 环境配置
└── ...
```

## 平台对比

| 特性 | GitHub Pages | Gitee Pages |
|------|-------------|-------------|
| 自动部署 | ✅ Actions 自动 | ❌ 需手动更新 |
| 国内访问 | 较慢 | 快 |
| 自定义域名 | ✅ 支持 | ✅ 支持（需实名） |
| HTTPS | ✅ 自动 | ✅ 自动 |

## License

MIT
