<template>
  <div class="app">
    <header class="header">
      <router-link to="/" class="logo">力扣 Hot 100 刷题记录</router-link>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
:root {
  --bg: #f5f6f8;
  --card-bg: #fff;
  --text: #262626;
  --text-muted: #8c8c8c;
  --primary: #ffa116;
  --border: #e8e8e8;
  --row-border: #eee;
  --category-bg: #fafafa;
  --correct: #22c55e;
  --wrong: #ef4444;
  --undone: #bfbfbf;
  --diff-easy: #52c41a;
  --diff-medium: #fa8c16;
  --diff-hard: #f5222d;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
}

.logo {
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  font-size: 1.125rem;
}

.logo:hover {
  color: var(--primary);
}

.main {
  flex: 1;
  padding: 1.25rem 1.5rem;
  max-width: 720px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
