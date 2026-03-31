import { useState } from 'react';

const Example6 = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  //   form.name = 'Alice';

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleNameChange = (e) => setForm({ ...form, name: e.target.value });
  //   const handleEmailChange = (e) => setForm({ ...form, email: e.target.value });

  return (
    <div>
      <h2>Storing an object in state</h2>

      <input
        name='name'
        value={form.name}
        placeholder='Name'
        onChange={handleChange}
        // onChange={handleNameChange}
      />

      <input
        name='email'
        value={form.email}
        placeholder='email'
        onChange={handleChange}
        // onChange={handleEmailChange}
      />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
};

export default Example6;
