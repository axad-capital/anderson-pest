import React from 'react';
import './homeComp.css';
// import PestHeader from './pest-header.jpg';
import CarpAnt from './ant.jpg';
import Fly from './fly.jpg'
import Mouse from './rat.jpg';
import Bird from './bird.jpg';
import BedBug from './bedbug.jpg';
import Tick from './tick.jpg';
import Pest from '../NavComp/pest.png'

const HomeComp = () => {

    function handleFormSubmit() {
        let firstName = document.getElementById('first').value
        let lastName = document.getElementById('last').value
        let phone = document.getElementById('phone').value
        let email = document.getElementById('email').value
        let zip = document.getElementById('zip').value
        console.log(firstName, lastName, phone, email, zip);
        window.location.href = '/thank-you'
    }

    return (
        <div>
            <div className="header">
                <div className='call-mobile'>
                    <h4>Call For a Quote</h4>
                    <a href='tel:(877) 412-0488'><h2>(877) 412-0488</h2></a>
                </div>
                <div className='header-info'>
                    <h1 className='header-title'>Affordable And Reliable Pest Control Services</h1>
                    <br />
                    <p className='header-text'>For more than 90 years, we've protected what's most valuable to you, with local specialists who go above and beyond to fix your problem and services designed to make your life easier, 365 days a year.</p>
                </div>
                <div className='header-img-container'>
                    {/* <img className='header-img' src={PestHeader} alt="pest header" /> */}
                    <div className='pest-form'>
                        <h2 className='pest-form-title'>Get An Estimate</h2>
                        <div className='line'></div>
                        <label htmlFor="first">First Name</label>
                        <input className='pest-form-inputs' type="text" name="first" id="first" placeholder='First Name' />

                        <label htmlFor="last">Last Name</label>
                        <input className='pest-form-inputs' type="text" name="last" id="last" placeholder='Last Name' />

                        <label htmlFor="phone">Phone Number</label>
                        <input className='pest-form-inputs' type="number" name="phone" id="phone" placeholder='Phone Number' />

                        <label htmlFor="email">Email Address</label>
                        <input className='pest-form-inputs' type="email" name="email" id="email" placeholder='Email Address' />

                        <label htmlFor="zip">Zipcode</label>
                        <input className='pest-form-inputs' type="number" name="zip" id="zip" placeholder='Zipcode' />
                        <br />
                        <button className='form-btn' onClick={handleFormSubmit}>Submit</button>
                        <p className='permission'>By clicking "Submit", I provide my express written consent via electronic signature authorizing Anderson Pest Control Pros and one or more pest control specialists, their agents and marketing partners to contact me  and other related products and services to the number and email address I provided (including any wireless number). I further expressly consent to receive telemarketing emails, calls, text messages, pre-recorded messages, and artificial voice messages via an autodialed phone system, even if my telephone number is a mobile number that is currently listed on any state, federal or corporate “Do Not Call” list. I understand that my consent is not a condition of purchase of any goods or services and that standard message and data rates may apply.</p>
                    </div>
                </div>
            </div>

            <div className="phone">
                <h1>Get A Free Estimate Now</h1>
                {/* <div className='line'></div> */}
                <h2>Call Our Toll Free Number</h2>
                <a className='number' href='tel:(877) 412-0488'><h1>(877) 412-0488</h1></a>
            </div>
            <br />

            <div id="our-services">
                <h1 className='our-services-title'>Our Pest Control Services</h1>
                <p className='our-services-subtitle'>Include the capture or elimination of:</p>
                <div className='services-container'>
                    <div className='services'>
                        <br />
                        <h5>Wood Destroying Insects</h5>
                        <img className='service-img' src={CarpAnt} alt=" carp ant" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Common Household Pests</h5>
                        <img className='service-img' src={Fly} alt="ants" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Rodents and Animal Control</h5>
                        <img className='service-img' src={Mouse} alt="mouse" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Birds and Bats</h5>
                        <img className='service-img' src={Bird} alt="bird" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Bed Bugs</h5>
                        <img className='service-img' src={BedBug} alt="bed bug" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Fleas and Ticks</h5>
                        <img className='service-img' src={Tick} alt="tick" />
                    </div>
                </div>
            </div>

            <div className='servicing-container'>
                <div className='servicing-info'>
                    <h1>Our service works on your schedule 24/7 customer support online inspection service Scheduling text alerts when we are on-our-way</h1>
                    <br />
                    <p>We'll come back between treatments with no additional  fees to you. This followup service is free. We guarantee we'll resolve your pest control problem. Your time and pest problems are our first priority. Once you request an inspection, we respect your busy schedule and will set up an appointment as fast as possible.</p>
                    <br />
                    <h3>Call Us Today</h3>
                    <a href='tel:(877) 412-0488'><h1>(877) 412-0488</h1></a>
                    <br />
                </div>
                <br />
                {/* <div>
                    <img className='servicing-img' src='' alt="bug spray" />
                </div> */}
            </div>

            {/* <div className='axad-form'>
                <h1 className='axad-form-title'>- Free Listing -</h1>
                <div className="line2"></div>
                <br />
                <iframe title='form' src="https://forms.monday.com/forms/embed/b046ae4b7e6c1329190c7614ce28b296?r=use1" width="80%" height="1800" style={{ maxWidth: '1000px', border: '0', boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)' }}></iframe>
            </div> */}

            <div className='pest-man-bg'>
                <div className='pest-man-container'>
                    <div className='pest-man-img-container'>
                        <img className='pest-man' src={Pest} alt="pest" />
                    </div>
                    <div className='pest-man-info'>
                        <h4>Our experts will remove your pests for you! We fix several pest control nightmares - guaranteed - our expert team uses the most advanced high tech products on the market. Many of these products were invented in our own lab by staff members.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp