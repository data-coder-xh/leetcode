/**
 * LeetCode Hot 100 题单数据（与官方题单一致）
 * 分类 key 用于路由，label 用于展示；题目含 difficulty 简单/中等/困难
 */
export const CATEGORIES = [
  { key: 'hash', label: '哈希' },
  { key: 'two-pointers', label: '双指针' },
  { key: 'sliding-window', label: '滑动窗口' },
  { key: 'string', label: '子串' },
  { key: 'array', label: '普通数组' },
  { key: 'matrix', label: '矩阵' },
  { key: 'linked-list', label: '链表' },
  { key: 'binary-tree', label: '二叉树' },
  { key: 'graph', label: '图论' },
  { key: 'backtracking', label: '回溯' },
  { key: 'binary-search', label: '二分查找' },
  { key: 'stack', label: '栈' },
  { key: 'heap', label: '堆' },
  { key: 'greedy', label: '贪心算法' },
  { key: 'dp', label: '动态规划' },
  { key: 'dp-multi', label: '多维动态规划' },
  { key: 'tricks', label: '技巧' },
]

/**
 * Hot 100 题目：id, title, slug, category, difficulty
 */
export const PROBLEMS = [
  // 哈希
  { id: 1, title: '两数之和', slug: 'two-sum', category: 'hash', difficulty: 'easy' },
  { id: 49, title: '字母异位词分组', slug: 'group-anagrams', category: 'hash', difficulty: 'medium' },
  { id: 128, title: '最长连续序列', slug: 'longest-consecutive-sequence', category: 'hash', difficulty: 'medium' },
  // 双指针
  { id: 283, title: '移动零', slug: 'move-zeroes', category: 'two-pointers', difficulty: 'easy' },
  { id: 11, title: '盛最多水的容器', slug: 'container-with-most-water', category: 'two-pointers', difficulty: 'medium' },
  { id: 15, title: '三数之和', slug: '3sum', category: 'two-pointers', difficulty: 'medium' },
  { id: 42, title: '接雨水', slug: 'trapping-rain-water', category: 'two-pointers', difficulty: 'hard' },
  // 滑动窗口
  { id: 3, title: '无重复字符的最长子串', slug: 'longest-substring-without-repeating-characters', category: 'sliding-window', difficulty: 'medium' },
  { id: 438, title: '找到字符串中所有字母异位词', slug: 'find-all-anagrams-in-a-string', category: 'sliding-window', difficulty: 'medium' },
  // 子串
  { id: 560, title: '和为 K 的子数组', slug: 'subarray-sum-equals-k', category: 'string', difficulty: 'medium' },
  { id: 239, title: '滑动窗口最大值', slug: 'sliding-window-maximum', category: 'string', difficulty: 'hard' },
  { id: 76, title: '最小覆盖子串', slug: 'minimum-window-substring', category: 'string', difficulty: 'hard' },
  // 普通数组
  { id: 53, title: '最大子数组和', slug: 'maximum-subarray', category: 'array', difficulty: 'medium' },
  { id: 56, title: '合并区间', slug: 'merge-intervals', category: 'array', difficulty: 'medium' },
  { id: 189, title: '轮转数组', slug: 'rotate-array', category: 'array', difficulty: 'medium' },
  { id: 238, title: '除自身以外数组的乘积', slug: 'product-of-array-except-self', category: 'array', difficulty: 'medium' },
  { id: 41, title: '缺失的第一个正数', slug: 'first-missing-positive', category: 'array', difficulty: 'hard' },
  // 矩阵
  { id: 73, title: '矩阵置零', slug: 'set-matrix-zeroes', category: 'matrix', difficulty: 'medium' },
  { id: 54, title: '螺旋矩阵', slug: 'spiral-matrix', category: 'matrix', difficulty: 'medium' },
  { id: 48, title: '旋转图像', slug: 'rotate-image', category: 'matrix', difficulty: 'medium' },
  { id: 240, title: '搜索二维矩阵 II', slug: 'search-a-2d-matrix-ii', category: 'matrix', difficulty: 'medium' },
  // 链表
  { id: 160, title: '相交链表', slug: 'intersection-of-two-linked-lists', category: 'linked-list', difficulty: 'easy' },
  { id: 206, title: '反转链表', slug: 'reverse-linked-list', category: 'linked-list', difficulty: 'easy' },
  { id: 234, title: '回文链表', slug: 'palindrome-linked-list', category: 'linked-list', difficulty: 'easy' },
  { id: 141, title: '环形链表', slug: 'linked-list-cycle', category: 'linked-list', difficulty: 'easy' },
  { id: 142, title: '环形链表 II', slug: 'linked-list-cycle-ii', category: 'linked-list', difficulty: 'medium' },
  { id: 21, title: '合并两个有序链表', slug: 'merge-two-sorted-lists', category: 'linked-list', difficulty: 'easy' },
  { id: 2, title: '两数相加', slug: 'add-two-numbers', category: 'linked-list', difficulty: 'medium' },
  { id: 19, title: '删除链表的倒数第 N 个结点', slug: 'remove-nth-node-from-end-of-list', category: 'linked-list', difficulty: 'medium' },
  { id: 24, title: '两两交换链表中的节点', slug: 'swap-nodes-in-pairs', category: 'linked-list', difficulty: 'medium' },
  { id: 25, title: 'K 个一组翻转链表', slug: 'reverse-nodes-in-k-group', category: 'linked-list', difficulty: 'hard' },
  { id: 138, title: '随机链表的复制', slug: 'copy-list-with-random-pointer', category: 'linked-list', difficulty: 'medium' },
  { id: 148, title: '排序链表', slug: 'sort-list', category: 'linked-list', difficulty: 'medium' },
  { id: 23, title: '合并 K 个升序链表', slug: 'merge-k-sorted-lists', category: 'linked-list', difficulty: 'hard' },
  { id: 146, title: 'LRU 缓存', slug: 'lru-cache', category: 'linked-list', difficulty: 'medium' },
  // 二叉树
  { id: 94, title: '二叉树的中序遍历', slug: 'binary-tree-inorder-traversal', category: 'binary-tree', difficulty: 'easy' },
  { id: 104, title: '二叉树的最大深度', slug: 'maximum-depth-of-binary-tree', category: 'binary-tree', difficulty: 'easy' },
  { id: 226, title: '翻转二叉树', slug: 'invert-binary-tree', category: 'binary-tree', difficulty: 'easy' },
  { id: 101, title: '对称二叉树', slug: 'symmetric-tree', category: 'binary-tree', difficulty: 'easy' },
  { id: 543, title: '二叉树的直径', slug: 'diameter-of-binary-tree', category: 'binary-tree', difficulty: 'easy' },
  { id: 102, title: '二叉树的层序遍历', slug: 'binary-tree-level-order-traversal', category: 'binary-tree', difficulty: 'medium' },
  { id: 108, title: '将有序数组转换为二叉搜索树', slug: 'convert-sorted-array-to-binary-search-tree', category: 'binary-tree', difficulty: 'easy' },
  { id: 98, title: '验证二叉搜索树', slug: 'validate-binary-search-tree', category: 'binary-tree', difficulty: 'medium' },
  { id: 230, title: '二叉搜索树中第 K 小的元素', slug: 'kth-smallest-element-in-a-bst', category: 'binary-tree', difficulty: 'medium' },
  { id: 199, title: '二叉树的右视图', slug: 'binary-tree-right-side-view', category: 'binary-tree', difficulty: 'medium' },
  { id: 114, title: '二叉树展开为链表', slug: 'flatten-binary-tree-to-linked-list', category: 'binary-tree', difficulty: 'medium' },
  { id: 105, title: '从前序与中序遍历序列构造二叉树', slug: 'construct-binary-tree-from-preorder-and-inorder-traversal', category: 'binary-tree', difficulty: 'medium' },
  { id: 437, title: '路径总和 III', slug: 'path-sum-iii', category: 'binary-tree', difficulty: 'medium' },
  { id: 236, title: '二叉树的最近公共祖先', slug: 'lowest-common-ancestor-of-a-binary-tree', category: 'binary-tree', difficulty: 'medium' },
  { id: 124, title: '二叉树中的最大路径和', slug: 'binary-tree-maximum-path-sum', category: 'binary-tree', difficulty: 'hard' },
  // 图论
  { id: 200, title: '岛屿数量', slug: 'number-of-islands', category: 'graph', difficulty: 'medium' },
  { id: 994, title: '腐烂的橘子', slug: 'rotting-oranges', category: 'graph', difficulty: 'medium' },
  { id: 207, title: '课程表', slug: 'course-schedule', category: 'graph', difficulty: 'medium' },
  { id: 208, title: '实现 Trie (前缀树)', slug: 'implement-trie-prefix-tree', category: 'graph', difficulty: 'medium' },
  // 回溯
  { id: 46, title: '全排列', slug: 'permutations', category: 'backtracking', difficulty: 'medium' },
  { id: 78, title: '子集', slug: 'subsets', category: 'backtracking', difficulty: 'medium' },
  { id: 17, title: '电话号码的字母组合', slug: 'letter-combinations-of-a-phone-number', category: 'backtracking', difficulty: 'medium' },
  { id: 39, title: '组合总和', slug: 'combination-sum', category: 'backtracking', difficulty: 'medium' },
  { id: 22, title: '括号生成', slug: 'generate-parentheses', category: 'backtracking', difficulty: 'medium' },
  { id: 79, title: '单词搜索', slug: 'word-search', category: 'backtracking', difficulty: 'medium' },
  { id: 131, title: '分割回文串', slug: 'palindrome-partitioning', category: 'backtracking', difficulty: 'medium' },
  { id: 51, title: 'N 皇后', slug: 'n-queens', category: 'backtracking', difficulty: 'hard' },
  // 二分查找
  { id: 35, title: '搜索插入位置', slug: 'search-insert-position', category: 'binary-search', difficulty: 'easy' },
  { id: 74, title: '搜索二维矩阵', slug: 'search-a-2d-matrix', category: 'binary-search', difficulty: 'medium' },
  { id: 34, title: '在排序数组中查找元素的第一个和最后一个位置', slug: 'find-first-and-last-position-of-element-in-sorted-array', category: 'binary-search', difficulty: 'medium' },
  { id: 33, title: '搜索旋转排序数组', slug: 'search-in-rotated-sorted-array', category: 'binary-search', difficulty: 'medium' },
  { id: 153, title: '寻找旋转排序数组中的最小值', slug: 'find-minimum-in-rotated-sorted-array', category: 'binary-search', difficulty: 'medium' },
  { id: 4, title: '寻找两个正序数组的中位数', slug: 'median-of-two-sorted-arrays', category: 'binary-search', difficulty: 'hard' },
  // 栈
  { id: 20, title: '有效的括号', slug: 'valid-parentheses', category: 'stack', difficulty: 'easy' },
  { id: 155, title: '最小栈', slug: 'min-stack', category: 'stack', difficulty: 'medium' },
  { id: 394, title: '字符串解码', slug: 'decode-string', category: 'stack', difficulty: 'medium' },
  { id: 739, title: '每日温度', slug: 'daily-temperatures', category: 'stack', difficulty: 'medium' },
  { id: 84, title: '柱状图中最大的矩形', slug: 'largest-rectangle-in-histogram', category: 'stack', difficulty: 'hard' },
  // 堆
  { id: 215, title: '数组中的第K个最大元素', slug: 'kth-largest-element-in-an-array', category: 'heap', difficulty: 'medium' },
  { id: 347, title: '前 K 个高频元素', slug: 'top-k-frequent-elements', category: 'heap', difficulty: 'medium' },
  { id: 295, title: '数据流的中位数', slug: 'find-median-from-data-stream', category: 'heap', difficulty: 'hard' },
  // 贪心算法
  { id: 121, title: '买卖股票的最佳时机', slug: 'best-time-to-buy-and-sell-stock', category: 'greedy', difficulty: 'easy' },
  { id: 55, title: '跳跃游戏', slug: 'jump-game', category: 'greedy', difficulty: 'medium' },
  { id: 45, title: '跳跃游戏 II', slug: 'jump-game-ii', category: 'greedy', difficulty: 'medium' },
  { id: 763, title: '划分字母区间', slug: 'partition-labels', category: 'greedy', difficulty: 'medium' },
  // 动态规划
  { id: 70, title: '爬楼梯', slug: 'climbing-stairs', category: 'dp', difficulty: 'easy' },
  { id: 118, title: '杨辉三角', slug: 'pascals-triangle', category: 'dp', difficulty: 'easy' },
  { id: 198, title: '打家劫舍', slug: 'house-robber', category: 'dp', difficulty: 'medium' },
  { id: 279, title: '完全平方数', slug: 'perfect-squares', category: 'dp', difficulty: 'medium' },
  { id: 322, title: '零钱兑换', slug: 'coin-change', category: 'dp', difficulty: 'medium' },
  { id: 139, title: '单词拆分', slug: 'word-break', category: 'dp', difficulty: 'medium' },
  { id: 300, title: '最长递增子序列', slug: 'longest-increasing-subsequence', category: 'dp', difficulty: 'medium' },
  { id: 152, title: '乘积最大子数组', slug: 'maximum-product-subarray', category: 'dp', difficulty: 'medium' },
  { id: 416, title: '分割等和子集', slug: 'partition-equal-subset-sum', category: 'dp', difficulty: 'medium' },
  { id: 32, title: '最长有效括号', slug: 'longest-valid-parentheses', category: 'dp', difficulty: 'hard' },
  // 多维动态规划
  { id: 62, title: '不同路径', slug: 'unique-paths', category: 'dp-multi', difficulty: 'medium' },
  { id: 64, title: '最小路径和', slug: 'minimum-path-sum', category: 'dp-multi', difficulty: 'medium' },
  { id: 5, title: '最长回文子串', slug: 'longest-palindromic-substring', category: 'dp-multi', difficulty: 'medium' },
  { id: 1143, title: '最长公共子序列', slug: 'longest-common-subsequence', category: 'dp-multi', difficulty: 'medium' },
  { id: 72, title: '编辑距离', slug: 'edit-distance', category: 'dp-multi', difficulty: 'medium' },
  // 技巧
  { id: 136, title: '只出现一次的数字', slug: 'single-number', category: 'tricks', difficulty: 'easy' },
  { id: 169, title: '多数元素', slug: 'majority-element', category: 'tricks', difficulty: 'easy' },
  { id: 75, title: '颜色分类', slug: 'sort-colors', category: 'tricks', difficulty: 'medium' },
  { id: 31, title: '下一个排列', slug: 'next-permutation', category: 'tricks', difficulty: 'medium' },
  { id: 287, title: '寻找重复数', slug: 'find-the-duplicate-number', category: 'tricks', difficulty: 'medium' },
]

// 去重（按 id）
const seen = new Set()
export const PROBLEMS_DEDUP = PROBLEMS.filter((p) => {
  if (seen.has(p.id)) return false
  seen.add(p.id)
  return true
})

/** 按分类分组的题目 */
export function getProblemsByCategory() {
  const map = {}
  CATEGORIES.forEach((c) => { map[c.key] = [] })
  PROBLEMS_DEDUP.forEach((p) => {
    if (map[p.category]) map[p.category].push(p)
  })
  return map
}

/** 根据分类 key 取分类信息 */
export function getCategoryByKey(key) {
  return CATEGORIES.find((c) => c.key === key) || null
}

/** 题目难度标签 */
export const DIFFICULTY_LABELS = { easy: '简单', medium: '中等', hard: '困难' }
