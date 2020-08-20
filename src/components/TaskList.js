import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'

const TaskList = ({ filteredTasks, actions }) => (
  <ul className="task-list">
    {filteredTasks.map(task =>
      <TaskItem key={task.id} task={task} {...actions} />
    )}
  </ul>
)

TaskList.propTypes = {
  filteredTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TaskList