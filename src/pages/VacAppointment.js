import React, {useState} from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import Axios from 'axios';
const bigBoder = {
  borderTop:'3px solid #ECECEC',
}
const callNow = {
  fontWeight:'700',
  color:'#02123A'
};



function Appointment(){
  const [formData, UpdateFormData] = useState('');
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);

const handleChange = (e) =>{
UpdateFormData({
  ...formData,
  [e.target.id]: e.target.value.trim()
})
}

const handleSubmit = (e) =>{
  e.preventDefault();
  setPosting(true);
  console.log(e);
 
  Axios.post(`https://hospital.isaacboakyemanu.me/api/receive-vaccine-appointment`, formData
  )
  .then(response => {
    console.log(response);
    e.target.reset();
    window.scroll({
      top: 300, 
      left: 0, 
      behavior: 'smooth'
    });
    setPosted(true);
    setPosting(false);
    setTimeout(function(){
      setPosted(false);
    }, 5000);
    
   
  })
  .catch(error =>{
    console.log(error)
  })
}
    return(
        <div>
            <Navigation /> 

            <section style={bigBoder}>
             <div className="container mt-5">
              <h2>Schedule your Vaccine Appointment</h2><hr />
              <p>{`After you've sent this request, we'll call you within one or two business days to help you make an appointment.`}</p>
              <p>You can also make an appointment by calling <span style={callNow}>(233) 24 792 4225</span>.</p>

          {posted ?
              <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Yipee!</strong> Your appointment has been scheduled.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>: ''}
  <form onSubmit={handleSubmit} className="vac-appointment-form mt-5">
    <div className="row">
      <div className="col-sm-6">
        <h2>Health-Related decisions</h2><hr />
      </div> {/* end personal col */}
      <div className="col-sm-6">
      <h2>CONTACT INFORMATION</h2><hr />

      </div>


      <div className="col-sm-6">
      <h2>Preference</h2><hr />
<div className="form-group">
  <div className="row">
<div className="col-sm-6 mb-2">
<label className="text-left">Preferred Date</label>
      <input type="date" className="form-control rounded-0" id="preferred_date" onChange={handleChange} required />
</div>
 
    
  <div className="col-sm-6">
<label className="text-left">Preferred Time</label>
      <input type="time" className="form-control rounded-0" id="preferred_time" onChange={handleChange}   required/>
</div>
          </div>
          </div>
          </div>{/* end of Preference col */}
    </div>
  
  <div className="form-group">
    <div className="col-sm-3">
    {posting ? 
    <div>
    <div className="loader"></div>
    <button type="button" disabled className="btn btn-primary btn-block mb-5">
    Please wait...
    </button>
    </div>
     : 
    <button type="submit" className="btn btn-primary btn-block mb-5">
      Submit 
      </button>}
    </div>
  </div>

</form>
</div>





</section>
<Footer />
        </div>

    );
}

export default Appointment;