import CategorySubSection from '../components/CategorySubSection'
import { getCategories } from '../selectors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  categories: getCategories(state)
})

export default connect(
  mapStateToProps
)(CategorySubSection)
