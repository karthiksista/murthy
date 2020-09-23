import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedium,
  faCodepen,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const SocialFooter = () => {
  return (
    <div className="social-container">
      <h3>@KarthikSista</h3>
      <a href="https://medium.com/@karthik.sista6" className="medium social">
        <FontAwesomeIcon icon={faMedium} size="2x" />
      </a>
      <a href="https://codepen.io/karthiksista" className="codepen social">
        <FontAwesomeIcon icon={faCodepen} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/karthik-sista-67094181/"
        className="linkedIn social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://twitter.com/Karthik_Sista" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/karthik_sista/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};

export default SocialFooter;
