import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
  render() {
    return (
      <section className='about-area pt-120 pb-70 fix'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='kabout-img mb-50 mr-70'
                data-aos='zoom-out-up'
                data-swiper-autoplay='10000'>
                <div className='kabout-img-shape'></div>
                <img
                  src='assets/img/about/about-img-1.jpg'
                  className='img-fluid z-index'
                  alt='about-img'
                />
                <div className='kabout-img-small'>
                  <img
                    src='assets/img/about/about-img-2.jpg'
                    className='img-fluid'
                    alt='about-img'
                  />
                  <div className='kabout-img-small-icon play_btn'>
                    <span>
                      <img
                        src='assets/img/icon/about-icon.png'
                        className='img-fluid'
                        alt='about-icon'
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='kabout mb-50'
                data-aos='zoom-out-down'
                data-swiper-autoplay='10000'>
                <div className='section-title-wrapper mb-45'>
                  {/* <h5 className="section-subtitle mb-20">get to know us</h5> */}
                  <h2 className='section-title mb-35'>
                    Notre Expertise digitale <br />
                    au service de vos besoins
                  </h2>
                  <p>Notre crédo : "Mettons votre métier en valeur."</p>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='kabout-service mb-30'>
                      <h4 className='kabout-service-title'>Proximité</h4>
                      <p>Nous sommes basés à Cambrai et Valenciennes.</p>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='kabout-service mb-30'>
                      <h4 className='kabout-service-title'>
                        Apprendre de vous
                      </h4>
                      <p>C'est votre besoin qui nous guide.</p>
                    </div>
                  </div>
                </div>
                <ul className='mt-20 mb-55'>
                  <li>
                    <i className='fal fa-check'></i> Conseil et pédagogie
                  </li>
                  <li>
                    <i className='fal fa-check'></i> Observation des tendances
                  </li>
                  <li>
                    <i className='fal fa-check'></i>Adaptabilité et suivi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
