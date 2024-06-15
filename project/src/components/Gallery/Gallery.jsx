import React from 'react'
import GalleryImg1 from '../../assets/Gallery img1.png';
import GalleryImg2 from '../../assets/Gallery img2.jpeg';
import GalleryImg3 from '../../assets/Gallery img3.png';
import GalleryImg4 from '../../assets/Gallery img4.jpeg';

import './Gallery.css';
const Gallery = () => {
  return (
    <div className='Gallery_section'>
      <div><p className='Gallery_heading'>Gallery</p></div>
      <div className='images_section'>
        <div><img src={GalleryImg1} alt='image' className='gallery_img'/></div>
        <div><img src={GalleryImg2} alt='image' className='gallery_img'/></div>
        <div><img src={GalleryImg3} alt='image' className='gallery_img'/></div>
        <div><img src={GalleryImg4} alt='image' className='gallery_img'/></div>
      </div>
    </div>
  )
}

export default Gallery
