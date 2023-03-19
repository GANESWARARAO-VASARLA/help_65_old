import React, {useState} from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const bigBoder = {
  borderTop:'3px solid #ECECEC',
}
const callNow = {
  fontWeight:'700',
  color:'#02123A'
};



function OnDemandAppointment(){
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
 
  Axios.post(`https://hospital.isaacboakyemanu.me/api/receive-hospital-appointment`, formData
  // Axios.post(`http://localhost:3001/api/receive-hospital-appointment`, formData
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
    }, 3000);
    
   
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
              <h2>Here are some general tips that may help Sunita Sharma live a healthier and better life</h2><hr />
              <p>{`After you're  read this below information.`}</p>
              <p>You can also calling <span style={callNow}>(+91) 955033494.</span>.</p>

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
        <h2>Health-Related decisions</h2>
        <div>
        <h1 className="text-left">Maintain a healthy diet</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679228206/7e7d00b357ac960c733c5dd516dc0eaa_bszp1a.jpg" className="img-fluid"/>
      <p className='small-size'> A healthy diet is crucial to maintaining good health, especially as we age. Encourage Sunita Sharma to consume a balanced diet with plenty of fruits, vegetables, whole grains, lean protein, and healthy fats.
      </p>
       </div>
       <div>
        <h1 className="text-left">Stay active</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679228567/older-people-exercise-active_srjahe.jpg" className="img-fluid" />
      <p className='small-size'> Regular physical activity can help Sunita Sharma maintain muscle mass, strength, and flexibility, which is essential for healthy aging. Encourage her to engage in physical activity that she enjoys, such as walking, yoga, or swimming.
      </p>
       </div>
       <div>
        <h1 className="text-left">Get enough rest</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679228773/sleep_k1bxux.png" className='img-fluid' />
      <p className='small-size'>  Adequate rest is essential for good health, especially as we age. Encourage Sunita Sharma to get at least 7-8 hours of sleep per night and establish a consistent sleep schedule.
      </p>
       </div>
       <Link to="/vaccination-appointment" className="btn btn-primary btn-block mb-5">
      More
      </Link>
      </div> {/* end personal col */}
      <div className="col-sm-6">
      <h2></h2><hr />
<div className="form-group">
<div>
        <h1 className="text-left">Manage stress</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679228949/2020-1-27-Helping-Seniors-Manage-Stress_vnbdb4.jpg" className='img-fluid' />
      <p className='small-size'> Chronic stress can have a negative impact on health and well-being. Encourage Sunita Sharma to engage in stress-reducing activities such as meditation, deep breathing, or spending time with loved ones.
      </p>
       </div>
          </div>

          <div>
        <h1 className="text-left">Stay socially active</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679229281/Elderly_group_of_women_t715_usaeid.jpg" className="img-fluid" />
      <p className='small-size'>Maintaining social connections can help prevent loneliness and isolation, which can have negative health consequences. Encourage Sunita Sharma to stay socially active by participating in community activities or spending time with friends and family.
      </p>
       </div>

       <div>
        <h1 className="text-left">Regular health check-ups</h1>
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679230600/grandma-having-regular-health-check-up-home-86656796_d0pxx5.jpg" className="img-fluid" />
      <p className='small-size'>Encourage Sunita Sharma to schedule regular health check-ups with her doctor to monitor her health and detect any potential health issues early on.

Take medications as prescribed: If Sunita Sharma is taking medications, it is crucial to take them as prescribed by her doctor to manage any health conditions properly.

Remember that small changes can make a big difference in improving health and well-being. Encourage Sunita Sharma to make gradual changes that she can maintain over time, and seek the advice of a medical professional before making any significant lifestyle changes.





Regenerate response
      </p>
       </div>
      </div> {/* end contact col */}
</div>  {/* end first row */}

    <div className="row">
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

          
   <div className="col-sm-6">
      <h2>Details</h2><hr />
       <div className="form-group">
       <label className="text-left">For queries</label>
        <textarea id="reason_for_appointment" placeholder="Reason for appointment" onChange={handleChange} required className="form-control rounded-0" rows="5"></textarea>
       </div>
      </div>
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

export default OnDemandAppointment;