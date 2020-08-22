import {connect} from 'react-redux'
import { setCategoryFilter } from '../actions'
import CategoryItem from '../components/CategoryItem'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps === state.categoryFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setCategoryFilter(ownProps))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)
