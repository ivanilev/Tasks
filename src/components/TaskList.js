import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ filteredTasks, actions }) => (
  <ul className="task-list">
    {filteredTasks.map(task =>
      <TaskItem key={task.id} task={task} {...actions} />
    )}
  </ul>
)

export default TaskList