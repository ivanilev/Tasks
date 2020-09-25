import React, { Component } from 'react'
import {Header, Content, Footer, Container} from 'rsuite'
import DisplayAllItems from '../Views/DisplayAllItems'
import DisplayItem from '../Views/DisplayItem'
import * as Views from '../constants/Views'

export default class MainSection extends Component {
  render() {
    let element;
    let header = <div>TODO: Header component with buttons or some shit, should change on view change</div>;
    switch (this.props.view) {
      case Views.ADD_TASK: 
        element = <div>TODO</div>
        break;
      case Views.VIEW_TASK: 
        element = <DisplayItem task={this.props.task}/>
        break;
      case Views.VIEW_TASKS:
        element = <DisplayAllItems />
        break;
      case Views.EMPTY:
        element = null;
        break;
      default:
        element = null;
        break;
    }

    return (
      <Container>
        <Header>{header}</Header>
        <Content>
          {element}
        </Content>
        <Footer>Footer</Footer>
      </Container>
    )
  }
}
