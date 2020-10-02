import { COMPLETE_TASK } from '../constants/ActionTypes';
import * as priorities from '../constants/Priorities';

const initialState = [
  {
    title: 'First task',
    deadline: 1601358183811,
    priority: priorities.HIGH_PRIORITY,
    category: 'Home',
    isChecked: false,
    id: 0
  },
  {
    title: 'Second task',
    deadline: 1600887497576,
    priority: priorities.HIGH_PRIORITY,
    category: 'Home',
    isChecked: true,
    id: 1
  },
  {
    title: 'Low priority home task',
    deadline: Date.now() + 25000000,
    priority: priorities.LOW_PRIORITY,
    category: 'Home',
    isChecked: false,
    id: 2
  },
  {
    title: 'HIGH priority task',
    deadline: Date.now() + 5000000,
    priority: priorities.HIGH_PRIORITY,
    category: 'Work',
    isChecked: false,
    id: 3
  },
  {
    title: 'Medium priority task',
    deadline: Date.now() + 5000000,
    priority: priorities.MEDIUM_PRIORITY,
    category: 'Work',
    isChecked: true,
    id: 4
  },
  {
    title: 'WORK task',
    deadline: Date.now() + 5000000,
    priority: priorities.HIGH_PRIORITY,
    category: 'Work',
    isChecked: true,
    id: 5
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

    default:
      return state
  }
}
