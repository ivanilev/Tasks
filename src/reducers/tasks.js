import { COMPLETE_TASK } from '../constants/ActionTypes';
import * as priorities from '../constants/Priorities';

const initialState = [
  {
    title: 'First task',
    deadline: 1601644696434,
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
    title: 'HOME task',
    deadline: 1600887297576,
    priority: priorities.LOW_PRIORITY,
    category: 'Home',
    isChecked: false,
    id: 2
  },
  {
    title: 'WORK task',
    deadline: 1601635667834,
    priority: priorities.MEDIUM_PRIORITY,
    category: 'Work',
    isChecked: true,
    id: 3
  },
  {
    title: 'WORK task',
    deadline: 1601635665213,
    priority: priorities.MEDIUM_PRIORITY,
    category: 'Work',
    isChecked: false,
    id: 4
  },
  {
    title: 'WORK task',
    deadline: 1601635667834,
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
