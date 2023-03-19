import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootsrap-overrides.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import{BrowserRouter as Router,Switch} from 'react-router-dom';
import Doctors from './pages/Doctors';
import CovidUpdate from './pages/CovidUpdate';
import Services from './pages/Services';
import VacAppointment from './pages/VacAppointment';
import OnDemandAppointment from './pages/OnDemandAppointment';

function App() {
  return (
        <div>
    <Router>

      <Switch>
      <Home exact path="/" />
      <About path="/about-us" component={About} />
      <Contact path="/contact-us" component={Contact} />
      <Doctors path="/doctors" component={Doctors} />
      <CovidUpdate path="/covid-updates" component={CovidUpdate} />
      <Services path="/conditions-and-services/anaesthesia" component={Services} />
      <Services path="/conditions-and-services/cardiology" component={Services} />
      <VacAppointment path="/vaccination-appointment" component={VacAppointment} />
      <OnDemandAppointment path="/schedule-on-demand-appointment" component={OnDemandAppointment} />
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
