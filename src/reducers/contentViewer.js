function contentViewer(state = {view: 'EMPTY', task: undefined}, action) {
  switch(action.type) {
    case 'CHANGE_VIEW':
      return {
        view: action.view,
        task: action.task
      };
    default:
      return state
  }
}

export default contentViewer