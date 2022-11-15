import React, { Component } from 'react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css/bundle';

class Brand extends Component {
  render() {
    return (
      <div className='brand-area pt-100 pb-100 ml-200'>
        <h2>Nos réalisations</h2>

        <div className='container'>
          <div className='brand-active swiper-container'>
            <div className='swiper-wrapper align-items-center ml-200'>
              <div
                className='brand-wrapper swiper-slides wow fadeInUp'
                data-wow-delay='.6s'
                data-swiper-autoplay='10000'>
                <a href='https://www.www.peintureshazardsamin.com'>
                  <Image
                    src='https://www.peintureshazardsamin.com/images/logo/logo.svg'
                    className='img-fluid'
                    alt='img'
                    height={200}
                    width={200}
                  />
                </a>
              </div>

              <div
                className='brand-wrapper swiper-slides wow fadeInUp ml-200'
                data-wow-delay='.9s'
                data-swiper-autoplay='10000'>
                <a href='#'>
                  <Image
                    src='https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1623367681/htxxichf25nfag2swo7o.png'
                    className='img-fluid'
                    alt='img'
                    height={200}
                    width={200}
                    objectFit='cover'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
