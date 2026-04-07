import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Students from './pages/Students';
import OneStudent from './pages/OneStudent';

function App() {
  const students = [
    { name: 'Josh', id: 1 },
    { name: 'Alice', id: 2 },
    { name: 'Amy', id: 3 },
  ];

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<h1>Dashboard</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/students' element={<Students students={students} />} />
          <Route path='/students/:id' element={<OneStudent students={students} />} />
          <Route path='/students/:id/:activity' element={<h1>One Student</h1>} />
        </Route>

        {/* <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<h1>Dashboard</h1>} />
        <Route path='/about' element={<h1>About</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App
