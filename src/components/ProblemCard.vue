<template>
  <div class="card">
    <a
      :href="leetcodeUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="title-link"
    >
      <span class="id">{{ problem.id }}.</span>
      <span class="title">{{ problem.title }}</span>
    </a>
    <div class="actions">
      <div class="action-group">
        <span class="label">第一次</span>
        <button
          type="button"
          class="btn"
          :class="firstClass"
          :title="firstTitle"
          @click="cycle('first')"
        >
          {{ firstLabel }}
        </button>
      </div>
      <div class="action-group">
        <span class="label">第二次</span>
        <button
          type="button"
          class="btn"
          :class="secondClass"
          :title="secondTitle"
          @click="cycle('second')"
        >
          {{ secondLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getRecord, setRecord } from '../stores/records.js'

const props = defineProps({
  problem: { type: Object, required: true },
})

const LEETCODE_CN = 'https://leetcode.cn/problems'

const leetcodeUrl = computed(() =>
  props.problem.slug
    ? `${LEETCODE_CN}/${props.problem.slug}/`
    : `${LEETCODE_CN}/`
)

const record = computed(() => getRecord(props.problem.id))

function cycle(which) {
  const r = record.value
  const cur = which === 'first' ? r.firstCorrect : r.secondCorrect
  const next = cur === null ? true : cur === true ? false : null
  setRecord(props.problem.id, which, next)
}

const firstLabel = computed(() => {
  const v = record.value.firstCorrect
  if (v === true) return '✓'
  if (v === false) return '✗'
  return '−'
})
const secondLabel = computed(() => {
  const v = record.value.secondCorrect
  if (v === true) return '✓'
  if (v === false) return '✗'
  return '−'
})

const firstClass = computed(() => stateClass(record.value.firstCorrect))
const secondClass = computed(() => stateClass(record.value.secondCorrect))

const firstTitle = computed(() => stateTitle(record.value.firstCorrect, '第一次'))
const secondTitle = computed(() => stateTitle(record.value.secondCorrect, '第二次'))

function stateClass(v) {
  if (v === true) return 'correct'
  if (v === false) return 'wrong'
  return 'undone'
}
function stateTitle(v, label) {
  if (v === true) return `${label}：做对`
  if (v === false) return `${label}：做错`
  return `${label}：未做（点击切换）`
}
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.title-link {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
}
.title-link:hover {
  color: var(--primary);
}
.id {
  flex-shrink: 0;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
}
.action-group {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.label {
  font-size: 0.75rem;
  color: var(--text-muted);
}
.btn {
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, border-color 0.15s;
}
.btn.correct {
  background: var(--correct);
  border-color: var(--correct);
  color: #fff;
}
.btn.wrong {
  background: var(--wrong);
  border-color: var(--wrong);
  color: #fff;
}
.btn.undone {
  color: var(--undone);
}
.btn:hover {
  opacity: 0.9;
}
</style>
