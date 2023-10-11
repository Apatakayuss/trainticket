import './App.css';
// import Hero from './Components/Hero';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Hero = lazy(() => import('./Components/Hero'));
const Confirmation = lazy(() => import('./Pages/Confirmation'));
// import Nav from './Components/Nav'

function App() {
  return (
    <div className='App'>
  
    <Routes>
      <Route path="/" element={<Hero />}/>
      <Route path='/Confirmation' element={<Confirmation />}/>
    </Routes>
  
    </div>
  );
}

export default App;
