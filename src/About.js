import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-elastic-carousel';
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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <div className="first-content">
      <div className="image-style">
        <Carousel breakPoints={breakPoints}>
          <div className="imgStyle">
            <img
              alt=""
              src="http://lorempixel.com/output/business-q-c-640-480-5.jpg"
            />
          </div>
          <div className="imgStyle">
            <img
              alt=""
              src="http://lorempixel.com/output/sports-q-c-640-480-8.jpg"
            />
          </div>
          <div className="imgStyle">
            <img
              alt=""
              src="http://lorempixel.com/output/sports-q-c-640-480-7.jpg"
            />
          </div>
          <div className="imgStyle">
            <img
              alt=""
              src="http://lorempixel.com/output/sports-q-c-640-480-5.jpg"
            />
          </div>
        </Carousel>
      </div>
      {/* <img className="image-style" src={require('./images/youtuber.svg')} /> */}
      <span className="text-content">
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and orem
        Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
      </span>
    </div>
  );
};

export default About;
