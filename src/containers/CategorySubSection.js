import CategorySubSection from '../components/CategorySubSection'
import { connect } from 'react-redux'
import { addNewCategory, setCategoryFilter } from '../actions'

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
  addCategory: (text) => dispatch(addNewCategory(text)),
  setFilter: (category) => {
    dispatch(setCategoryFilter(category))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySubSection)
