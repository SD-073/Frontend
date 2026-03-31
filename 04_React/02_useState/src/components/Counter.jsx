const Counter = () => {
  let counter = 5;

  console.log('rendered');

  const handleIncrement = () => {
    counter++;
    console.log(counter);
  };

  const handleDecrement = () => {
    counter--;
    console.log(counter);
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={handleDecrement}>-</button>
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
