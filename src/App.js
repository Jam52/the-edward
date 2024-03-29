import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HousePage from './views/RoomsPages/HousePage/HousePage';
import LoftPage from './views/RoomsPages/LoftPage/LoftPage';
// import CabinPage from './views/RoomsPages/CabinPage/CabinPage';
import { Route, Switch } from 'react-router-dom';
import { fetchLodgifyAvailabilityData } from './services/lodgifyApi/lodgifyApi';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchLodgifyAvailabilityData(309275);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  });
  return (
    <div className="page">
      <div className="skip">
        <a href="#content">Skip to Main Content</a>
      </div>
      <div data-testid="component-app" className="page_container">
        <Header />
        <Switch>
          <Route path="/house" component={HousePage} />
          {/* <Route path="/cabin" component={CabinPage} /> */}
          <Route path="/Loft" component={LoftPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
