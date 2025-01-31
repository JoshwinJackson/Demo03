import '../styles/style01.css';
import React, { useState } from 'react';
function New01() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount} className="increment-button">
        Increment
      </button>
    </div>
  );
}

export default New01;