import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Image1 from '../../assets/Banner img1.png';
import Image2 from '../../assets/Banner img2.png';
import Image3 from '../../assets/Banner img3.png';
import Image4 from '../../assets/Banner img4.jpeg';
import './Banner.css';

const Banner = () => {
    const images = [
        { Url: Image1 },
        { Url: Image2 },
        { Url: Image3 },
        { Url: Image4 }
    ];

    const slideProperties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: (i) => (<li className="indicator" key={i}></li>),
        arrows: true
    };

    return (
        <div className="custom-slide-container">
            <Slide {...slideProperties}>
                {images.map((image, index) => (
                    <div key={index} className="each-slide">
                        <img src={image.Url} alt={`image${index + 1}`} />
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Banner;
