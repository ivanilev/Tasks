import CategorySubSection from '../components/CategorySubSection'
import { getCategories } from '../selectors'
import { connect } from 'react-redux'
import { setCategoryFilter } from '../actions'

const mapStateToProps = (state) => ({
  categories: getCategories(state)
})

const mapDispatchToProps = (dispatch) => ({
  setFilter: (category) => {
    dispatch(setCategoryFilter(category))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategorySubSection)
