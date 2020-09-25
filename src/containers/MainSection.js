import MainSection from '../components/MainSection'
import { connect } from 'react-redux'
// import { getTaskById } from '../selectors'

const mapStateToProps = (state) => ({
  view: state.contentViewer.view,
  task: state.contentViewer.task // getTaskById(state.contentViewer.taskId) // TODO: task instead of taskId, selector
})

export default connect(
  mapStateToProps
)(MainSection)
