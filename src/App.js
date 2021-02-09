import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HousePage from './views/RoomsPages/HousePage/HousePage';
import LoftPage from './views/RoomsPages/LoftPage/LoftPage';
import CabinPage from './views/RoomsPages/CabinPage/CabinPage';
// import TempSplash from './views/TempSplash/TempSplash';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <div className="skip">
        <a href="#content">Skip to Main Content</a>
      </div>
      <div data-testid="component-app" className="page_container">
        <Header />
        <Switch>
          <Route path="/house" component={HousePage} />
          <Route path="/cabin" component={CabinPage} />
          <Route path="/Loft" component={LoftPage} />
          <Route path="/" component={LandingPage} />
          {/* <Route path="/" component={TempSplash} /> */}
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
