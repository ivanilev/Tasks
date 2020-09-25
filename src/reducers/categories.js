import { ADD_CATEGORY } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    name: 'Home'
  },
  {
    id: 1,
    name: 'Work'
  }
]


export default function categories(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
          name: action.text
        }
      ]
    default:
      return state
  }
}
