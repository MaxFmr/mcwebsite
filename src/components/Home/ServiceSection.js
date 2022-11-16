import React, { Component } from 'react';
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';

const photoPath = '/assets/img/service/1.png';

class Service extends Component {
  render() {
    return (
      <ParallaxBanner
        className='parallax'
        layers={[
          {
            image: photoPath,
            speed: -5,
            opacity: [0.72, 0.72],
          },
        ]}>
        <section className='service-area pt-120 pb-130 bg-black '>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-xxl-5 col-lg-6'></div>
              <div className='col-xxl-6 col-lg-6'>
                <div
                  className='row custom-mar-20'
                  data-aos='fade-down'
                  data-aos-duration='1000'>
                  <div className='col-sm-6 custom-pad-20'>
                    <div className='kservice text-center mb-20'>
                      <div className='kservice-icon'>
                        <i className='flaticon-analytics'></i>
                      </div>
                      <div className='kservice-content'>
                        {/* <Link href='/services'> */}
                        <a>
                          <h5 className='kservice-content-title'>
                            Développement <br />
                            Web
                            <br /> et mobile
                          </h5>
                        </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 custom-pad-20'>
                    <div className='kservice text-center mb-20'>
                      <div className='kservice-icon'>
                        <i className='flaticon-marketing'></i>
                      </div>
                      <div className='kservice-content'>
                        {/* <Link href='/services'> */}
                        <a>
                          <h5 className='kservice-content-title'>
                            UX/UI
                            <br />
                            <span> Design </span>
                            <br />
                            d'interfaces
                          </h5>
                        </a>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 custom-pad-20'>
                    <div className='kservice text-center mb-20'>
                      <div className='kservice-icon'>
                        <i className='flaticon-profile'></i>
                      </div>
                      <div className='kservice-content'>
                        <h5 className='kservice-content-title'>
                          {/* <Link href='/services'> */}
                          <a>
                            Image/Son <br />
                            Production Audiovisuelle
                          </a>
                          {/* </Link> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6 custom-pad-20'>
                    <div className='kservice text-center mb-20'>
                      <div className='kservice-icon'>
                        <i className='flaticon-website'></i>
                      </div>
                      <div className='kservice-content'>
                        <h5 className='kservice-content-title'>
                          {/* <Link href='/services'> */}
                          <a>
                            <span>Pédagogie </span>
                            <br />
                            Formation <br />
                            E-learning
                          </a>
                          {/* </Link> */}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>
    );
  }
}

export default Service;
