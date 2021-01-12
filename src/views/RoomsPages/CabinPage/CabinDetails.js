import React from 'react';
import DetailList from '../DetailList/DetailList';
import Dropdown from '../../../components/Dropdown/Dropdown';
import styles from '../RoomsPage.module.scss';
import cabinDetailsData from './cabinDetailsData.json';

function CabinDetails() {
  return (
    <div
      className={`bg--dark inner-section control-flow-vert ${styles.details}`}
    >
      <div className="split">
        <div className="flow-vert">
          <h2>Cabin Details</h2>
          <p>
            3000 sqft <br />3 Suites. 3 Baths. 2 Living Spaces.
          </p>
        </div>
        <p>
          You will have the house all to yourself. You will also have access to
          The Edward grounds and the outdoor fire pit, private patios and
          private entrance
        </p>
      </div>
      <Dropdown header="Suites" color="white">
        <div className="split">
          <div></div>
          <div className={styles.details_split}>
            <div className="flow-vert-sm">
              <h3>Master Suite</h3>
              <div>
                <p>1 King Bed</p>
              </div>
              <div>
                <p>5-piece Ensuite</p>
              </div>
              <div>
                <p>Patio Access</p>
              </div>
            </div>
            <div className="flow-vert-sm">
              <h3>East Suite</h3>
              <div>
                <p>1 Queen Bed</p>
              </div>
              <div>
                <p>5-piece Ensuite</p>
              </div>
              <p className={styles.details_terms}>
                * 2 Pop-up cribs are available upon request
              </p>
            </div>
            <div className="flow-vert-sm">
              <h3>West Suite</h3>
              <div>
                <p>1 Queen Bed</p>
              </div>
              <div>
                <p>1 Twin Pull-out</p>
              </div>
              <div>
                <p>5-piece Ensuite</p>
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
      <Dropdown header="Breakfasts" color="white">
        <div className="split">
          <div></div>
          <DetailList details={cabinDetailsData.breakfast} />
        </div>
      </Dropdown>
      <Dropdown header="Amenities" color="white">
        <div className="split">
          <div></div>
          <DetailList details={cabinDetailsData.amenities} />
        </div>
      </Dropdown>
      <Dropdown header="House Rules" color="white">
        <div className="split">
          <div></div>
          <DetailList details={cabinDetailsData.houseRules} />
        </div>
      </Dropdown>
      <Dropdown header="Cancellations" color="white">
        <div className="split">
          <div></div>
          <div className="split">
            <p>
              For full refund: <strong>1 week notice</strong>
              <br />
              <br /> Should your plans change, a written cancellation email is
              required a minimum of 7 days prior to your booking date.
            </p>
            <div></div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default CabinDetails;
