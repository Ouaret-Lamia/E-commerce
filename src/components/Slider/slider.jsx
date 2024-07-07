import './slider.css'
import React from 'react';
import Slider from 'react-slick';


const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };


  return (
    <div className='myDiv'>
      <Slider {...settings}>
        <div className='slideDiv'>
          <div className='slide'>
              <div className="circle"></div>
              <div className="intro">
                  <h1>SUMMER SALE</h1>
                  <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p><br />
                  <button>Shop Now</button>
              </div>          
          </div>
        </div>
        <div className='slideDiv'>
          <div className='slide'>
              <div className="circle"></div>
              <div className="intro">
                  <h1>AUTUMN COLLECTION</h1>
                  <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p><br />
                  <button>Shop Now</button>
              </div>          
          </div>
        </div>
        <div className='slideDiv'>
          <div className='slide'>
              <div className="circle"></div>
              <div className="intro">
                  <h1>LOUNGEWEAR LOVE</h1>
                  <p>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p><br />
                  <button>Shop Now</button>
              </div>          
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;