import React from 'react';
import CounterCard from './CardWithCounter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col className="md">
          <CounterCard cardTitle={'Candidato 1'}/>
          <CounterCard cardTitle={'Candidato 2'}/>
          </Col>
        </Row>
      </Container>    
    </>
  );
};

export default App;
