import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import PagesHero from '../components/PagesHero';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="Contact Us" subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius." bgClass="contact-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-8">
                    <p>WeCare Hostpital&apos;s is open 24/7 all year round, weekends and holidays inclusive. You can reach us through the following means: </p>
                    <p><strong>Phone</strong><br /><a href="tel:+233307086490">+233-(0)30-123-4567</a></p>
<p><a href="tel:+233307086490">+233-(0)24-792-4225</a> <strong>(Ambulance Hotline)</strong></p>
<p><strong>Email</strong><br /></p>
<p><a href="mailto:info@wecarehostpitals">info@wecarehostpitals.com</a></p>
<p><strong>Physical Address</strong><br />C123 paradise Street, <br />Asylum Down Area,<br />Accra, Ghana</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;