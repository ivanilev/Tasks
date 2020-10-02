import { createSelector } from 'reselect'

const getTasks = state => state.tasks
const getCategoryFilter = state => state.categoryFilter

export const getCategories = createSelector(
  [getTasks],
  (tasks) => {
    let result = [];
    tasks.forEach(task => {
      if(result.findIndex(i => i === task.category) === -1) {
        result.push(task.category)
      }
    });
    return result;
  }
)

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
