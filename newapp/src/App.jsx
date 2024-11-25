import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {
  Routes, Route
} from 'react-router-dom'
import UseState from './components/day3/UseStates';
function App() {
  return (
  <div className='App'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/UseState" element={<UseState />} />
    </Routes>
  </div>
  )
}

export default App;
