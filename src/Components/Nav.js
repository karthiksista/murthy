import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import MainWrapper from './MainWrapper';

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="name"> Sista Ramachandra Murthy</h1>
      <ul className="linkStyle">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <button className="button"> Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
