import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BurgerMenus from './BurgerMenus';
import HeaderSearch from './HeaderSearch';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState('');
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener('scroll', sticky);
    return () => {
      window.removeEventListener('scroll', sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector('.transparent-header');
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add('sticky-header')
      : header.classList.remove('sticky-header');
  };
  // Sticky Menu Area End

  return (
    <React.Fragment>
      <Head>
        <title>Kimox – Digital Agency React, NextJs Template</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <div className='transparent-header'>
          <div className='container-fluid'>
            <div className='header-space'>
              <div className='row align-items-center'>
                <div className='col-xl-2 col-8'>
                  <div className='header-logo'>
                    <Link href='/'>
                      <a>
                        <Image
                          src='/assets/img/logo/logo.svg'
                          className='img-fluid'
                          alt='logo-img'
                          width={80}
                          height={80}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='col-xl-6 col-4'>
                  <div className='main-menu d-xl-block d-none'>
                    <nav id='mobile-menu'>
                      <ul>
                        <li className='menu-item-has-children'>
                          {/* <Link href='/'>
                            <a>Accueil</a>
                          </Link> */}
                          {/* <ul className='sub-menu'>
                            <li>
                              <Link href='/'>
                                <a>Home Style 1</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/home-2'>
                                <a>Home Style 2</a>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        <li>
                          {/* <Link href='/about'>
                            <a>A propos</a>
                          </Link> */}
                        </li>
                        <li className='menu-item-has-children'>
                          {/* <Link href='/service'>
                            <a>Services</a>
                          </Link> */}
                          {/* <ul className='sub-menu'>
                            <li>
                              <Link href='/service'>
                                <a>Services</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/service-details'>
                                <a>Services Details</a>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className='menu-item-has-children'>
                          {/* <Link href='/project'>
                            <a>Réalisations</a>
                          </Link> */}
                          {/* <ul className='sub-menu'>
                            <li>
                              <Link href='/project'>
                                <a>Projects</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/project-details'>
                                <a>Projects Details</a>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        <li className='menu-item-has-children'>
                          {/* <Link href='/blog'>
                            <a>Blog</a>
                          </Link> */}
                          {/* <ul className='sub-menu'>
                            <li>
                              <Link href='/blog'>
                                <a>Blog</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/blog-details'>
                                <a>Blog Details</a>
                              </Link>
                            </li>
                          </ul> */}
                        </li>
                        {/* <li>
                          <a href='#'>Pages</a>
                          <ul className='sub-menu'>
                            <li>
                              <Link href='/pricing'>
                                <a>Pricing</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/faq'>
                                <a>Faq</a>
                              </Link>
                            </li>
                            <li>
                              <Link href='/contact'>
                                <a>Contact</a>
                              </Link>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                  {/* <div className='side-menu-icon d-xl-none text-end'>
                    <span
                      className='search-btn nav-search search-trigger'
                      onClick={() => {
                        setSearchOpen(!searchOpen);
                      }}>
                      <i className='fas fa-search'></i>
                    </span>
                    <button
                      className='side-toggle'
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}>
                      <i className='far fa-bars'></i>
                    </button>
                  </div> */}
                </div>
                <div className='col-xl-4 d-none d-xl-block'>
                  <div className='header-right text-end'>
                    <div className='header-social'>
                      {/* <a href='#' target='_blank'>
                        <i className='fab fa-twitter'></i>
                      </a> */}
                      {/* <a href='#' target='_blank'>
                        <i className='fab fa-facebook-f'></i>
                      </a> */}
                      {/* <a href='#' target='_blank'>
                        <i className='fab fa-pinterest-p'></i>
                      </a> */}
                      {/* <a href='#' target='_blank'>
                        <i className='fab fa-instagram'></i>
                      </a> */}
                    </div>
                    {/* <div className='header-search'>
                      <span
                        className='search-btn nav-search search-trigger'
                        onClick={() => {
                          setSearchOpen(!searchOpen);
                        }}>
                        <i className='fas fa-search'></i>
                      </span>
                    </div> */}

                    <div className='header-btn'>
                      <Link href='https://calendly.com/mc-production/30min'>
                        <a
                          target={'_blank'}
                          className='theme-btn theme-btn-small'>
                          Prenons Rendez-vous
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
