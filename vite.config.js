import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages 部署到 https://data-coder-xh.github.io/leetcode/
// 需要设置 base 为仓库名路径
export default defineConfig({
  base: '/leetcode/',
  plugins: [vue()],
})
