import React, { Component } from 'react';
import Link from 'next/link';

class Service extends Component {
  render() {
    return (
      <section
        className='service-area pt-120 pb-130 bg-black'
        style={{
          backgroundImage: `url(${'assets/img/service/1.png'})`,
        }}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-xxl-5 col-lg-6'>
              <div
                className='kservice-text mb-50'
                data-aos='fade-right'
                data-aos-duration='1000'>
                {/* <h5 className='kservice-text-subtitle mb-15'>
                  All Categories List
                </h5> */}
                <div className='bg-dark'>
                  <h2 className='kservice-text-title mb-40'>Nos services</h2>
                </div>

                <p className='mb-45 text-secondary'>
                  A vos côtés pour donner vie à vos projets digitaux.
                </p>
                <div className='kservice-author'>
                  {/* <div className='kservice-author-img mr-30'>
                    <img
                      src='assets/img/service/service-author.png'
                      className='img-fluid'
                      alt='author-img'
                    />
                  </div> */}
                  {/* <div className='kservice-author-sign'>
                    <span>Jessica Brown</span>
                  </div> */}
                </div>
              </div>
            </div>
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
    );
  }
}

export default Service;
