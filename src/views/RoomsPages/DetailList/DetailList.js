import React from 'react';
import styles from './DetailList.module.scss';

const DetailList = (props) => {
  const details = props.details.map((item, index) => {
    return (
      <div className={styles.detail} key={index}>
        <img
          src={process.env.PUBLIC_URL + `/images/detailIcons/${item.url}`}
          alt=""
          className={styles.icons}
        />
        <p>{item.text}</p>
      </div>
    );
  });
  return <div className={styles.container}>{details}</div>;
};

export default DetailList;
