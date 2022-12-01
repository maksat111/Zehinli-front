import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/homepage';
import Navbar from './pages/components/navbar';
import Winners from './pages/winners/winners';
import Footer from './pages/components/footer';

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
