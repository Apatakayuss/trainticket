import './App.css';
// import Hero from './Components/Hero';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
const Hero = lazy(() => import('./Components/Hero'))
const Confirmation = lazy(() => import('./Components/Confirmation'))
// import Nav from './Components/Nav'

function App() {
  return (
    <>
    <Suspense fallback={null}>
    <Routes>
      <Route path="/" element={<Hero />}/>
      <Route path='/Confirmation' element={<Confirmation />}/>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
