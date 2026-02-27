<template>
  <div class="row">
    <a
      :href="leetcodeUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="title-link"
    >
      {{ problem.title }}
    </a>
    <span class="difficulty" :class="difficultyKey">{{ difficultyLabel }}</span>
    <button
      type="button"
      class="answer-btn"
      :class="{ has: hasAnswer }"
      title="查看 / 保存答案"
      @click="openAnswer"
    >
      答案
    </button>
    <div class="status-group">
      <button
        v-for="i in 5"
        :key="i"
        type="button"
        class="status-dot"
        :class="attemptClass(i)"
        :title="attemptTitle(i)"
        @click="cycle(i)"
      >
        <span v-if="attemptValue(i) === true" class="icon">✓</span>
        <span v-else-if="attemptValue(i) === false" class="icon">✗</span>
      </button>
    </div>
    <Teleport to="body">
      <div v-if="showModal" class="answer-modal-backdrop" @click.self="closeModal">
        <div class="answer-modal">
          <div class="answer-modal-header">
            <h3 class="answer-modal-title">{{ problem.title }} — 答案</h3>
            <button type="button" class="answer-modal-close" aria-label="关闭" @click="closeModal">×</button>
          </div>
          <div class="answer-modal-body">
            <textarea
              v-model="editContent"
              class="answer-textarea"
              placeholder="在此粘贴或编写题解、代码、思路…"
              spellcheck="false"
            />
          </div>
          <div class="answer-modal-footer">
            <button type="button" class="btn-cancel" @click="closeModal">取消</button>
            <button type="button" class="btn-save" @click="saveAnswer">保存</button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getRecord, setRecord, getAnswer, setAnswer } from '../stores/records.js'
import { DIFFICULTY_LABELS } from '../data/hot100.js'

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
const hasAnswer = computed(() => (getAnswer(props.problem.id) || '').trim().length > 0)

const showModal = ref(false)
const editContent = ref('')

function openAnswer() {
  editContent.value = getAnswer(props.problem.id) || ''
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
function saveAnswer() {
  setAnswer(props.problem.id, editContent.value)
  closeModal()
}

function attemptValue(i) {
  return record.value[`attempt${i}`]
}

function cycle(which) {
  const r = record.value
  const cur = r[`attempt${which}`]
  const next = cur === null ? true : cur === true ? false : null
  setRecord(props.problem.id, `attempt${which}`, next)
}

function attemptClass(i) {
  const v = attemptValue(i)
  if (v === true) return 'correct'
  if (v === false) return 'wrong'
  return 'undone'
}

function attemptTitle(i) {
  const v = attemptValue(i)
  const label = `第${i}次`
  if (v === true) return `${label}：做对`
  if (v === false) return `${label}：做错`
  return `${label}：未做（点击切换）`
}

const difficultyKey = computed(() => props.problem.difficulty || 'medium')
const difficultyLabel = computed(() => DIFFICULTY_LABELS[difficultyKey.value] || '中等')
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: var(--card-bg);
  border-bottom: 1px solid var(--row-border);
  min-height: 44px;
  box-sizing: border-box;
}
.row:last-child {
  border-bottom: none;
}

.title-link {
  flex: 1;
  min-width: 0;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9375rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-link:hover {
  color: var(--primary);
}

.difficulty {
  flex-shrink: 0;
  font-size: 0.8125rem;
  font-weight: 500;
  margin-right: 0.25rem;
}
.difficulty.easy {
  color: var(--diff-easy);
}
.difficulty.medium {
  color: var(--diff-medium);
}
.difficulty.hard {
  color: var(--diff-hard);
}

.status-group {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
}
.status-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border);
  background: var(--card-bg);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: #fff;
  transition: background 0.15s, border-color 0.15s;
}
.status-dot.undone {
  background: var(--card-bg);
  border-color: var(--undone);
  color: transparent;
}
.status-dot.correct {
  background: var(--correct);
  border-color: var(--correct);
}
.status-dot.wrong {
  background: var(--wrong);
  border-color: var(--wrong);
}
.status-dot .icon {
  line-height: 1;
}

.answer-btn {
  flex-shrink: 0;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
}
.answer-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
}
.answer-btn.has {
  color: var(--correct);
  border-color: var(--correct);
}

.answer-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
}
.answer-modal {
  width: 100%;
  max-width: 720px;
  height: 85vh;
  max-height: 720px;
  background: var(--card-bg);
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}
.answer-modal-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--row-border);
}
.answer-modal-title {
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text);
}
.answer-modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  font-size: 1.5rem;
  color: var(--text-muted);
  cursor: pointer;
  line-height: 1;
  border-radius: 4px;
}
.answer-modal-close:hover {
  background: var(--row-border);
  color: var(--text);
}
.answer-modal-body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.answer-textarea {
  width: 100%;
  flex: 1;
  min-height: 360px;
  padding: 1.25rem 1.25rem;
  border: none;
  resize: vertical;
  font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text);
  background: var(--card-bg);
  box-sizing: border-box;
}
.answer-textarea:focus {
  outline: none;
}
.answer-textarea::placeholder {
  color: var(--text-muted);
}
.answer-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--row-border);
}
.btn-cancel,
.btn-save {
  padding: 0.4rem 1rem;
  font-size: 0.875rem;
  border-radius: 6px;
  cursor: pointer;
}
.btn-cancel {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
}
.btn-cancel:hover {
  border-color: var(--text-muted);
  color: var(--text);
}
.btn-save {
  background: var(--primary);
  border: none;
  color: #fff;
}
.btn-save:hover {
  opacity: 0.9;
}
</style>
