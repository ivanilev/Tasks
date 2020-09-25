import React, { Component } from 'react';

export default class DisplayItem extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        Hello {this.props.task.title ? this.props.task.title  : ';sad'} task
      </div>
    )
  }
}
