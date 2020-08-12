import React from 'react';
import './App.css';
import Bar from './Bar';
import Cards from './Cards'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <Bar />
        <header className="App-header">
          <img src="https://avatars1.githubusercontent.com/u/31715468?s=400&u=2e8441bdf06d9c2c4298ecb5128f91cfc28eb80f&v=4" width="200" height="200" alt="José" id="rcorners3" />
          <br />
          <h1>Welcome, I´m José Herrera.</h1>
          <h2>A passionate developer.</h2>

        </header>
        <body className="App-body">
          <br />
          <Container>
            <Row className="justify-content-md-center">
              <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto"><Cards /></Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
              <Col lg="auto" md="auto" sm="auto" xl="auto" xs="auto"><Cards /></Col>
            </Row>
          </Container>


        </body>
      </div>
    );
  }
}
export default App;
