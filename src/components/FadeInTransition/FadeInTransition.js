import React, { useEffect, useState } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import styles from './FadeInTransition.module.scss';

const FadeInTransition = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [isHidden, setHidden] = useState(styles.hidden);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setHidden([styles.hidden, styles.fade_in].join(' '));
      }, props.delay);
    }
  });

  return (
    <div ref={ref} className={isHidden} delay={props.delay}>
      {props.children}
    </div>
  );
};

export default FadeInTransition;
