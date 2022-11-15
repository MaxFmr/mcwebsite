import React from 'react';
import FooterBottom from './FooterBottom';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${'assets/img/bg/footer-bg.jpg'})` }}
      className='pt-95 position-relative'>
      <div
        className='common-shape-wrapper wow slideInRight animated'
        data-wow-delay='0ms'
        data-wow-duration='1500ms'>
        <div
          className='common-shape-inner wow slideInRight animated'
          data-wow-delay='0ms'
          data-wow-duration='1500ms'></div>
      </div>
      <div className='footer-area pb-60'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <div className='widget mb-30'>
                <div className='footer-logo mb-25'>
                  <Link href='/'>
                    <a>
                      <Image
                        src='/assets/img/logo/logo.svg'
                        className='img-fluid'
                        alt='MC production logo'
                        height={100}
                        width={100}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6'>
              <div className='widget widget-contact mb-30'>
                <h4 className='widget-title mb-35'>Contact</h4>
                <ul>
                  <li className='pb-10'>
                    28 rue des feutriers <br />
                    59400 Cambrai{' '}
                  </li>
                  <li>
                    <img
                      src='assets/img/icon/footer-icon-1.png'
                      className='img-fluid'
                      alt='icon-img'
                    />
                    <a href='mailto:needhelp@company.com'>
                      maxime.kerlidou@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
