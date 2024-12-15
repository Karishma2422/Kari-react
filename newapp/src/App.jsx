import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import {
  Routes, Route
} from 'react-router-dom'
import UseState from './components/day3/UseStates';
import UseStateTwo from './components/day4/UseState';
import UseEffect3 from './components/day5/UseEffect3';
import UseEffect0 from './components/day5/UseEffect0';  
import DyanamicRouting from './components/day5/DyanamicRouting';
import useeffectlogin from './components/day7/useeffectlogin';

function App() {
  return (
  <div className='App'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/UseState" element={<UseState />} />
    <Route path="/UseStateTwo" element={<UseStateTwo />} />
    <Route path='/useeffect0' element={<UseEffect0 />}  />
    <Route path="/UseEffect3" element={<UseEffect3 />} />
    <Route path='/DyanamicRouting/:productid' element={<DyanamicRouting />} />
    <Route path="/useeffectlogin" element={<useeffectlogin />} />
    </Routes>
  </div>
  )
}

export default App;
