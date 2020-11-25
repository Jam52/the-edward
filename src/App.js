import React from 'react';
import LandingPage from './views/LandingPage/LandingPage';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page}>
      <div data-testid="component-app" className={styles.page_container}>
        <Header />
        <LandingPage />
      </div>
    </div>
  );
}

export default App;

// import React from 'react';
// import HousePage from './views/HousePage/HousePage';
// import styles from './App.module.scss';

// function App() {
//   return (
//     <div className={styles.page}>
//       <div data-testid="component-app" className={styles.page_container}>
//         <HousePage />
//       </div>
//     </div>
//   );
// }

// export default App;
