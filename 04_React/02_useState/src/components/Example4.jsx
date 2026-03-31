import { useState } from 'react';

const Example4 = () => {
  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);

  return (
    <div>
      <h2>Form with two inputs</h2>
      <input
        value={name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Birthday 🎂</button>
      <p>
        Hello, {name}. You are {age} years old
      </p>
    </div>
  );
};

export default Example4;
