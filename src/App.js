import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import HousePage from './views/HousePage/HousePage';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.page}>
      <div data-testid="component-app" className={styles.page_container}>
        <Switch>
          <Route
            path="/house"
            component={HousePage}
          />
          <Route
            path="/"
            component={LandingPage}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;