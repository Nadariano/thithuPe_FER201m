import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Detail from './components/Detail'
import Add from './components/Add'
import Update from './components/Update'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
