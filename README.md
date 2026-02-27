# 力扣 Hot 100 刷题记录

Vue 3 前端项目，用于记录 LeetCode Hot 100 的刷题进度。题目按题单子分类展示，每道题可记录「第一次」「第二次」是否做对，数据保存在浏览器 localStorage。

## 功能

- **题单总览**：首页按分类展示 Hot 100，显示各分类题目数量与第一次/第二次做对进度。
- **分类题目列表**：点击分类进入该分类下的题目列表，每题可标记第一次、第二次「未做 / 做对 / 做错」。
- **题目链接**：点击题目标题可跳转到力扣中文站对应题目。
- **持久化**：刷题记录保存在本地 localStorage，刷新不丢失。

## 技术栈

- Vue 3 + Vite
- Vue Router
- 原生状态（reactive + localStorage），无 Pinia

## 使用

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（如 `http://localhost:5173`）即可使用。

构建：

```bash
npm run build
```

## 项目结构

- `src/data/hot100.js`：内置 Hot 100 分类与题目列表。
- `src/stores/records.js`：刷题记录状态与 localStorage 读写。
- `src/views/Home.vue`：题单总览。
- `src/views/Category.vue`：分类下的题目列表。
- `src/components/ProblemCard.vue`：单题卡片（题号、标题、第一次/第二次状态）。
