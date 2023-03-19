import React from 'react';
import Logo from '../assets/img/logo-w.png';
import {Link} from 'react-router-dom';
const date = new Date();
const dateObj = {
    startYear:date.getFullYear() - 10,
    currentYear: date.getFullYear()
}

function Footer (){
    return(
<footer>
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                   <img src={Logo} width="180px" alt="" />
                   <p className="mt-3">We do care about your wellbeing.Our wellbeing equation is Wellbeing = We Treat + God&apos;s healing.</p>
                </div>

                <div className="col-md-2 links">
                    <h2>SERVICES</h2>
                    <ul>
                    <li><Link to="/">orthopaedics</Link></li>
          <li><Link to="/">paediatrics</Link></li>
          <li><Link to="/">neurosurgery</Link></li>
          <li><Link to="/">internal medicine</Link></li>
          <li><Link to="/">dietetics</Link></li>
          <li><Link to="/">endoscopy</Link></li>
          <li><Link to="/">endoscopy</Link></li>
          <li><Link to="/">family practice clinic</Link></li>
                    
                    </ul>

                </div>

                <div className="col-md-2 links">
                    <ul>
                        <h2>SERVICES</h2>
                        <li><Link to="/conditions-and-services/anaesthesia" >anaesthesia</Link></li>
                        <li><Link to="/conditions-and-services/cardiology" >cardiology</Link></li>
                        <li><Link to="#" >dentistry</Link></li>
                        <li><Link to="#" >dermatology</Link></li>
                        <li><Link to="#" >dietetics</Link></li>
                        <li><Link to="#" >plastic surgery</Link></li>
                        <li><Link to="#" >surgery (general)</Link></li>
                        <li><Link to="#" >urology</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 links">
                    <ul>
                        <h2>STAY CONNECTED</h2>
                        <li>C123 Paradise, Accra, GH</li>
                        <li><Link to="#">+233 247 924 225</Link></li>

                        {/* <li>C123 Paradise, Accra, GH</li>
                        <li><a href="#">+233 247 924 225</a></li>

                        <li>C123 Paradise, Accra, GH</li>
                        <li><a href="#">+233 247 924 225</a></li> */}

                    </ul>
                </div>
            </div>

            <div className="copyright mt-5">
                
                <p>@{dateObj.startYear}-{dateObj.currentYear}<Link to="/"> WeCare Hospital </Link>. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>
    );
}


export default Footer;