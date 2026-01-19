import React from 'react';
import "./Style.css";

const ElementClick = ({ onClick }) => {
  return (
    <h1 className='elementclick' onClick={onClick}>
    heading click </h1>
  );
};

export default ElementClick;