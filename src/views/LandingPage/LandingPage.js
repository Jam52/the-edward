import React, { useEffect, useRef } from 'react';
import styles from './LandingPage.module.scss';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import OverviewCard from '../../components/OverviewCard/OverviewCard';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';
import Dropdown from '../../components/Dropdown/Dropdown';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const houseRef = useRef(null);
  const loftRef = useRef(null);
  const wholeHomeRef = useRef(null);

  const exicuteScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-testid="component-landing-page">
      <main id="content">
        <div className="container">
          <ImageContainer
            image={process.env.PUBLIC_URL + '/images/Homepage_Header.jpg'}
            alt="Yellow house under bright blue sky"
            possition="bottom"
          />
        </div>
        <section>
          <FadeInTransition>
            <div className={`container flow-vert explore`}>
              <p>What guests say about The Edward</p>
              <p className="explore__main">
                "Peaceful retreat from the busy city life; real luxury."
              </p>
            </div>
          </FadeInTransition>
        </section>

        <section className="section bg--light">
          <div className={`container control-flow-vert ${styles.overview}`}>
            <div className="split">
              <h2>Make your next visit to wine country memorable.</h2>
              <div className="flow-vert">
                <p>
                  Let us host you in one of our two beautiful and unique
                  accommodations. Treat yourself to a luxurious Prince Edward
                  County experience nestled in 75 acres of peaceful nature, away
                  from the hustle and bustle of city life.
                </p>
                <div className={`flow ${styles.scroll}`}>
                  <button
                    className="internal-link"
                    aria-label="scroll to house overview"
                    onClick={() => exicuteScrollTo(houseRef)}
                  >
                    House
                  </button>
                  <button
                    className="internal-link"
                    aria-label="scroll to loft overview"
                    onClick={() => exicuteScrollTo(loftRef)}
                  >
                    Loft
                  </button>
                  <button
                    className="internal-link"
                    aria-label="scroll to house overview"
                    onClick={() => exicuteScrollTo(wholeHomeRef)}
                  >
                    Whole Home
                  </button>
                </div>
              </div>
            </div>

            <OverviewCard
              refProp={houseRef}
              img={process.env.PUBLIC_URL + '/images/Homepage_House.jpg'}
              altImg="Inside of house, white walls dark wood"
              roomName="House"
              overview="With 24ft high atrium ceilings and three
              grand suites, this light filled two-story house
              is ideal for families or a group of friends
              looking for a peaceful getaway."
              occupancy={['6 Adults']}
              to="https://airbnb.com/h/theedwardhouse"
            />

            <OverviewCard
              refProp={loftRef}
              isFlipped
              img={process.env.PUBLIC_URL + '/images/Loft_Main.jpg'}
              altImg="Inside of loft, white walls, large bed"
              roomName="Loft"
              overview="Soft light through the skylights fills this sweet
              space with warmth and comfort. Our 2 suite
              Loft is the perfect spot for a couple or small
              families to come home to after a day of
              adventure in the County."
              occupancy={['2 Adults', '2 Children under 10']}
              to="https://airbnb.com/h/theedwardloft"
            />

            <OverviewCard
              refProp={wholeHomeRef}
              img={process.env.PUBLIC_URL + '/images/WholeHome.jpeg'}
              altImg="Large room with people sitting around a modern, beautiful coffee table."
              roomName="Whole Home"
              overview="This spectacular 5 Bedroom home is made up of the Main House & Loft, 
              both with their own separate entrances making this the perfect property for your group."
              occupancy={['10 Guests']}
              to="https://airbnb.com/h/theedwardwholehome"
            />
          </div>
        </section>

        <div className="container">
          <ImageContainer
            image={process.env.PUBLIC_URL + '/images/Outdoors.jpeg'}
            alt="Vintage bicycle under apple tree in bloom."
            possition="80% 60%"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
