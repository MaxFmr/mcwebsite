import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'
import Link from 'next/link';

class TeamSliderTwo extends Component {

    render() {

        return (
            <div className="team-active swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            480: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: true
                        }}
                    >
                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-1.jpg" className="img-fluid" alt="team-img" />
                                    <div className="kteam-img-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>sarah albert</a></Link></h4>
                                    <span className="uppercase">designer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-2.jpg" className="img-fluid" alt="team-img" />
                                    <div className="kteam-img-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>Mike Hardson</a></Link></h4>
                                    <span className="uppercase">developer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-3.jpg" className="img-fluid" alt="team-img" />
                                    <div className="kteam-img-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>Christine eve</a></Link></h4>
                                    <span className="uppercase">Programmer</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-4.jpg" className="img-fluid" alt="team-img" />
                                    <div className="kteam-img-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>John Smith</a></Link></h4>
                                    <span className="uppercase">artist</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="kteam swiper-slide mb-30">
                                <div className="kteam-img">
                                    <img src="assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img" />
                                    <div className="kteam-img-social">
                                        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>melinda albert</a></Link></h4>
                                    <span className="uppercase">writter</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        );
    }
}

export default TeamSliderTwo;