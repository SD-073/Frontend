import '../styles/Navbar.css';

function Navbar() {
  const name = 'Kai';

  return (
    <>
      <div className='navbar'>
        <p>Welcome, {name.toUpperCase()}</p>
        <h2 style={{ color: 'red', fontSize: '30px' }}>NAVBAR.JSX</h2>
        <h2 id='test'>TEST</h2>
      </div>
    </>
  );
}

export default Navbar;
