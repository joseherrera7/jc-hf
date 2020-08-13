import React from 'react';
import './App.css';
import Bar from './Bar';
import Cards from './Cards'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MailForm from './MailForm';

const abilities = ['C#', 'JavaScript', 'Java', 'React', 'Nodejs', 'SQL Server', 'MongoDB', 'PostgreSQL', 'HTML', 'CSS'];
const aptitudes = ['Self-learner','Proactive','Persistent','Respectful', 'Responsable', 'Extroverted', 'Languages (Spanish/English)', 'Problem Solutions' , 'Organization' , 'Analysis'];

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
              <Col sm="auto"><Cards header="My abilities..." title="Programming Languages" text={abilities.map(item => <li key={item}>{item}</li>)}/></Col>
              <Col sm="auto"><Cards header="My values..." title="Aptitudes" text={aptitudes.map(item => <li key={item}>{item}</li>)}/></Col>
            </Row>
            <br/>
          </Container>
          <div className="bg-dark">
            <br/>
              <p className="phrase">"Incluso la gente que afirma que no podemos hacer nada para cambiar nuestro destino, mira antes de cruzar la calle."</p>
              <p className="phrase">-Stephen Hawking</p>
            <br/>
          </div>
        </body>
      </div>
    );
  }
}
export default App;
