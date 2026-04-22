import { useState, type KeyboardEventHandler } from 'react';

const KeyLogger = () => {
  const [lastKey, setLastKey] = useState('');

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    setLastKey(event.key);
  };

  return (
    <div>
      <input type='text' onKeyDown={handleKeyDown} placeholder='press a key' />
      {lastKey && <p>LAst key pressed: {lastKey}</p>}
    </div>
  );
};

export default KeyLogger;
