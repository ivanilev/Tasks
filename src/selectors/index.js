import { createSelector } from 'reselect'

const getTasks = state => state.tasks
const getCategoryFilter = state => state.categoryFilter

export const getTasksByCategory = createSelector(
  [getTasks, getCategoryFilter],
  (tasks, categoryFilter) => {
    if(categoryFilter === 'NONE') {
      return []
    }
    return tasks.filter(task => task.category === categoryFilter)
  }
)

export const getTodaysTasks = createSelector(
  [getTasks],
  (tasks) => {
    return tasks.filter(task => task.deadline - Date.now() <= 60*60*24*1000 && task.deadline - Date.now() >= 0)
  }
)
