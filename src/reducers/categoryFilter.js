import {SET_CATEGORY_FILTER} from '../constants/ActionTypes'

const categoryFilter = (state = 'NONE', action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default categoryFilter
