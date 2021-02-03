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

  const exicuteScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div data-testid="component-landing-page">
      <main id="content">
        <div className="container">
          <ImageContainer
            landscapeSrc={process.env.PUBLIC_URL + '/images/Homepage_Hero.jpg'}
            portraitSrc={
              process.env.PUBLIC_URL + '/images/Homepage_Hero_Portrait.jpg'
            }
            alt="Yellow house under bright blue sky"
          />
        </div>
        <section>
          <FadeInTransition>
            <div className={`container flow-vert explore`}>
              <p>What guests say about The Edward</p>
              <p className="explore__main">
                "Peaceful retreat from the busy city life; real luxury."
              </p>

              <a
                className="btn"
                href="https://www.google.com/maps/place/The+Edward+Bed+%26+Breakfast/@44.0317706,-77.0398409,17z/data=!3m1!4b1!4m10!3m9!1s0x0:0xdf06b6bf77c6a155!5m2!4m1!1i2!8m2!3d44.0317706!4d-77.0376522!9m1!1b1"
              >
                See all reviews
              </a>
            </div>
          </FadeInTransition>
        </section>

        <section className="section bg--light">
          <div className={`container control-flow-vert ${styles.overview}`}>
            <div className="split">
              <h2>Make your next visit to wine country memorable.</h2>
              <div className="flow-vert">
                <p>
                  Let us host you in one of our three beautiful and unique
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
              looking for a peaceful getaway"
              occupancy={['6 Adults', '3 Children']}
              rate="$675 per night"
              to="/house"
            />

            <OverviewCard
              refProp={loftRef}
              isFlipped
              img={process.env.PUBLIC_URL + '/images/Homepage_Loft.jpg'}
              altImg="Inside of loft, white walls, large bed"
              roomName="Loft"
              overview="Soft light through the skylights fill this sweet
              space with warmth and comfort. Our 2 suite
              Loft is the perfect spot for a couple or small
              families to come home to after a day of
              adventure in the County"
              occupancy={['2 Adults', '2 Children Under 10']}
              rate="$275 per night"
              to="/loft"
            />

            <section className={`flow-vert-lg inner-section bg--dark`}>
              <div className="split">
                <h2>The Concierge</h2>
                <p>
                  We are always here for you. If you have any questions, please
                  email us at{' '}
                  <a
                    className="internal-link internal-link--light"
                    href="mailto:welcome@theedward.ca"
                  >
                    welcome@theedward.ca.
                  </a>{' '}
                  Our customer experience hours of operation are 12:00pm -
                  5:00pm Monday - Friday.
                </p>
              </div>
              <Dropdown header="How to find us" color="white">
                <div className="split">
                  <div></div>
                  <div className="flow-vert">
                    <p>
                      Latitude: 44.031892 <br /> Longitude: -77.037088
                    </p>
                    <a
                      className="btn--small btn btn--dark"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/The+Edward+Bed+%26+Breakfast/@44.0317706,-77.0398409,17z/data=!3m1!4b1!4m8!3m7!1s0x89d7c8cb02908139:0xdf06b6bf77c6a155!5m2!4m1!1i2!8m2!3d44.0317706!4d-77.0376522"
                    >
                      Open in Maps
                    </a>
                    <p>
                      662 County Road 7 <br />
                      (also known as Lake on the Mountain Road)
                      <br />
                      Picton, ON,
                      <br />
                      K0K 2T0
                    </p>
                  </div>
                </div>
              </Dropdown>
              <Dropdown header="Arriving at The Edward" color="white">
                <div className="split">
                  <div></div>
                  <p style={{ maxWidth: '30ch' }}>
                    Check-in: <strong>4:00pm</strong>
                    <br />
                    Check-out: <strong>11:00am</strong>
                    <br />
                    Please note that we are currently offering contactless
                    check-in only. Upon booking we will provide with all of the
                    details for a seamless start to your vacation.
                  </p>
                </div>
              </Dropdown>
              <Dropdown header="Cancellations" color="white">
                <div className="split">
                  <div></div>
                  <p style={{ maxWidth: '30ch' }}>
                    For full refund: <strong>1 week notice</strong>
                    <br />
                    <br />
                    Should your plans change, a written cancellation email is
                    required a minimum of 7 days prior to your booking date.
                    <br />
                    <br />
                    Please note that due to COVID19, a small fee of 2.9% of the
                    total amount paid is non-refundable. It is charged and kept
                    by our payment system, Stripe.
                  </p>
                </div>
              </Dropdown>
            </section>
          </div>
        </section>

        <section className="explore-section">
          <FadeInTransition>
            <div className={`container flow-vert explore`}>
              <p>The Edward Traveler’s Guide</p>
              <p className="explore__main">
                How to best enjoy your time in Ontario’s gastronomical capital.
              </p>
              <p className="btn btn--disabled">Comming Soon</p>
            </div>
          </FadeInTransition>
        </section>
        <div className="container">
          <ImageContainer
            landscapeSrc={
              process.env.PUBLIC_URL + '/images/Homepage_Footer.jpg'
            }
            portraitSrc={
              process.env.PUBLIC_URL + '/images/Homepage_Footer_Portrait.jpg'
            }
            alt="Bike beneath a green tree on a sunny day"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
