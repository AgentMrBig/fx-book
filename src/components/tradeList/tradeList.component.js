import React, { useState } from 'react';
import Trade from '../trade/trade.component';

const TradeList = () => {
  const [trades, setTrades] = useState([
    {
      pair: 'EUR/USD',
      direction: 'up',
      entry: 1.00455,
      complete: false,
    },
    {
      pair: 'EUR/JPY',
      direction: 'up',
      entry: 1.00455,
      complete: false,
    },
    {
      pair: 'XAU/USD',
      direction: 'up',
      entry: 1.00455,
      complete: false,
    },
  ]);

  return (
    <div>
      {trades.map((trade) => (
        <Trade
          pair={trade.pair}
          direction={trade.direction}
          entry={trade.entry.toString()}
          complete={trade.complete.toString()}
        />
      ))}
    </div>
  );
};

export default TradeList;
