import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HousePage from './views/HousePage/HousePage';
import styles from './App.module.scss';
import { Route, Switch } from 'react-router-dom';
import Calendar from './components/BookingBar/Calendar/Calendar';

function App() {
  return (
    <div className={styles.page}>
      <Calendar />
      <div className="skip">
        <a href="#content">Skip to Main Content</a>
      </div>
      <div data-testid="component-app" className={styles.page_container}>
        <Header />
        <Switch>
          <Route path="/house" component={HousePage} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
