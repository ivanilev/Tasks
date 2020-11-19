import MainSection from '../components/MainSection'
import { connect } from 'react-redux'
import { changeView } from '../actions'

const mapStateToProps = (state) => ({
  view: state.contentViewer.view,
  task: state.contentViewer.task
})

const mapDispatchToProps = (dispatch) => ({
  changeView: (view, task = null) => {
    dispatch(changeView(view, task))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection)
