import React, { Component } from 'react';
import About from './AboutSection';
import Service from './ServiceSection';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const HomeSlider = dynamic(
  () => import('../Elements/Slider/HomeSliderSection'),
  {
    ssr: false,
  }
);

const Brand = dynamic(() => import('../Elements/Brand/BrandSection'), {
  ssr: false,
});

class HomeMain extends Component {
  render() {
    return (
      <main>
        {/* slider-start */}
        <HomeSlider />
        {/* slider-end */}

        {/* service-start */}
        <Service />
        {/* service-end */}

        {/* cta-start */}
        {/* <Cta /> */}
        {/* cta-end */}

        {/* about-start */}
        <About />
        {/* about-end */}

        {/* project-start */}
        {/* <Project /> */}
        {/* project-end */}

        {/* video-start */}
        {/* <Video /> */}
        {/* video-end */}

        {/* brand-start */}
        <Brand />
        {/* brand-end */}
      </main>
    );
  }
}

export default HomeMain;
