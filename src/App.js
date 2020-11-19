import React from 'react';
import {Container, Sidebar, Sidenav, Nav} from 'rsuite';
import CategorySubSection from './containers/CategorySubSection';
import TodaysTasksSubsection from './containers/TodaysTasksSubsection';
import MainSection from './containers/MainSection'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeKey: '1'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    return (
      <div className="App">
        <Container className='main-container'>
          <Sidebar className='sideBar'>
            <Sidenav.Header>
              <div className="tasks__header">
                <h1>Tasks</h1>
              </div>
            </Sidenav.Header>
            <Sidenav
              appearance="subtle"
              activeKey={this.state.activeKey}
            >
              <Sidenav.Body>
                <Nav>
                  <CategorySubSection />
                  <TodaysTasksSubsection />
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </Sidebar>
            <MainSection />
        </Container>
      </div>
    );
  }
}

export default App;
