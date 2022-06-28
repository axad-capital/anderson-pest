import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import NavComp from './components/NavComp/NavComp';
import Footer from './components/Footer/Footer'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import ThankYou from './pages/ThankYou/ThankYou';
import ClickToCall from './pages/ClickToCall/ClickToCall';

function App() {
  return (
    <div className="App">
       <Router>
         {/* <NavComp /> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/goog' element={<HomePage />} />
          <Route exact path='/fb' element={<HomePage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/thank-you' element={<ThankYou />} />
          <Route exact path='/call-for-quote' element={<ClickToCall />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
