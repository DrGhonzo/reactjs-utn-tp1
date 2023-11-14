import React from 'react';
import Button from 'react-bootstrap/Button';
import './CounterButtons.css';

const CounterButtons = ({ count, setCount }) => {

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <>
      <Button variant="success" onClick={handleIncrement}>
        +
      </Button>{' '}
      <Button variant="danger" onClick={handleDecrement}>
        -
      </Button>
    </>
  );
};

export default CounterButtons;
