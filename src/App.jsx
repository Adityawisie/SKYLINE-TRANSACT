import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import ProductCatalog from './pages/ProductCatalog'; 
import Certificates from './pages/Certificates'; 
import Contact from './pages/Contact'; 
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AuthModal from './components/AuthModal';
import { useAuth } from './context/AuthContext';

function App() { 
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return ( 
    <Router> 
      <Header openModal={handleOpenModal} /> 
      {showModal && !user && <AuthModal onClose={handleCloseModal} />}
      <main> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/products" element={<ProductCatalog />} /> 
          <Route path="/certificates" element={<Certificates />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes> 
      </main> 
      <Footer /> 
    </Router> 
  ); 
} 
 
export default App;
