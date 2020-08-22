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
    title: 'ASd task',
    category: 'Home',
    isChecked: false,
    id: 2
  },
  {
    title: 'ASDSAD task',
    category: 'Work',
    isChecked: true,
    id: 3
  },
  {
    title: 'ASDASDASDASDADS task',
    category: 'Work',
    isChecked: false,
    id: 4
  },
  {
    title: 'ASDASDASDASDAS task',
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
