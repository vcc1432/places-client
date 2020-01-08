import React from 'react';

import './Banner.css';

const Banner = props => {
  return (
    <section id="banner">
      <div className="inner">
        <h2>This is YourPlaces</h2>
        <ul className="actions">
          <li><a href="#content" className="button big special">Sign Up</a></li>
          <li><a href="#elements" className="button big alt">Learn More</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;