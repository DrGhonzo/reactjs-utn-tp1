import React from 'react';
import Button from 'react-bootstrap/Button';

const CounterButtons = ({ count, setCount }) => {
  const buttonStyle = {
    width: '120px', // Adjust the width as needed
    fontWeight: 'bold',
    fontSize: '1.2em', // Adjust the font size as needed
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <div>
      <Button variant="success" onClick={handleIncrement} style={buttonStyle}>
        +
      </Button>{' '}
      <Button variant="danger" onClick={handleDecrement} style={buttonStyle}>
        -
      </Button>
    </div>
  );
};

export default CounterButtons;
