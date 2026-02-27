<template>
  <div class="home">
    <h1 class="page-title">Hot 100 题单</h1>
    <div class="summary-card">
      <span class="summary-label">总进度</span>
      <div class="summary-stats">
        <div
          v-for="i in 5"
          :key="i"
          class="summary-item"
        >
          <span class="summary-attempt">第{{ i }}次</span>
          <span class="summary-count">{{ stats[i] }}/{{ stats.total }}</span>
          <div class="summary-bar">
            <div
              class="summary-fill"
              :style="{ width: total ? (stats[i] / total * 100) + '%' : '0%' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="category-list">
      <section
        v-for="cat in categoriesWithProblems"
        :key="cat.key"
        class="category-section"
      >
        <h2 class="category-header">{{ cat.label }}</h2>
        <div class="problem-block">
          <ProblemRow
            v-for="p in cat.problems"
            :key="p.id"
            :problem="p"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CATEGORIES, getProblemsByCategory } from '../data/hot100.js'
import { getGlobalStats } from '../stores/records.js'
import ProblemRow from '../components/ProblemRow.vue'

const stats = computed(() => getGlobalStats())
const total = computed(() => stats.value.total)

const categoriesWithProblems = computed(() => {
  const byCat = getProblemsByCategory()
  return CATEGORIES.map((c) => ({
    key: c.key,
    label: c.label,
    problems: (byCat[c.key] || []).sort((a, b) => a.id - b.id),
  })).filter((c) => c.problems.length > 0)
})
</script>

<style scoped>
.home {
  padding: 0;
}
.page-title {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.summary-card {
  margin: 0 0 1.5rem;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border: 1px solid var(--row-border);
  border-radius: 8px;
}
.summary-label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.summary-stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}
.summary-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.summary-attempt {
  font-size: 0.8125rem;
  color: var(--text-muted);
}
.summary-count {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}
.summary-bar {
  height: 4px;
  background: var(--row-border);
  border-radius: 2px;
  overflow: hidden;
}
.summary-fill {
  height: 100%;
  background: var(--correct);
  border-radius: 2px;
  transition: width 0.2s ease;
}
@media (max-width: 520px) {
  .summary-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.category-section {
  margin-bottom: 1.5rem;
}

.category-header {
  margin: 0 0 0;
  padding: 0.65rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text);
  background: var(--category-bg);
  border-radius: 6px 6px 0 0;
  border: 1px solid var(--row-border);
  border-bottom: none;
}

.problem-block {
  border: 1px solid var(--row-border);
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}
.problem-block:only-child {
  border-radius: 6px;
}
.category-section:first-child .category-header {
  border-radius: 6px 6px 0 0;
}
.category-section:first-child .problem-block {
  border-radius: 0 0 6px 6px;
}
</style>
