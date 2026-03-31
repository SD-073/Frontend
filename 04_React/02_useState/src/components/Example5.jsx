import { useState } from 'react';

const Example5 = () => {
  const [counter, setCounter] = useState(0);

  //   const handleClick = () => {
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //     setCounter(counter + 1);
  //   };

  const handleClick = () => {
    setCounter((prev) => prev + 1); // prev = 0 => returns 1
    setCounter((prev) => prev + 1); // prev = 1 => returns 2
    setCounter((prev) => prev + 1); // prev = 2 => returns 3
  };

  return (
    <div>
      <h2>Direct updates?</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleClick}>+3</button>
    </div>
  );
};

export default Example5;
