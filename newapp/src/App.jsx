import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
  <div className='App'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    </Routes>
  </div>
  )
}

export default App;
