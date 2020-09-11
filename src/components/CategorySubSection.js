import React from 'react'
// import PropTypes from 'prop-types'
import { Dropdown, Icon } from 'rsuite';

class CategorySubSection extends React.Component {
  categoryClicked(category) {
    this.props.setFilter(category)
  }
  render() {
    return (
        <Dropdown 
          eventKey="1"
          trigger="hover"
          title="Categories"
          icon={<Icon icon="dashboard" />}
          placement="rightStart"
        >
          {this.props.categories.map((cat, index) => (
              <Dropdown.Item
                key={index}
                eventKey = {cat}
                onSelect = {this.categoryClicked.bind(this)}
              >
                {cat}
              </Dropdown.Item>
            )
          )}
        </Dropdown>
    )
  }
}

export default CategorySubSection
