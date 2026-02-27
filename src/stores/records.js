import { reactive, readonly } from 'vue'
import { PROBLEMS_DEDUP, getProblemsByCategory } from '../data/hot100.js'

const STORAGE_KEY = 'leetcode-hot100-records'
const ATTEMPTS = [1, 2, 3, 4, 5]

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return {}
    const out = {}
    for (const [idStr, val] of Object.entries(parsed)) {
      const id = Number(idStr)
      if (Number.isNaN(id)) continue
      if (val && typeof val === 'object') {
        if ('attempt1' in val || 'attempt2' in val || 'attempt3' in val || 'attempt4' in val || 'attempt5' in val) {
          out[id] = {
            attempt1: val.attempt1 ?? null,
            attempt2: val.attempt2 ?? null,
            attempt3: val.attempt3 ?? null,
            attempt4: val.attempt4 ?? null,
            attempt5: val.attempt5 ?? null,
            answer: typeof val.answer === 'string' ? val.answer : '',
          }
        } else {
          out[id] = {
            attempt1: val.firstCorrect ?? null,
            attempt2: val.secondCorrect ?? null,
            attempt3: null,
            attempt4: null,
            attempt5: null,
            answer: '',
          }
        }
      }
    }
    return out
  } catch {
    return {}
  }
}

function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (_) {}
}

const state = reactive({
  /** @type {Record<number, { attempt1..5: boolean | null }>} */
  records: loadFromStorage(),
})

export const recordsStore = readonly(state)

export function getRecord(problemId) {
  const r = state.records[problemId]
  const def = { attempt1: null, attempt2: null, attempt3: null, attempt4: null, attempt5: null, answer: '' }
  if (!r) return def
  return {
    attempt1: r.attempt1 ?? null,
    attempt2: r.attempt2 ?? null,
    attempt3: r.attempt3 ?? null,
    attempt4: r.attempt4 ?? null,
    attempt5: r.attempt5 ?? null,
    answer: typeof r.answer === 'string' ? r.answer : '',
  }
}

export function getAnswer(problemId) {
  return getRecord(problemId).answer
}

export function setAnswer(problemId, text) {
  if (!state.records[problemId]) {
    state.records[problemId] = { attempt1: null, attempt2: null, attempt3: null, attempt4: null, attempt5: null, answer: '' }
  }
  state.records[problemId].answer = typeof text === 'string' ? text : ''
  saveToStorage(state.records)
}

export function setRecord(problemId, which, value) {
  const key = typeof which === 'number' ? `attempt${which}` : which
  if (!state.records[problemId]) {
    state.records[problemId] = { attempt1: null, attempt2: null, attempt3: null, attempt4: null, attempt5: null, answer: '' }
  }
  if (key in state.records[problemId]) state.records[problemId][key] = value
  saveToStorage(state.records)
}

/** 某分类下第 1～5 次做对的题数 */
export function getCategoryStats(categoryKey) {
  const byCategory = getProblemsByCategory()
  const problems = byCategory[categoryKey] || []
  const correct = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  problems.forEach((p) => {
    const r = getRecord(p.id)
    ATTEMPTS.forEach((i) => {
      if (r[`attempt${i}`] === true) correct[i]++
    })
  })
  return { total: problems.length, ...correct }
}

/** 全局统计 */
export function getGlobalStats() {
  // 统计每次“做过”（无论对错）的题数
  const done = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  PROBLEMS_DEDUP.forEach((p) => {
    const r = getRecord(p.id)
    ATTEMPTS.forEach((i) => {
      const v = r[`attempt${i}`]
      if (v !== null && v !== undefined) done[i]++
    })
  })
  return { total: PROBLEMS_DEDUP.length, ...done }
}
