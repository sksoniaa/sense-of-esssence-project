import './CarouselPage.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import lightblue from '/src/assets/light-blue-1280x720.jpeg';
import guccibloom from '/src/assets/Gucci-Bloom-1280x720px-1.webp'
import gucciflora from '/src/assets/gucci-flora-1280x720.jpeg'
import linterdit from '/src/assets/linterdit-1280x720.jpeg'
import ysllibre from '/src/assets/ysl-libre-1280x720.jpeg'
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
          <img className='carousel-image' src={linterdit} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <Link to='/perfume/dolce-gabbana-light-blue' >
          <img className='carousel-image' src={lightblue} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <Link to='/perfume/gucci-bloom'>
          <img className='carousel-image' src={guccibloom} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <Link to='/perfume/gucci-flora'>
          <img className='carousel-image' src={gucciflora} alt="" />
        </Link>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <Link to='/perfume/yves-saint-laurent-libre'>
          <img className='carousel-image' src={ysllibre} alt="" />
        </Link>
      </Carousel.Item>
    </Carousel>
      </>
  );
}

export default CarouselPage;