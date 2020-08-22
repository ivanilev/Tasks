import React from 'react'
import PropTypes from 'prop-types'
import CategoryFilter from '../containers/CategoryFilter'

const CategorySubSection = ({ categories }) => 
  (
    <ul className='category-list'>
      {categories.map(cat =>
        <CategoryFilter key={cat} categoryItem={cat} />
      )}
    </ul>
  )

CategorySubSection.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategorySubSection