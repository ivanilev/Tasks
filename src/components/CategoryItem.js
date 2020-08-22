import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CategoryItem = ({ active, setFilter, categoryItem}) => 
  (
    <li className='category-item' key={categoryItem}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className={classnames({selected: active})}
        style={{cursor: 'pointer'}}
        onClick={()=> setFilter()}
      >
        {categoryItem}
      </a>
    </li>
  )

  CategoryItem.propTypes = {
  active: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  categoryItem: PropTypes.string.isRequired
}

export default CategoryItem