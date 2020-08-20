const initialState = [
  {
    title: 'First task',
    isChecked: false,
    id: 0
  },
  {
    title: 'Second task',
    isChecked: true,
    id: 1
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
