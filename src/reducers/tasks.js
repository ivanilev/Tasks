const initialState = [
  {
    title: 'First task',
    category: 'Home',
    isChecked: false,
    id: 0
  },
  {
    title: 'Second task',
    category: 'Home',
    isChecked: true,
    id: 1
  },
  {
    title: 'HOME task',
    category: 'Home',
    isChecked: false,
    id: 2
  },
  {
    title: 'WORK task',
    category: 'Work',
    isChecked: true,
    id: 3
  },
  {
    title: 'WORK task',
    category: 'Work',
    isChecked: false,
    id: 4
  },
  {
    title: 'WORK task',
    category: 'Work',
    isChecked: true,
    id: 5
  }
]

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case 'COMPLETE_TASK':
      return state.map(task =>
        task.id === action.id ?
          { ...task, isChecked: !task.isChecked } :
          task
      )

    default:
      return state
  }
}
