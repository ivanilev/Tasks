import { combineReducers } from 'redux'
import tasks from './tasks'
import categories from './categories';
import categoryFilter from './categoryFilter';
import contentViewer from './contentViewer';

const rootReducer = combineReducers({
  categories,
  categoryFilter,
  contentViewer,
  tasks
})

export default rootReducer
