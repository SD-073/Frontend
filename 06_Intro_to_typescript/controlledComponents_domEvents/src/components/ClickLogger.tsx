import type { MouseEvent } from 'react';

const ClickLogger = () => {
  const handleClcik = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('clicked at: ', event.clientX, event.clientY);
    console.log('Alt key held:', event.altKey);
  };

  return <button onClick={handleClcik}>Click me</button>;
};

export default ClickLogger;
