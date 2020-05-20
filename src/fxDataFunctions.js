const FxDataFetch = () => {
  var d;

  fetch(
    'https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=5min&apikey=8OG92RBF0H8VK297/'
  )
    .then((res) => res.json())
    //.then((data) => console.log(data))
    .then((data) => ((d = Object.entries(data)), console.log(d)));
  return d;
};

export default FxDataFetch;
