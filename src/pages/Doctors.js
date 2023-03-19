import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import {Link} from 'react-router-dom';
import PagesHero from '../components/PagesHero';

import doc1 from '../assets/img/doc1.webp';
import doc2 from '../assets/img/doc2.webp';
import doc3 from '../assets/img/doc3.webp';

function Doctors(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="Our Doctors" subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam."
            bgClass="doctors-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc1} alt="" className="img-fluid" title="" loading="lazy" />
                   <p className="doctor-name">Prince  K. Boamah, MD</p>
                   <p className="doctor-specialty">Heart Care</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>

                    <div className="col-md-4 mb-3">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc2} alt="" title="" className="img-fluid" loading="lazy" />
                   <p className="doctor-name">Emmanuel Eyram  Kokuvi, MD</p>
                   <p className="doctor-specialty">Orthopedic Care</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>

                    <div className="col-md-4">
                    <div className="card shadow-sm">
                <div className="card-body">
                    <img src={doc3} alt="" title="" className="img-fluid" loading="lazy" />
                   <p className="doctor-name">Yvonne Agemang-Boateng, MD</p>
                   <p className="doctor-specialty">General Practioner</p>
                   <Link to="/" className="btn btn-primary btn-block">Read More</Link>
                </div>
                </div>
                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Doctors;