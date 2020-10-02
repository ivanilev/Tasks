import React from 'react'
import { Dropdown, Icon, IconButton } from 'rsuite';
import { VIEW_TASK } from '../constants/Views'

class TasksTodaySubsection extends React.Component {
  state = {
    sortType: 'asc'
  };
  taskClicked(task) {
    this.props.changeView(VIEW_TASK, task)
  }
  render() {
    const {sortType} = this.state;
    const {todaysTasks} = this.props;

    const todaysTasksSorted = todaysTasks.sort((task1, task2) => {
      const isReversed = (sortType === 'asc') ? 1 : -1;
      return isReversed * (task1.priority.priorityValue - task2.priority.priorityValue)
    });
    return (
        <Dropdown
          eventKey="2"
          trigger="hover"
          title="Today's tasks"
          icon={<Icon icon="task" />}
          placement="rightStart"
        >
        <Dropdown.Item>
          {
            <IconButton 
              icon={<Icon icon={sortType === 'asc' ? "long-arrow-up" : "long-arrow-down"}/>}
              placement="right"
              block
              onClick = {() => this.setState({sortType: sortType === 'asc' ? 'desc' : 'asc'})}
            >
              Priority
            </IconButton>
          }
        </Dropdown.Item>
        <Dropdown.Item divider />
          {todaysTasksSorted.map((task, index) => (
              <Dropdown.Item
                key={index}
                eventKey = {task.title}
                onSelect = {this.taskClicked.bind(this, task)}
              >
                {task.title}
                <Icon 
                  icon="arrow-up2"
                  style={{float: 'right', color: task.priority.priorityValue === 1 ? '#2b850d' : task.priority.priorityValue === 2 ? '#e0d319' : '#d62915'}}
                />
              </Dropdown.Item>
            )
          )}
        </Dropdown>
    )
  }
}

export default TasksTodaySubsection
