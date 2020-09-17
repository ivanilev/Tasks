import React from 'react'
// import PropTypes from 'prop-types'
import { Dropdown, Icon } from 'rsuite';
import CategoryInput from './CategoryInput';

class CategorySubSection extends React.Component {

  state = {
    adding: false,
  }

  categoryClicked(category) {
    this.props.setFilter(category)
  }
  AddCategory(text) {
    // TODO VALIDATION
    if (!this.props.categories.some(element => element.name === text)) {
      this.props.addCategory(text)
    }
    this.setState({adding: false})
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
          <Dropdown.Item
            style={{ marginTop: '10px'}}
            icon={<Icon icon="plus" />}
            onSelect = {() => this.setState({adding: true})}
          >
            Add Category
          </Dropdown.Item>
          {
            this.state.adding ?
              <CategoryInput onSave={this.AddCategory.bind(this)} /> 
            : null
          }
          <Dropdown.Item divider/>
          {this.props.categories.map((cat, index) => (
              <Dropdown.Item
                key={index}
                eventKey = {cat.name}
                onSelect = {this.categoryClicked.bind(this)}
              >
                {cat.name}
              </Dropdown.Item>
            )
          )}
        </Dropdown>
    )
  }
}

export default CategorySubSection
