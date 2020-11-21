import React from 'react';
import ImageContainer from '../../components/ImageContainer/ImageContainer';

const LandingPage = () => {
  return (
    <div data-testid="component-landing-page">
      <ImageContainer
        landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
        portraitSrc={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
        alt="Yellow house under bright blue sky"
      />
    </div>
  );
};

export default LandingPage;
