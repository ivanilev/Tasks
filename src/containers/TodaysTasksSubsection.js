import TodaysTasksSubsection from '../components/TodaysTasksSubsection'
import { connect } from 'react-redux'
import { changeView } from '../actions'
import { getTodaysTasks } from '../selectors'

const mapStateToProps = (state) => ({
  todaysTasks: getTodaysTasks(state)
})

const mapDispatchToProps = (dispatch) => ({
  changeView: (view, task) => {
    dispatch(changeView(view, task))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysTasksSubsection)
