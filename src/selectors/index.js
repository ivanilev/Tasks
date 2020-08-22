import { createSelector } from 'reselect'

// const getVisibilityFilter = state => state.categoryFiler
const getTasks = state => state.tasks

export const getCategories = createSelector(
  [getTasks],
  (tasks) => {
    let result = [];
    tasks.forEach(task => {
      if(result.findIndex(i=> i === task.category) === -1) {
        result.push(task.category)
      }
    });
    return result;
  }
)
