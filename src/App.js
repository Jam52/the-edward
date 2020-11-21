import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import styles from './App.module.scss';

function App() {
  return (
    <div data-testid="component-app" className={styles.pageContainer}>
      <LandingPage />
    </div>
  );
}

export default App;
