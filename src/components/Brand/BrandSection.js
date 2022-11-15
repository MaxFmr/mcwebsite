import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css/bundle';

class Brand extends Component {
  render() {
    return (
      <div className='brand-area pt-100 pb-100'>
        <div className='container'>
          <div className='brand-active swiper-container'>
            <div className='swiper-wrapper align-items-center'>
              <div className=''>
                <p className='h1'>Nos réalisations</p>
              </div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplaydisableoninteraction={'false'}
                breakpoints={{
                  550: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: true,
                }}>
                <SwiperSlide>
                  <div
                    className='brand-wrapper swiper-slides wow fadeInUp'
                    data-wow-delay='.3s'
                    data-swiper-autoplay='10000'>
                    <a href='https://www.latabledelabruyere.com'>
                      <Image
                        src='https://res.cloudinary.com/amenitiz/image/upload/w_400,dpr_auto,f_auto,q_auto:best/v1623367681/htxxichf25nfag2swo7o.png'
                        className='img-fluid'
                        alt='img'
                        height={200}
                        width={250}
                        objectFit='cover'
                      />
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className='brand-wrapper swiper-slides wow fadeInUp'
                    data-wow-delay='.6s'
                    data-swiper-autoplay='10000'>
                    <a href='https://www.peintureshazardsamin.com'>
                      <Image
                        src='https://www.peintureshazardsamin.com/images/logo/logo.svg'
                        className='img-fluid'
                        alt='img'
                        height={200}
                        width={200}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
