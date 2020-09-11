import React from 'react';
import {Container, Sidebar,  Header, Footer, Content, Sidenav, Nav} from 'rsuite';
import CategorySubSection from './containers/CategorySubSection';
import VisibleTaskList from './containers/VisibleTaskList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container className='main-container'>
          <Sidebar
            style={{display: 'flex', flexDirection: 'column', borderRight: '2px solid #00a800'}}
          >
            <Sidenav.Header>
              <div className="tasks-header">
                <h1>Tasks</h1>
              </div>
            </Sidenav.Header>
            <Sidenav
              appearance="subtle"
            >
              <Sidenav.Body>
                <Nav>
                  <CategorySubSection />
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </Sidebar>
          
          <Container
            style={{padding: '8px'}}
          >
            <Header>Header</Header>
            <Content>
              <VisibleTaskList />
            </Content>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
