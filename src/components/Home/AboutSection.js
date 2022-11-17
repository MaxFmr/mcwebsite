import React, { Component } from 'react';
import Image from 'next/image';
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
                <Image
                  src='/assets/img/about/1.jpg'
                  className='img-fluid z-index'
                  alt='about-img'
                  height={500}
                  width={500}
                  objectFit='cover'
                />
                <div className='kabout-img-small'>
                  <Image
                    src='/assets/img/about/2.webp'
                    className='img-fluid'
                    alt='about-img'
                    height={300}
                    width={300}
                  />
                  <div className='kabout-img-small-icon play_btn '>
                    <span>
                      <img
                        src='assets/img/icon/about-icon.png'
                        className='img-fluid'
                        alt='about-icon'
                        objectFit='cover'
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
                    Notre Expertise <br />
                    au service de vos besoins
                  </h2>
                  <p>
                    MC production, c'est la rencontre entre deux passionnés du
                    web, de l'image et du son animés par le désire de mettre
                    leurs compétences à la disposition des entreprises et des
                    particuliers.
                  </p>
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
                  <p>Nous nous adaptons à votre réalité et votre budget.</p>
                  <li>
                    <i className='fal fa-check'></i> Observation des tendances
                  </li>
                  <p>
                    Nous utilisons les technologies les plus modernes (ReactJS,
                    noCode, lowCode etc.).
                  </p>
                  <li>
                    <i className='fal fa-check'></i>Adaptabilité et suivi
                  </li>
                  <p>
                    Soyons partenaires et pratiquons ensemble la fertilisation
                    croisée !
                  </p>
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
