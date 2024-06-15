import React from 'react'
import './About.css';
import AboutImage from '../../assets/About Us img.png';
const About = () => {
  return (
    <div className='About-section'>
        <p className='heading1'>About Us</p>
        <div className='about-banner'>
            <img src={AboutImage} alt='image'/>
        </div>
        <div>
          <p className='heading1'>Welcome to Tanjore</p>
        </div>
        <div className='about-text-section'>
          <p className='about-text'>In the year of 2013 Jan.22nd Shri C.Saminathan who has packed 35+ years of experience in FMCG Industry laid the foundation for his Coffee Decoction under the brand name of ‘ TANJORE ‘ Degree Coffee</p>
        </div>
    </div>
  )
}

export default About