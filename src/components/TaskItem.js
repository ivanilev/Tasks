import React, { Component } from 'react'
import classnames from 'classnames'
import Moment from 'react-moment'

export default class TaskItem extends Component {
  render() {
    const { task } = this.props
    let element = (
      <div className="task-item">
        <h4>{task.title}</h4>
        <Moment 
          to={task.deadline}
          className={'task-item__deadline--'.concat(task.priority.title.toLowerCase(), '-priority')}
        >
          {Date.now()}
        </Moment>
      </div>
    )

    return (
      <li className={classnames({
        completed: task.isChecked,
      })}>
        {element}
      </li>
    )
  }
}