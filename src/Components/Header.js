import React, { Button } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ApiData from '../youtube/apiData';

const Header = ({ title }) => {
  return (
    <div className="header" style={headerStyle}>
      <div style={container}>
        <h2 style={titleStyle}>{title}</h2>
        <Link style={buttonStyle} to="/">
          Home
        </Link>
        <Link style={buttonStyle} to="/about">
          About
        </Link>
        <Link style={buttonStyle} to="/users">
          Users
        </Link>
        <Switch>
          <Route path="/about">
            <ApiData />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
function Home() {
  return <h2 style={{ color: 'white' }}>ladsakn</h2>;
}

function About() {
  return <h2 style={{ color: 'white' }}>About</h2>;
}

function Users() {
  return <h2 style={{ color: 'white' }}>Users</h2>;
}

const headerStyle = {
  backgroundColor: '#20232a',
  padding: '5px',
};

const titleStyle = {
  color: '#61dafb',
};
const container = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  //   padding: '10px',
  //   margin: '10px',
  marginLeft: '75px',
  marginRight: '25px',
};

const buttonStyle = {
  color: 'white',
  alignSelf: 'center',
};

export default Header;
