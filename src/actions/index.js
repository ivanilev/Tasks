import * as types from '../constants/ActionTypes';

export const completeTask = id => ({ type: types.COMPLETE_TASK, id })
export const setCategoryFilter = filter => ({ type: types.SET_CATEGORY_FILTER, filter})
export const addNewCategory = text => ({ type: types.ADD_CATEGORY, text })
export const changeView = (view, task) => ({type: types.CHANGE_VIEW, view, task})
