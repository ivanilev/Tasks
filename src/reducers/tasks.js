import { COMPLETE_TASK, SAVE_CHANGES } from '../constants/ActionTypes';
import * as priorities from '../constants/Priorities';

const initialState = [
  {
    title: 'First task',
    deadline: 1601358183811,
    priority: priorities.HIGH_PRIORITY,
    category: 'Home',
    isChecked: false,
    id: 0,
    description: ''
  },
  {
    title: 'Second task',
    deadline: 1600887497576,
    priority: priorities.HIGH_PRIORITY,
    category: 'Home',
    isChecked: true,
    id: 1,
    description: 'This is a Second task! about home whatevs!'
  },
  {
    title: 'Low priority home task',
    deadline: Date.now() + 25000000,
    priority: priorities.LOW_PRIORITY,
    category: 'Home',
    isChecked: false,
    id: 2,
    description: ''
  },
  {
    title: 'HIGH priority task',
    deadline: Date.now() + 5000000,
    priority: priorities.HIGH_PRIORITY,
    category: 'Work',
    isChecked: false,
    id: 3,
    description: 'This is a HIGH priority task! about WORK!'
  },
  {
    title: 'Medium priority task',
    deadline: Date.now() + 5000000,
    priority: priorities.MEDIUM_PRIORITY,
    category: 'Work',
    isChecked: true,
    id: 4,
    description: 'This is a Medium priority task! about WORK!'
  },
  {
    title: 'WORK task',
    deadline: Date.now() + 5000000,
    priority: priorities.LOW_PRIORITY,
    category: 'Work',
    isChecked: true,
    id: 5,
    description: ''
  }
]

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.id ?
          { ...task, isChecked: !task.isChecked } :
          task
      )
    case SAVE_CHANGES:
      console.log(action)
      return state.map(task => 
        task.id === action.id ? action : task
      )
    default:
      return state
  }
}
