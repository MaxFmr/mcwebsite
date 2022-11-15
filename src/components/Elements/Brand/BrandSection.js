import React, { Component } from 'react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css/bundle';

class Brand extends Component {
  render() {
    return (
      <div className='mb-100'>
        <div className='ml-100'>
          <h2>Nos réalisations</h2>
        </div>

        <div className='d-flex justify-content-center mt-20 '>
          <div
            className='brand-wrapper swiper-slides wow fadeInUp mr-30'
            data-wow-delay='.6s'
            data-swiper-autoplay='10000'>
            <a href='https://www.peintureshazardsamin.com'>
              <Image
                src='https://www.peintureshazardsamin.com/images/logo/logo.svg'
                className='img-fluid'
                alt='img'
                height={150}
                width={150}
              />
            </a>
          </div>

          <div
            className='brand-wrapper swiper-slides wow fadeInUp ml-30'
            data-wow-delay='.9s'
            data-swiper-autoplay='10000'>
            <a href='https://www.latabledelabruyere.com'>
              <Image
                src='https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1623367681/htxxichf25nfag2swo7o.png'
                className='img-fluid'
                alt='img'
                height={150}
                width={150}
                objectFit='cover'
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
