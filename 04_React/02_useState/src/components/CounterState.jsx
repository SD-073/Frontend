import { useState } from 'react';

const CounterState = () => {
  const [count, setCount] = useState(0);

  //   console.log('init', count);
  console.log('component has been re-rendered');

  return (
    <div>
      <h2>useState Counter</h2>

      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>+</button>
    </div>
  );
};

export default CounterState;
