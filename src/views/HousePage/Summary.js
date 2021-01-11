import React from 'react';
import styles from './Summary.module.scss';
import FadeInTransition from '../../components/FadeInTransition/FadeInTransition';

const Summary = () => {
  return (
    <div>
      <FadeInTransition>
        <div className="split">
          <div className="flow-vert">
            <h2 className={styles.header}>
              Welcome to your home away from home.
            </h2>
            <div>
              <h3>Max Occupancy</h3>
              <ul>
                <li>6 Adults</li>
                <li>3 Children under 10</li>
              </ul>
            </div>
          </div>
          <div className={`flow-vert ${styles.description}`}>
            <p className={styles.para}>
              With 24 ft high atrium ceilings and three grand suites this light
              filled two- storey house is ideal for families or a group of
              friends. Much love, creativity and attention to detail has gone
              into curating a space that balances classic and contemporary
              design and that our guests can call home.
            </p>
            <button className="internal-link">See House Details</button>
          </div>
        </div>
      </FadeInTransition>
    </div>
  );
};

export default Summary;
