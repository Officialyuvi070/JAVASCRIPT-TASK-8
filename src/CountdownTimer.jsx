import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      alert('Countdown reached 0!');
    }
  }, [countdown]);

  return (
    <div>
      <h2>Using UseEffect Hooks</h2>
      <p>UseEffect: To perform side effects like data fetching or subscribing to events.</p>
      {countdown >= 0 ? <p>Time left: {countdown}</p> : <p>Countdown finished!</p>}
    </div>
  );
};

export default CountdownTimer;
