import React from 'react';
import me from '../assets/images/me.jpg';
import '../assets/styles/Banner.css';

const Banner = () => {
  return (
    <div id="banner">
      <div id="profile-info">
        <img src={me} alt="Gift Ngwenya" className="profile-image" />
        <div id="name">
          <h1>N.G Ngwenya</h1>
          <h2>FullStack Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;