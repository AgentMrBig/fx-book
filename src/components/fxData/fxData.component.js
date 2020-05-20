import React, { useState } from 'react';
import FxDataFetch from '../../fxDataFunctions';

const FxData = () => {
  const [fxData, setFxData] = useState([]);

  return <div> {fxData}</div>;
};

export default FxData;
