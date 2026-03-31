import { useState } from 'react';

const Example2 = () => {
  const [text, setText] = useState('');

  console.log(text);

  return (
    <div>
      <h2>Text input</h2>
      <input
        value={text}
        placeholder='type something'
        onChange={(e) => setText(e.target.value)}
      />

      <p>{text ? `You typed: ${text}` : 'Start typing!'}</p>
      <button onClick={() => setText('')}>RESET</button>
    </div>
  );
};

export default Example2;
