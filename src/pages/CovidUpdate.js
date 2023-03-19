import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import {Link} from 'react-router-dom';
import PagesHero from '../components/PagesHero';
import LiveCovidUpdates from '../components/LiveCovidUpdates';

const styleBook = {
    fontSize:'1rem'
}
function CovidUpdate(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="Covid Updates" subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed." bgClass="covid-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-9">
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. </p>

        <LiveCovidUpdates />

                    </div>

                    <div className="col-md-3">
                    <div className="card shadow btn-primary">
  <div className="card-body vaccine-stats">
      <h2>842,521</h2>
  <p>Vaccines Administered<br/>As at 20 APRIL 2021, 7:00PM</p>
  </div>
</div>
<Link to="/schedule-covid19" className="btn btn-primary one btn-lg mt-3" style={styleBook}>Schedule For COVID-19 Vanccination</Link>
                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default CovidUpdate;