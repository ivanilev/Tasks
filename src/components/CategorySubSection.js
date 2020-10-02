import React from 'react'
import { Dropdown, Icon } from 'rsuite';
import CategoryInput from './CategoryInput';
import { VIEW_TASKS } from '../constants/Views'

class CategorySubSection extends React.Component {

  state = {
    addingCategory: false
  }
  categoryClicked(category) {
    this.props.setFilter(category)
    this.props.changeView(VIEW_TASKS)
  }
  AddCategory(text) {
    if (
          text !== '' 
          && typeof text !== undefined
          && !this.props.categories.some(element => element.name === text)
       ) {
      this.props.addCategory(text.trim())
    }
    this.setState({addingCategory: false})
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
            onSelect = {() => this.setState({addingCategory: true})}
          >
            Add Category
          </Dropdown.Item>
          {
            this.state.addingCategory ?
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
