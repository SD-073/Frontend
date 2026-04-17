import { NavLink } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <nav className="navbar w-full bg-neutral p-4">
      <div className="navbar-left w-1/2">
        <h1 className="text-2xl font-bold">My App</h1>
      </div>
      <ul className="navbar-end gap-4 w-1/2">
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : 'text-white')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/auth/dashboard' className={({ isActive }) => (isActive ? 'text-primary' : 'text-white')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-primary' : 'text-white')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/students' className={({ isActive }) => (isActive ? 'text-primary' : 'text-white')}>
            Student list
          </NavLink>
        </li>
        <button onClick={() => logout()}>
          logout
        </button>
      </ul>
    </nav>
  );
}

export default Navbar