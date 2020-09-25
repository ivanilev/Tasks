import React from 'react'
import { Dropdown, Icon } from 'rsuite';
import { VIEW_TASK } from '../constants/Views'

class TasksTodaySubsection extends React.Component {
  taskClicked(task) {
    this.props.changeView(VIEW_TASK, task)
  }
  render() {
    return (
        <Dropdown
          eventKey="2"
          trigger="hover"
          title="Today's tasks"
          icon={<Icon icon="task" />}
          placement="rightStart"
        >
          {this.props.todaysTasks.map((task, index) => (
              <Dropdown.Item
                key={index}
                eventKey = {task.title}
                onSelect = {this.taskClicked.bind(this, task)}
              >
                {task.title}
              </Dropdown.Item>
            )
          )}
        </Dropdown>
    )
  }
}

export default TasksTodaySubsection
