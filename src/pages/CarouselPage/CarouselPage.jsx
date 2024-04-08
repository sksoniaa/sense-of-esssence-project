import './CarouselPage.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lightblue from '/src/assets/lightblue.jpg';
import guccibloom from '/src/assets/gucci-bloom.jpg'
import gucciflora from '/src/assets/gucci-flora.webp'
import linterdit from '/src/assets/linterdit.webp'
import neroliamara from '/src/assets/van-cleef-neroli-amara.jpg'
import ysllibre from '/src/assets/ysl-libre.webp'
import { Link } from 'react-router-dom';


function CarouselPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} style={{marginTop: '12vh'}}>
      <Carousel.Item className='carousel-item'>
        <Link to='/perfume/linterdit'>
          <img src={linterdit} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src={lightblue} alt="" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src={guccibloom} alt="" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src={gucciflora} alt="" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src={neroliamara} alt="" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src={ysllibre} alt="" />
      </Carousel.Item>
    </Carousel>
      </>
  );
}

export default CarouselPage;