import React, { useState } from 'react'
import AuthenImg from '../../assets/Authenticity.png';
import BestQualImg from '../../assets/Best_quality_img.png';
import './OurBest.css';
const OurBest = () => {
    const[read1,setRead1]=useState(false);
    const[read2,setRead2]=useState(false);
    const handleReadMore1=()=>{
        setRead1(!read1);
    }
    const handleReadMore2=()=>{
setRead2(!read2);
    }
  return (
    <div className='Our_Best_section'>
      <div><p className='Our_Best_heading'>OurBest</p></div>
      <div className='best_boxes'>
        <div className='box1'>
            <div className='box1_img_section'>
                <img src={AuthenImg} alt='image' className='Authen_img'/>
            </div>
            <div className='box1_text_section'>
                <div className='Authen_text_box'>
                    <p className='Auth_heading'>Authenticity</p>
                    {!read1 && <p>Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apa...<span onClick={handleReadMore1} className='read-text'>Read more</span></p>}
                    {read1 && <p>Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence of this beloved beverage in the comfort of your own home. <span onClick={handleReadMore1} className='read-text'>Read less</span></p>}
                </div>
            </div>
        </div>
        <div className='box2'>
            <div className='box2_img_section'>
                <img src={BestQualImg} alt='image' className='Quality_img'/>
            </div>
            <div className='box2_text_section'>
                <div className='Quality_text_box'>
                    <p className='Qual_heading'>Quality</p>
                    {!read2 && <p>Produces by Boiled Milk, Crafted with care and precision, our rose milk embodies the perfect balance...<span onClick={handleReadMore2} className='read-text'>Read more</span></p>}
                    {read2 && <p>Produces by Boiled Milk, Crafted with care and precision, our rose milk embodies the perfect balance of creamy richness and delicate floral notes, ensuring each sip is a decadent delight of unmatched quality <span onClick={handleReadMore2} className='read-text'>Read less</span></p>}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurBest
