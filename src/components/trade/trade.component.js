import React, { useState } from 'react';
import './trade.styles.scss';

const Trade = (props) => {
  return (
    <div className="trade">
      <h3>{props.pair}</h3>
      Price:
      <br />
      Entry: {props.entry}
      <br />
      Direction: {props.direction}
      <br />
      Complete: {props.complete}
      <br />
    </div>
  );
};

export default Trade;
