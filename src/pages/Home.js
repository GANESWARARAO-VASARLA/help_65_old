import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import {Link} from 'react-router-dom';
import Vac from '../assets/img/vac.png';
import Demand from '../assets/img/demand.png';
import Appoint from '../assets/img/appoint.png';
import "./index.css"

function Home(){
    return(
        <div>
            
            <Navigation />
           

            <main>

            <section>
            <div className="jumbotron d-flex flex-column justify-content-center">
        <div className="container ">
          <h1>Excellent Health Care</h1>
          <p>Wellbeing = We Treat + God&apos;s Healing 👨‍⚕️👩‍⚕️</p>
          <div>
              <Link to="/schedule-on-demand-appointment" className="btn btn-primary one btn-lg">65+ years old Sunitha Sharma</Link>
              <Link to="/vaccination-appointment" className="btn btn-primary two btn-lg">OVER ALL HEALTH CONDITION</Link>
          
          </div>
        </div>
      </div>
      </section>

      <section className="section-one">
          <div className="container">
              <h1 className="text-center">Care when you need it, where you need it.</h1>
              <div className="row">
                  <div className="col-md-4 section-one-content">
                      <div className="card--img">
                      <img src={Vac}  width="95px"  alt="vaccine" />
                      </div>
                      <div className="card-content">
                      <h2>Vaccine Information</h2>
                      <p>Find the latest information about the COVID-19 vaccine, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                    <Link to="/covid-updates" className="btn btn-primary">COVID-19 Vaccine Updates</Link>
                    </div>
                  </div>

                  <div className="col-md-4 section-one-content">
                      <div className="card--img">
                      <img src={Demand} width="95px" alt="vaccine" />
                      </div>
                      <div className="card-content">
                      <h2>On Demand Service</h2>
                      <p>Get quick care without an appointment for common conditions and everyday health concerns with WeCare On Demand.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia </p>
                    <Link to="/" className="btn btn-primary">Get Care Today</Link>
                    </div>
                  </div>

                  <div className="col-md-4 section-one-content">
                      <div className="card--img">
                      <img src={Appoint} width="95px" alt="vaccine" />
                      </div>
                      <div className="card-content">
                      <h2>Appointments</h2>
                      <p>For primary care & selected specialties, see provider schedules & make your own appointment online, even if you’re new.</p>
                    <Link to="/schedule-on-demand-appointment" className="btn btn-primary">Schedule Online</Link>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* <section className="section-two">
        <div className="container">
        <h1 className="text-center">WeCare at a Glance</h1>
            <div className="row">
                <div className="col-md-4">
                    

                </div>
            </div>
        </div>
      </section> */}
            </main>
            <Footer />
        </div>
    );
}

export default Home;