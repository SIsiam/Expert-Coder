import React from 'react';
import Image from '../images/js.jpg';
import ImageOne from '../images/mern.jpg';
import ImageTwo from '../images/python.jpg';
import ImageThree from '../images/php.jpg';
import ImageFour from '../images/backhand.jpg';
import ImageFive from '../images/native.jpeg';
import "./Content.css";

const Content = () => {
  return (
    <div className="card-container" id="card">

      <div className='menu-card'>
        <img src={Image} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Complete JavaScript A to Z</h2>
          <p className='mb-2 font-semibold'>75% Discount <span>$20</span></p>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageOne} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>MERN Stack Development</h2>
          <p className='mb-2 font-semibold'>75% Discount <span>$13</span></p>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageTwo} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Complete Python A to Z</h2>
          <p className='mb-2 font-semibold'>75% Discount <span>$20</span></p>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageThree} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>PHP A to Z</h2>
          <p className='mb-2 font-semibold'>75% Discount <span>$18</span></p>
        </div>
      </div>

  <div className='menu-card'>
        <img src={ImageFour} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Backhand Development</h2>
          <p className='mb-2 font-semibold'>80% Discount <span>$16</span></p>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageFive} alt='egg' className='rounded mb-20 shadow hover:opacity-80' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>React Native Build Mobile App</h2>
          <p className='mb-2 font-semibold'>80% Discount <span>$16</span></p>
        </div>
      </div>

    </div>
  );
};

export default Content;
