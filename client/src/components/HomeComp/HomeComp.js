import React from 'react';
import './homeComp.css';
import PestHeader from './pest-header.jpg';
import CarpAnt from './carp-ant.png';
import Ants from './ants.png';
import Mouse from './mouse.png';
import Bird from './bird.png';
import BedBug from './bedbug.png';
import Tick from './tick.png';
import KillBugs from './kill-bugs.jpg';

const HomeComp = () => {

    function handleFormSubmit() {
        let firstName = document.getElementById('first').value
        let lastName = document.getElementById('last').value
        let phone = document.getElementById('phone').value
        let email = document.getElementById('email').value
        let zip = document.getElementById('zip').value
        console.log(firstName, lastName, phone, email, zip);
    }

    return (
        <div>
            <div className="header">
                <div className='header-info'>
                    <h1 className='header-title'>Affordable And Reliable Pest Control Services</h1>
                    <br />
                    <p className='header-text'>We guarantee our pest control methods are the most thorough you have ever experienced! Our customized plans are designed specifically depending upon what kind of pest you are currently dealing with, to get them out of your home and keep them out year-round.</p>
                </div>
                <div className='header-img-container'>
                    <img className='header-img' src={PestHeader} alt="pest header" />
                </div>
            </div>

            <div className="phone">
                <h1>Get A Free Estimate Now</h1>
                <div className='line'></div>
                <h2>Call Our Toll Free Number</h2>
                <a className='number' href='tel:555-555-5555'><h1>555-555-5555</h1></a>
            </div>
            <br />

            <div id="our-services">
                <h1 className='our-services-title'>Our Pest Control Services</h1>
                <div className='services-container'>
                    <div className='services'>
                        <br />
                        <h5>Wood Destroying Insects</h5>
                        <img className='service-img' src={CarpAnt} alt=" carp ant" />
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Common Household Pests</h5>
                        <img className='service-img' src={Ants} alt="ants" />
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
                    <h1>Servicing Homes and Businesses to Prevent, Repel and Eleminate Any and All Pests to Give you Peace of Mind</h1>
                    <br />
                    <p>We are licensed professionals using the very best and safest bug sprays and repellents with proven efficiency. We value each and every customer and have the experience you can trust.</p>
                    <h3>Call Us Today</h3>
                    <a href='tel:555-555-5555'><h1>555-555-5555</h1></a>
                    <br />
                </div>
                <br />
                <div>
                    <img className='servicing-img' src={KillBugs} alt="bug spray" />
                </div>
            </div>

            {/* <div className='axad-form'>
                <h1 className='axad-form-title'>- Free Listing -</h1>
                <div className="line2"></div>
                <br />
                <iframe title='form' src="https://forms.monday.com/forms/embed/b046ae4b7e6c1329190c7614ce28b296?r=use1" width="80%" height="1800" style={{ maxWidth: '1000px', border: '0', boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)' }}></iframe>
            </div> */}
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
            </div>
            <br />
            <br />
        </div>
    )
}

export default HomeComp