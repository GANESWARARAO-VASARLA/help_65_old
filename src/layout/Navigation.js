import React, { useState } from 'react';
import TopInfo from '../components/TopInfo';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import MobileMenu from '../components/MobileMenu';

function Navigation (){

  const[openMenu, setOpenMenu] = useState(false);
  return(
<div>
<TopInfo />

<nav className="top-nav navbar navbar-expand-lg navbar-light top-bar">
    <div className="container">
<ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <i className="fal fa-map-marker-alt pr-1"></i> HYDERABAD, MADHURANAGAR , +91 95503349..
      </li>
      <li className="nav-item">
      <i className="fal fa-clock pr-1 pl-3"></i>Mon - sun 24HOURS Services
      </li>
    </ul>
    {/* <ul className="navbar-nav">
    <li className="nav-item"><Link to="#"> <i className="fab fa-facebook-f"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i className="fab fa-twitter"></i></Link></li>
    <li className="nav-item"><Link to="#"> <i className="fab fa-linkedin-in"></i></Link></li>
    <li className="nav-item"><Link to="/appointment" className="btn btn-success">Get An Appointment</Link></li>
    </ul> */}
    <Link to="/schedule-on-demand-appointment" className="btn btn-success">Get An Information</Link>
    </div>
</nav>



<nav className="main-nav navbar navbar-expand-lg navbar-light" style={{backgroundColor: "transparent"}}>
    <div className="container">
  <Link to="/" className="navbar-brand"><img src={Logo} width="200" alt="Logo" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse1 navbar-collapse1" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item active">
        <Link to="/doctors" className="nav-link">SELF-CARE TEAM</Link>
      </li>
      
      <li className="nav-item dropdown">
        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Conditions & Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/conditions-and-services/anaesthesia" className="dropdown-item">anaesthesia</Link>
          <Link to="/conditions-and-services/cardiology" className="dropdown-item">cardiology</Link>
          <Link to="/" className="dropdown-item">dentistry</Link>
          <Link to="/" className="dropdown-item">dermatology</Link>
          <Link to="/" className="dropdown-item">dietetics</Link>
          <Link to="/" className="dropdown-item">ear, nose, and throat</Link>
          <Link to="/" className="dropdown-item">endoscopy</Link>
          <Link to="/" className="dropdown-item">family practice clinic</Link>
          <Link to="/" className="dropdown-item">haematology / sickle cell</Link>
          <Link to="/" className="dropdown-item">internal medicine</Link>
          <Link to="/" className="dropdown-item">neurosurgery</Link>
          <Link to="/" className="dropdown-item">obstetrics / gynaecology</Link>
          <Link to="/" className="dropdown-item">ophthalmology</Link>
          <Link to="/" className="dropdown-item">orthopaedics</Link>
          <Link to="/" className="dropdown-item">paediatrics</Link>
          <Link to="/" className="dropdown-item">physiotherapy</Link>
          <Link to="/" className="dropdown-item">plastic surgery</Link>
          <Link to="/" className="dropdown-item">surgery (general)</Link>
          <Link to="/" className="dropdown-item">urology</Link>
          </div>
      </li>
      <li className="nav-item">
        <Link to="/about-us" className="nav-link">About Us</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

<nav className="mobile-nav">
<div className="container d-flex align-items-center justify-content-between">
  
  <Link to="/" className="navbar-brand"><img src={Logo} width="180" alt="Logo" /></Link>

  {openMenu ? 
  <Link to="#" onClick={()=>{setOpenMenu(false)}}><i className="fal fa-times"></i></Link>:
  <Link to="#" onClick={()=>{setOpenMenu(true)}}><i className="fas fa-bars bars"></i></Link>
}
 
  </div>
</nav>
{openMenu ? <MobileMenu /> : '' }

</div>
  );
  }

export default Navigation;

