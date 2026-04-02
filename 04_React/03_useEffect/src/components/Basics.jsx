import { useEffect, useState } from 'react';

const Basics = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // useEffect(effect, dependencies)

  // runs only on first render => component mounted
  useEffect(() => {
    console.log('The component has been mounted');
  }, []);

  //deneding on a state
  useEffect(() => {
    console.log('state has changed');
  }, [name, count]);

  // runs on every render
  //   useEffect(() => {
  //     console.log('i dont care, i will run every time');
  //   });

  return (
    <div>
      <h2>Basics</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='type something'
      />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Basics;
