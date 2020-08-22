import { combineReducers } from 'redux'
import tasks from './tasks'
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  tasks,
  categoryFilter
})

export default rootReducer
