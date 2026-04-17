import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Students from './pages/Students';
import OneStudent from './pages/OneStudent';
import { useState, useEffect } from 'react';
import IsLogin from './layouts/IsLogin';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const students = [
    { name: 'Josh', id: 1 },
    { name: 'Alice', id: 2 },
    { name: 'Amy', id: 3 },
  ];
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [token]);

console.log(token, isAuth)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
          <Route path='/auth' element={<IsLogin isAuth={isAuth} />}>
            <Route path='/auth/dashboard' element={<h1>Dashboard</h1>} />
            <Route path='/auth/students' element={<Students students={students} />} />
            <Route path='/auth/students/:id' element={<OneStudent students={students} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
