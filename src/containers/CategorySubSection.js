import CategorySubSection from '../components/CategorySubSection'
import { connect } from 'react-redux'
import { addNewCategory, setCategoryFilter, changeView } from '../actions'

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  addCategory: (text) => dispatch(addNewCategory(text)),
  changeView: (view) => {
    dispatch(changeView(view))
  },
  setFilter: (category) => {
    dispatch(setCategoryFilter(category))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySubSection)
