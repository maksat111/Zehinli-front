import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import Navbar from './pages/sections/navbar';
import Winners from './pages/sections/winners';
import Footer from './pages/sections/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='winners' element={<Winners />} exact />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
