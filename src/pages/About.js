import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import PagesHero from '../components/PagesHero';

function About(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="About Us" subText="thank you my name is Ganeswararao my native is amalapuram but i'm currently staying in hyderabad" bgClass="about-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-10">
                    <p> i completed my graduation in 2018 with specialization of Electrical and electronics engineering at bvce engineering college odalrevu, about my family myself  my father he is a former my mother she is a homemaker my brother currently studying btech. i  had been doing job from 2019 to 2022jun they are all electrical companies and I learned technologies like Python ,HTML, CSS, javascripts,react.js with the help of  CCBP programming and  i developed  foodmuch demo project using technologies html,css and  i have been developing moviesapp project using  technology reactjs. </p>
<p>Remember that small changes can make a big difference in improving health and well-being. Encourage Sunita Sharma to make gradual changes that she can maintain over time, and seek the advice of a medical professional before making any significant lifestyle changes.</p>

                    </div>
                </div>

            </div>
            </main>
            <Footer />
        </div>
    );
}

export default About;