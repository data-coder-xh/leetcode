<template>
  <div class="category-view">
    <router-link to="/" class="back">← 返回题单</router-link>
    <h1 class="page-title">{{ categoryLabel }}</h1>
    <p class="summary">
      第1次 {{ stats[1] }} / 第2次 {{ stats[2] }} / 第3次 {{ stats[3] }} / 第4次 {{ stats[4] }} / 第5次 {{ stats[5] }}（做对 / {{ stats.total }}）
    </p>
    <div class="problem-block">
      <ProblemRow
        v-for="p in problems"
        :key="p.id"
        :problem="p"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryByKey, getProblemsByCategory } from '../data/hot100.js'
import { getCategoryStats } from '../stores/records.js'
import ProblemRow from '../components/ProblemRow.vue'

const route = useRoute()
const categoryKey = computed(() => route.params.name || '')

watchEffect(() => {
  const label = getCategoryByKey(categoryKey.value)?.label ?? categoryKey.value
  document.title = label ? `${label} - 力扣刷题记录` : '力扣 Hot 100 刷题记录'
})

const category = computed(() => getCategoryByKey(categoryKey.value))
const categoryLabel = computed(() => category.value?.label ?? categoryKey.value ?? '分类')

const byCategory = computed(() => getProblemsByCategory())
const problems = computed(() => {
  const list = byCategory.value[categoryKey.value] || []
  return [...list].sort((a, b) => a.id - b.id)
})

const stats = computed(() => getCategoryStats(categoryKey.value))
</script>

<style scoped>
.category-view {
  padding: 0;
}
.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9375rem;
}
.back:hover {
  color: var(--primary);
}
.page-title {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}
.summary {
  margin: 0 0 1.25rem;
  color: var(--text-muted);
  font-size: 0.9375rem;
}
.problem-block {
  border: 1px solid var(--row-border);
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
}
</style>
