import React from 'react';
import {Link} from 'react-router-dom';

const closeTopInfo = () => {
// console.log('this is', this);
// alert('ok')
const alert = document.querySelector('.alert');
const nav= document.querySelector('nav.navbar');
alert.classList.toggle('hide');
nav.style.marginTop='0px'
}

function TopInfo(){
    return(
        <div>
            <div className="fixed-top top-info">
            <div className="alert alert-primary alert-dismissible" role="alert">
                <div className="container">
  <strong>COVID-19:</strong> <u><Link to="/vaccination-appointment">OVER ALL HEALTH CONDITION</Link></u> or <u><Link to="/covid-updates">view our vaccine updates,</Link></u> safety measures, patient and visitor policies and latest information.
  </div>
  <button type="button" onClick={closeTopInfo} className="close"  aria-label="Close">
    <span aria-hidden="true" >&times;</span>
  </button>
</div>
        </div>
        </div>
    );
}

export default TopInfo;