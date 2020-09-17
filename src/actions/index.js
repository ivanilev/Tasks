export const completeTask = id => ({ type: 'COMPLETE_TASK', id })
export const setCategoryFilter = filter => ({ type: 'SET_CATEGORY_FILTER', filter})
export const addNewCategory = text => ({ type: 'ADD_CATEGORY', text })
