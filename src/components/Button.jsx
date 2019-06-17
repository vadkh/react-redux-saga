import React, { useState } from 'react';

const styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
};

const Button = ({ getRates }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={!hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
      onMouseOut={() => {
        setHover(false);
      }}
      onMouseOver={() => {
        setHover(true);
      }}
      onClick={getRates}
    >
      Press to see Rates
    </button>
  );
};

export default Button;
