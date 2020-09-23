import React from 'react';
import './App.css';

const About = ({ children }) => {
  const aboutMeStyle = {
    top: '10%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    backgroundColor: '#06467c',
    textAlign: 'center',
  };

  const infoStyle = {};

  return (
    <div className="first-content">
      <img className="image-style" src={require('./images/youtuber.svg')} />
      <span className="text-content">
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </span>
    </div>
  );
};

export default About;
