import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TaskItem extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    completeTask: PropTypes.func.isRequired
  }
  render() {
    const { task, completeTask } = this.props

    let element = (
      <div className="view">
         <input className="toggle"
                 type="checkbox"
                 checked={task.isChecked}
                 onChange={() => completeTask(task.id)} />
          <label>
            {task.title}
          </label>
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