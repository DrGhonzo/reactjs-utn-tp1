import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CounterButtons from './CounterButtons';

const CardWithCounter = ({cardTitle}) => {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{cardTitle}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>Count: {count}</p>
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

export default CardWithCounter;
