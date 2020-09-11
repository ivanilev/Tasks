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
      return tasks
    }
    return tasks.filter(task => task.category === categoryFilter)
  }
)
