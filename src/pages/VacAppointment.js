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
              <h2>LEAD A HAPPY LIFE....!</h2><hr />
              <p>{`Putting people first in managing their health: new WHO guideline on self-care interventions`}</p>
              <p>You can also make a clarification also <span style={callNow}>(+91) 955033494..</span>.</p>

          {posted ?
              <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Yipee!</strong> Your appointment has been scheduled.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>: ''}
  <form onSubmit={handleSubmit} className="vac-appointment-form mt-5">
    <div className="row">
      <div className="col-sm-12">
        <h2>Health-Related decisions</h2><hr />
        <img src="https://res.cloudinary.com/dwydkvzl6/image/upload/v1679220034/hero-img.jpg_kgybiw.jpg" className="img-fluid"/>
        <h1>About self-care</h1>
        <p> Self-care has been practiced by people worldwide for thousands of years. The ability of individuals, families and communities to promote health, prevent disease, maintain health, and to cope with illness and disability with or without the support of a health worker, is nothing new. But new products, information and technologies are changing – and have the potential to change – how people access healthcare, as well as how they care for themselves and others.

Such products, information and technologies for self-care – or self-care interventions – can include high-quality medicines, devices, tools to test and diagnose, and digital tools. They can be provided within or outside of a health-care facility, with or without the support of a health worker.

The COVID-19 pandemic shone a light on the importance of self-care, and the importance of self-care interventions to help maintain essential health services to people.  Even when there are major disruptions to the national health systems, high-quality and evidence-based self-care interventions can provide an important alternative if the usual health facility- or health worker-based services become unavailable or restricted.

“With these new guidelines it is our sincere hope that the essential role people play in managing their own health is further acknowledged and promoted through a supportive health system,” says Manjulaa Narasimhan, scientist at WHO Department of Sexual and Reproductive Health and Research including the special joint-UN programme HRP.

“Whether it’s for their experience of pregnancy and childbirth; managing fertility intentions, preventing sexually transmitted infections; enjoying better sexual health of themselves or their partner, or self-monitoring their blood pressure, access to quality self-care interventions can help meet people’s many health needs and rights.”

New recommendations and good practice statements
The new guidelines consolidate both new and existing recommendations on self-care interventions which can help to meet the health needs for people worldwide – and particularly in settings with the fewest resources and least infrastructure.

New recommendations include:

Over-the counter pharmacy provision of pregnancy self-tests;

pharmacy access to emergency contraception (or “the morning-after pill”)

availability of lubrication to help individuals improve their sexual health and pleasure;

Self-management of iron and folic acid supplementation being made available as an option during pre-pregnancy, pregnancy and postnatal periods

self-monitoring of blood glucose during pregnancy;

self-monitoring of blood pressure during pregnancy;

The new recommendations are accompanied by a series of good practice statements, which cover the following areas: 1) Human rights, gender equality and equity; (2) Financing and economic considerations; (3) Training needs of health workers; (4) Population-specific implementation considerations; (5) Digital health interventions; and (6) Environmental considerations.</p>
      </div> {/* end personal col */}

      <div className="col-sm-6">
      <h2>Preference</h2><hr />
<div className="form-group">
  <div className="row">
<div className="col-sm-6 mb-2">
<label className="text-left">checking Date</label>
      <input type="date" className="form-control rounded-0" id="preferred_date" onChange={handleChange} required />
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
       Back
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