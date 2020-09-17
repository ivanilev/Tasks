import { combineReducers } from 'redux'
import tasks from './tasks'
import categories from './categories';
import categoryFilter from './categoryFilter';

const rootReducer = combineReducers({
  categories,
  tasks,
  categoryFilter
})

export default rootReducer
