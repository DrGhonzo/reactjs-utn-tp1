import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CounterButtons from '../CounterButtons/CounterButtons';
import './CounterCard.css'

const CounterCard = ({cardTitle, darkMode}) => {
  const [count, setCount] = useState(0);

  return (
    <Card className={`mb-4 ${darkMode ? 'text-white bg-dark' : ''} text-center`} style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
      <Card.Header>
      <Card.Title className={`${darkMode ? 'text-white' : ''}  h2 `}>{cardTitle}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text className='h2'>
          <span>{count}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          <CounterButtons count={count} setCount={setCount} />
        </Card.Text>
      </Card.Footer>
    </Card>
  );
};

export default CounterCard;
