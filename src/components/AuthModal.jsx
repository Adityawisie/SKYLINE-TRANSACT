import React, { useState } from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import './AuthModal.css';

const AuthModal = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button onClick={onClose} className="close-button">&times;</button>
        {showLogin ? (
          <Login />
        ) : (
          <Signup />
        )}
        <button onClick={() => setShowLogin(!showLogin)} className="toggle-button">
          {showLogin ? 'Need an account? Sign Up' : 'Have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
