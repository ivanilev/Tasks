import React, { Component } from 'react'
import {Header, Content, Footer, Container, Navbar, Nav, Icon, ButtonGroup } from 'rsuite'
import DisplayAllItems from '../Views/DisplayAllItems'
import DisplayItem from '../Views/DisplayItem'
import * as Views from '../constants/Views'
export default class MainSection extends Component {
  headerButtonClicked(view, task=null) {
    this.props.changeView(view, task);
  }
  render() {
    let element = null;
    let header = '';
    let iconToolbar = null;
    switch (this.props.view) {
      case Views.ADD_TASK:
        header = <span>New Task</span>
        element = <div>TODO</div>
        iconToolbar = (
          <ButtonGroup>
            <Nav.Item icon={ <Icon
                icon="save"
                size="2x"
                className="main-section__navbar--button"/> }
            />
            <Nav.Item icon={ <Icon
                icon="close-circle"
                size="2x"
                className="main-section__navbar--button"/> }
              onClick = {this.headerButtonClicked.bind(this, Views.EMPTY)}
            />
          </ButtonGroup>
        )
        break;
      case Views.VIEW_TASK: 
        header = <span>Task details</span>
        element = <DisplayItem task={this.props.task}/>
        iconToolbar = (
          <Nav.Item
            icon={<Icon
              icon="close-circle"
              size="2x"
              className="main-section__navbar--button"
            />}
            onClick = {this.headerButtonClicked.bind(this, Views.EMPTY)}
          />
        )
        break;
      case Views.VIEW_TASKS:
        element = <DisplayAllItems />
        iconToolbar = (
          <Nav.Item
            icon = {<Icon
              icon="plus-circle"
              size="2x"
              color="#00a800"
              className="main-section__navbar--button"/>}
            onClick = {this.headerButtonClicked.bind(this, Views.ADD_TASK)}
          />
        )
        break;
      case Views.EMPTY:
        header = '';
        element = null;
        iconToolbar = null;
        break;
      default:
        header = '';
        element = null;
        iconToolbar = null;
        break;
    }

    return (
      <Container>
        <Header>
          <Navbar className="main-section__navbar">
            <Navbar.Header className="main-section__navbar--title">
              <h3>
                {header}
              </h3>
            </Navbar.Header>
            <Navbar.Body>
              <Nav key="hey" pullRight>
                {iconToolbar}
              </Nav>
            </Navbar.Body>
          </Navbar>
        </Header>
        <Content>
          {element}
        </Content>
        <Footer>Footer</Footer>
      </Container>
    )
  }
}
