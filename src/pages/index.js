import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import Head from 'next/head';

class Index extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>MC Production</title>

          <link rel='shortcut icon' href='/assets/img/logo/favicon.png' />
          <meta
            name='google-site-verification'
            content='YvTIft4XGDXwZTAbiex5wwvb7V5t3fA9V3bL5VIOF10'
          />
          <meta
            name='description'
            content='MC Production digitale, agence digitale et video, de développement de sites et applications web, production audiovisuelle, e-learning, sound design, mixage audio, musique à la demande, photos en Hauts-de-France basée à Cambrai et Valenciennes. Notre expertise, vos besoins, vos solutions. Mettons en valeur votre métier.'
          />
        </Head>
        <Header />
        <HomeMain />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
