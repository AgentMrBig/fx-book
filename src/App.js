import React from 'react';
import ReactDOM from 'react-dom';
import TradeList from './components/tradeList/tradeList.component';
import ForgeClient from 'forex-quotes';

import './App.css';
import TimerWidget from './components/timers/timerWidget.component';

function App() {
  let client = new ForgeClient('MQSQD7yWdtRc6BAltWIfhm8CFdaPrV6a');

  client.getQuotes(['XAUUSD']).then((response) => {
    console.log(response);
  });

  return (
    <div className="App">
      <header className="App-header">
        <TimerWidget />
        <TradeList />
      </header>
    </div>
  );
}

export default App;
