import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import TradeList from './components/tradeList/tradeList.component';
import ForgeClient from 'forex-quotes';

import './App.css';
import TimerWidget from './components/timers/timerWidget.component';
import FxData from './components/fxData/fxData.component';

const FxDataContext = React.createContext([]);

function App() {
  const [fxData, setFxData] = useState([]);

  // let client = new ForgeClient('MQSQD7yWdtRc6BAltWIfhm8CFdaPrV6a');

  // client.getQuotes(['XAUUSD']).then((response) => {
  //   console.log(response);
  // });

  return (
    <div className="App">
      <FxDataContext.Provider value={fxData}>
        <header className="App-header">
          <FxData />
          <TimerWidget />

          <TradeList />
        </header>
      </FxDataContext.Provider>
    </div>
  );
}

export default App;
