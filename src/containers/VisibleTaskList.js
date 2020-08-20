import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TaskList from '../components/TaskList'
import * as TaskActions from '../actions'

const mapStateToProps = state => ({
  filteredTasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
})

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default VisibleTaskList
