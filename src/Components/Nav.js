import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MainWrapper from './MainWrapper';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleCss = () => setOpenNav(!openNav);
  return (
    <nav>
      <div className="name">
        <h4> Sista Ramachandra Murthy</h4>
      </div>
      <ul className={!openNav ? 'nav-links' : 'nav-active'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
      <div onClick={handleCss} className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
