import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-800' : 'text-black')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'text-red-800' : 'text-black')}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-800' : 'text-black')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/students' className={({ isActive }) => (isActive ? 'text-red-800' : 'text-black')}>
            Student list
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar