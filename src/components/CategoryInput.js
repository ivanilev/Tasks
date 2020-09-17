import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CategoryInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  }
  state = {
    text: this.props.text || ''
  }
  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleBlur = e => {
    this.props.onSave(e.target.value)
  }
  render() {
    return (
      <input
        className="category__input-field"
        type="text"
        placeholder={'New category...'}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    )
  }
}
