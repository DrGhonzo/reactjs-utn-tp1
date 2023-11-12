import React from 'react';
import CounterCard from './assets/components/CounterCard/CounterCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh', color: 'white' }}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md="6">
            <h1 className="text-center">Boca de Urnas</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="6">
            <CounterCard cardTitle={'Candidato 1'} darkMode />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="6">
            <CounterCard cardTitle={'Candidato 2'} darkMode />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
