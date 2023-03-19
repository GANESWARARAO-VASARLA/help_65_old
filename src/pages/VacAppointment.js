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
        <h2>PERSONAL INFORMATION</h2><hr />
        <div className="form-group">
    <label className="text-left">Firstname</label>
      <input type="text" id="firstname" onChange={handleChange}  className="form-control rounded-0" required placeholder="Firstname" />
  </div>

<div className="form-group">
    <label className="text-left">Lastname</label>
      <input type="text" id="lastname" onChange={handleChange} className="form-control rounded-0"  placeholder="Lastname" />
          </div>

          <div className="form-group">
    <label className="text-left">Gender</label>
      <select className="form-control rounded-0" id="gender" onChange={handleChange} required>
        <option value="">Please make a selection</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
          </div>


          <div className="form-group">
          <label className="text-left">Date of Bith</label>
  <div className="row">
    <div className="col-sm-4">
      <select className="form-control rounded-0 mb-2" id="dob_day" onChange={handleChange} required>
        <option value="">Day</option>
        <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
      </select>
      </div>

      <div className="col-sm-4 mb-2">
      <select className="form-control rounded-0" id="dob_month" onChange={handleChange} required>
        <option value="">Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      </div>

      <div className="col-sm-4 mb-3">
      <select className="form-control rounded-0" id="dob_year" onChange={handleChange} required>
        <option value="">Year</option>
        <option value="2030">2030</option>
          <option value="2029">2029</option>
          <option value="2028">2028</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
          <option value="1970">1970</option>
          <option value="1969">1969</option>
          <option value="1968">1968</option>
          <option value="1967">1967</option>
          <option value="1966">1966</option>
          <option value="1965">1965</option>
          <option value="1964">1964</option>
          <option value="1963">1963</option>
          <option value="1962">1962</option>
          <option value="1961">1961</option>
          <option value="1960">1960</option>
          <option value="1959">1959</option>
          <option value="1958">1958</option>
          <option value="1957">1957</option>
          <option value="1956">1956</option>
          <option value="1955">1955</option>
          <option value="1954">1954</option>
          <option value="1953">1953</option>
          <option value="1952">1952</option>
          <option value="1951">1951</option>
          <option value="1950">1950</option>
          <option value="1949">1949</option>
          <option value="1948">1948</option>
          <option value="1947">1947</option>
          <option value="1946">1946</option>
          <option value="1945">1945</option>
          <option value="1944">1944</option>
          <option value="1943">1943</option>
          <option value="1942">1942</option>
          <option value="1941">1941</option>
          <option value="1940">1940</option>
          <option value="1939">1939</option>
          <option value="1938">1938</option>
          <option value="1937">1937</option>
          <option value="1936">1936</option>
          <option value="1935">1935</option>
          <option value="1934">1934</option>
          <option value="1933">1933</option>
          <option value="1932">1932</option>
          <option value="1931">1931</option>
          <option value="1930">1930</option>
          <option value="1929">1929</option>
          <option value="1928">1928</option>
          <option value="1927">1927</option>
          <option value="1926">1926</option>
          <option value="1925">1925</option>
          <option value="1924">1924</option>
          <option value="1923">1923</option>
          <option value="1922">1922</option>
          <option value="1921">1921</option>
          <option value="1920">1920</option>
          <option value="1919">1919</option>
          <option value="1918">1918</option>
          <option value="1917">1917</option>
          <option value="1916">1916</option>
          <option value="1915">1915</option>
          <option value="1914">1914</option>
          <option value="1913">1913</option>
          <option value="1912">1912</option>
          <option value="1911">1911</option>
          <option value="1910">1910</option>
          <option value="1909">1909</option>
          <option value="1908">1908</option>
          <option value="1907">1907</option>
          <option value="1906">1906</option>
          <option value="1905">1905</option>
          <option value="1904">1904</option>
          <option value="1903">1903</option>
          <option value="1902">1902</option>
          <option value="1901">1901</option>
          <option value="1900">1900</option>
      </select>
      </div>
       
          </div>
          </div>


      </div> {/* end personal col */}
      <div className="col-sm-6">
      <h2>CONTACT INFORMATION</h2><hr />
<div className="form-group">
    <label className="text-left">Phone Number</label>
      <input type="number" className="form-control rounded-0" id="phone_number"  onChange={handleChange} maxLength='10' placeholder="ex. 0241234567" />
         
          </div>

          <div className="form-group">
    <label className="text-left">Email Address</label>
      <input type="email" className="form-control rounded-0" id="email_address" required onChange={handleChange}  placeholder="ex. dsaa@gmail.com" />
          
          </div>

          <div className="form-group">
    <label className="text-left">Location</label>
      <input type="text" className="form-control rounded-0" id="address" onChange={handleChange} placeholder="ex. East Legon" />
          
          </div>
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