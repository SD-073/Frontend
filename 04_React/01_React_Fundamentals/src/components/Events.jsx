function Events() {
  //   button.addEventListner('click', handleClick);

  const handleClick = () => {
    alert('button clicked');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;

    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <button onClick={handleClick}>CLICK!</button>
      <input type='text' onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' type='text' placeholder='Your name' />

        <label htmlFor='email'>Email:</label>
        <input id='email' name='email' type='email' placeholder='your email' />
        <button type='submit'>Submit</button>
      </form>

      <button onClick={() => console.log('clicked')}>CLICK</button>
    </div>
  );
}

export default Events;
