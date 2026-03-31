import { useState } from 'react';

const Example1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  console.log(name);

  return (
    <div>
      <h2>Multiple States</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br />
      <br />
      <input
        value={name}
        placeholder='Your name'
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
};

export default Example1;
