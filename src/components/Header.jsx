import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import './Header.css'; 
import logo from '../assets/logo.svg'; // Import logo here
 
const Header = ({ openModal }) => { 
  const { user, signOut } = useAuth();

  return ( 
    <header className="header"> 
      <div className="header-container"> 
        <NavLink to="/" className="logo">
          {/* Replace emoji logo with SVG logo using import */}
          <img src={logo} alt="Skyline Transact Logo" style={{ height: '2.5rem', verticalAlign: 'middle' }} />
        </NavLink> 
        <nav className="nav-menu"> 
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Homepage</NavLink> 
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink> 
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Product Catalog</NavLink> 
          <NavLink to="/certificates" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certificates & Trust</NavLink> 
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink> 
          {user ? (
            <button onClick={signOut} className="nav-link">Logout</button>
          ) : (
            <button onClick={openModal} className="nav-link">Login</button>
          )}
        </nav> 
      </div> 
    </header> 
  ); 
}; 
 
export default Header;