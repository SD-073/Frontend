import { useState } from 'react';

const Example3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  return (
    <div>
      <h2>Toggle</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>Now you see me!</p>}
    </div>
  );
};

export default Example3;
