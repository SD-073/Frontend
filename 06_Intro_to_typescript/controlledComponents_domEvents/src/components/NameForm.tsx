import { useState, type ChangeEventHandler } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  console.log(name);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor='name'>Name:</label>
        <input id='name' type='text' value={name} onChange={handleChange} />
      </form>

      {name && <p>Hello, {name}</p>}
      <button onClick={() => setName('')}>Clear</button>
    </>
  );
};

export default NameForm;
