import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class HomeSlider extends Component {
  render() {
    return (
      <section className='slider-area fix position-relative pb-50'>
        <div
          className='slide-bg'
          style={{
            // backgroundImage: `url(${'assets/img/slider/slider-1.jpg'})`,
            backgroundColor: 'black',
          }}></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='kslider z-index'>
                <div className='ml-50'>
                  <h5
                    className='kslider--subtitle mb-25'
                    data-animation='fadeInUp'
                    data-delay='0.3s'>
                    Maxime et Clément
                  </h5>
                </div>

                <h2
                  className='kslider--title mb-40 ml-50'
                  data-animation='fadeInUp'
                  data-delay='0.5s'>
                  MC <br />
                  Production digitale
                </h2>
                <div className='ml-100'>
                  <h3 className='text-white'>
                    L'expertise digitale et audiovisuelle en Hauts-de-France.{' '}
                    <br />
                    Une équipe passionnée au service de vos projets.
                  </h3>
                </div>

                <div className='header-btn'>
                  <Link href='https://calendly.com/mc-production/30min'>
                    <a
                      target={'_blank'}
                      className='theme-btn theme-btn-small ml-100 mt-50'>
                      Prenons Rendez-vous
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='slide-shape shape-1'>
          <img
            src='assets/img/slider/slider-shape-1.png'
            className='img-fluid'
            alt='shape-img'
          />
        </div>
        <div className='slide-shape shape-2'>
          <img
            src='assets/img/slider/slider-shape-2.png'
            className='img-fluid'
            alt='shape-img'
          />
        </div>

        <div className='slider-paginations slide-dots'></div>
      </section>
    );
  }
}

export default HomeSlider;
