import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'rsuite';

export default class CategoryInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired
  }
  state = {
    text: this.props.text || ''
  }
  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
  }
  handleChange(inputText) {
    this.setState({ text: inputText })
  }
  handleBlur(e) {
    this.props.onSave(e.target.value)
  }
  render() {
    return (
      <Input
        className="category__input-field"
        type="text"
        size="sm"
        placeholder={'New category...'}
        autoFocus={true}
        value={this.state.text}
        onBlur={(e) => this.handleBlur(e)}
        onChange={(text) => this.handleChange(text)}
        onKeyDown={(e) => this.handleSubmit(e)} />
    )
  }
}
