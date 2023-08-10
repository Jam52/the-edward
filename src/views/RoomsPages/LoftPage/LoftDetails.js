import React from 'react';
import DetailList from '../DetailList/DetailList';
import Dropdown from '../../../components/Dropdown/Dropdown';
import styles from '../RoomsPage.module.scss';
import loftDetailsData from './loftDetailsData.json';

function LoftDetails() {
  return (
    <div className={`bg--dark inner-section flow-vert ${styles.details}`}>
      <div className={`split ${styles.details_overview}`}>
        <div className="flow-vert">
          <h2>Loft Details</h2>
          <p>
            600sqft <br />2 suites, 1 bath, 1 dining and living space.
          </p>
        </div>
        <p>
          You will have the Loft all to yourself, with a private entrance and
          patio behind the house’s garage. You will also have access to The
          Edward grounds.
        </p>
      </div>
      <Dropdown header="Suites" color="white">
        <div className="split">
          <div></div>
          <div className={styles.details_split}>
            <div className="flow-vert-sm">
              <h3>Master Suite</h3>
              <div className={styles.details_icons}>
                <img
                  src={process.env.PUBLIC_URL + '/images/detailIcons/Bed.svg'}
                  alt=""
                />
                <p>1 Queen Bed</p>
              </div>
              <div className={styles.details_icons}>
                <img
                  src={process.env.PUBLIC_URL + '/images/detailIcons/Bath.svg'}
                  alt=""
                />
                <p>Shared 3 piece Ensuite</p>
              </div>
            </div>
            <div className="flow-vert-sm">
              <h3>Children's Suite</h3>
              <div className={styles.details_icons}>
                <img
                  src={process.env.PUBLIC_URL + '/images/detailIcons/Bed.svg'}
                  alt=""
                />
                <p>1 twin bed</p>
              </div>
              <div className={styles.details_icons}>
                <img
                  src={process.env.PUBLIC_URL + '/images/detailIcons/Bed.svg'}
                  alt=""
                />
                <p>1 twin cot</p>
              </div>
              <p className={styles.details_terms}>
                * Pop-up crib available upon request
              </p>
            </div>
          </div>
        </div>
      </Dropdown>
      <Dropdown header="Pantry" color="white">
        <div className="split">
          <div></div>
          <DetailList details={loftDetailsData.breakfast} />
        </div>
      </Dropdown>
      <Dropdown header="Amenities" color="white">
        <div className="split">
          <div></div>
          <DetailList details={loftDetailsData.amenities} />
        </div>
      </Dropdown>
      <Dropdown header="House Rules" color="white">
        <div className="split">
          <div></div>
          <DetailList details={loftDetailsData.houseRules} />
        </div>
      </Dropdown>
      <Dropdown header="Cancellations" color="white">
        <div className="split">
          <div></div>
          <div className="split">
            <p>
              Information regarding our cancellation policy can be found on Airbnb once travel dates have been selected.
            </p>
            <div></div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default LoftDetails;
