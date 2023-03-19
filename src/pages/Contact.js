import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import PagesHero from '../components/PagesHero';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="Contact Us" subText="My name is GANESWARARAO" bgClass="contact-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-8">
                    <p>WeCare Hostpital&apos;s is open 24/7 all year round, weekends and holidays inclusive. You can reach us through the following means: </p>
                    <p><strong>Phone</strong><br /><a href="tel:+91955033....">+91 9550334...</a></p>
<p><a href="tel:+919550334...">+9195503349..</a> <strong>(Ambulance Hotline)</strong></p>
<p><strong>Email</strong><br /></p>
<p><a href="mailto:g95503349..@gmail.com">g95503349..@gamil.com</a></p>
<p><strong>Physical Address</strong><br />hyderabad, <br />MADHURANAGAR metro,<br />elite enclave</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;