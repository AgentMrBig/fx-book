import React, { useEffect, useState } from 'react';

const TimerWidget = () => {
  const [second, setSecond] = useState(0);

  var time;
  var h;
  var m;
  var s;
  var session = 'AM';

  function getTime() {
    var date = new Date();
    h = date.getHours(); // 0 - 23
    m = date.getMinutes(); // 0 - 59
    s = date.getSeconds(); // 0 - 59
    session = 'AM';

    if (h === 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    time = h + ':' + m + ':' + s + ' ' + session;
    setSecond(s);
  }

  function showTime(t) {
    document.getElementById('clock').innerText = t;
    //document.getElementById('clock').textContent = t;
  }

  useEffect(() => {
    const myInterval = setInterval(() => {
      getTime();
      showTime(time);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [second]);

  //setTimeout(showTime, 1000);

  return <div id="clock"></div>;
};

export default TimerWidget;
