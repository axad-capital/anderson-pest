import React from 'react';
import './homeComp.css';
import Pest from '../NavComp/pest.png'
import Logo from './Logo.jpg'

const HomeComp = () => {

    function handleFormSubmit() {
        let firstName = document.getElementById('first').value
        let lastName = document.getElementById('last').value
        let phone = document.getElementById('phone').value
        let address = document.getElementById('address').value
        let email = document.getElementById('email').value
        let zip = document.getElementById('zip').value
        console.log(firstName, lastName, phone, address, email, zip);
        // window.location.href = '/thank-you'

        // let pestFormData = {
        //     "promise": "W_YJX3Z",
        //     "apiId": "89B62A6801984C32AC644C0B0DC37A27",
        //     "apiPassword": "dfc39798",
        //     "productId": 44,
        //     "firstName": firstName,
        //     "lastName": lastName,
        //     "address": address,
        //     "zip": zip,
        //     "email": email,
        //     "cellPhone": phone,
        //     "jobType": "roofing"
        // }

        // let pestFormData = {
        //     "apiId": "89B62A6801984C32AC644C0B0DC37A27",
        //     "apiPassword": "dfc39798",
        //     "testMode": 1,
        //     "productId": 44,
        //     "price": 0.0,
        //     "firstName": "test",
        //     "lastName": "test",
        //     "address": "111 test drive",
        //     "zip": "07755",
        //     "email": "test@yahoo.com",
        //     "cellPhone": "7321115555",
        //     "jobType": "roofing"
        // }


        fetch('https://leads-inst227-client.phonexa.com/fullpost/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(pestFormData)
            body: {
                "apiId": "89B62A6801984C32AC644C0B0DC37A27",
                "apiPassword": "dfc39798",
                "testMode": 1,
                "productId": 44,
                "price": 0.0,
                "firstName": "test",
                "lastName": "test",
                "address": "111 test drive",
                "zip": "07755",
                "email": "test@yahoo.com",
                "cellPhone": "7321115555",
                "jobType": "roofing"
            }
        })
            .then(res => {
                // return res.json()
                return console.log({ note: "successful post" })
            })
        // .then(data => {
        //     console.log(data)
        // })
    }

    return (
        <div>
            <div className="pest-nav">
                <div>
                    <img className='pest-logo' src={Logo} alt="logo" />
                    <p className='logo-name'>Anderson Pest Pros</p>
                </div>
                <div className='call-container'>
                    <p className='nav-call'>Call For A Free Quote : </p>
                    <a className='nav-phone' href="tel:8556971105">(855) 697-1105</a>
                </div>
            </div>
            <div id='header' className="header">
                <div className='call-mobile'>
                    <h4>Call For a Quote</h4>
                    <a href='tel:8556971105'><h2>(855) 697-1105</h2></a>
                </div>
                <div className='header-info'>
                    <h1 className='header-title'>Affordable And Reliable Pest Control Services</h1>
                    <br />
                    <p className='header-text'>For more than 90 years, we've protected what's most valuable to you, with local specialists who go above and beyond to fix your problem and services designed to make your life easier, 365 days a year.</p>
                </div>
                <div className='header-img-container'>
                    <div className='pest-form'>
                        <h2 className='pest-form-title'>Get An Estimate</h2>
                        <div className='line'></div>
                        <div className="form-inputs-container">
                            <div>
                                <label htmlFor="first">First Name</label>
                                <input className='pest-form-inputs' type="text" name="first" id="first" placeholder='First Name' />
                            </div>

                            <div>
                                <label htmlFor="last">Last Name</label>
                                <input className='pest-form-inputs' type="text" name="last" id="last" placeholder='Last Name' />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input className='pest-form-inputs' type="number" name="phone" id="phone" placeholder='Phone Number' />
                            </div>

                            <div>
                                <label htmlFor="address">Street Address</label>
                                <input className='pest-form-inputs' type="text" name="address" id="address" placeholder='Street Address' />
                            </div>

                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input className='pest-form-inputs' type="email" name="email" id="email" placeholder='Email Address' />
                            </div>

                            <div>
                                <label htmlFor="zip">Zipcode</label>
                                <input className='pest-form-inputs' type="number" name="zip" id="zip" placeholder='Zipcode' />
                            </div>
                        </div>
                        <br />
                        <button className='form-btn' onClick={handleFormSubmit}>Submit</button>
                        <br />
                        <p className='permission'>By clicking "Submit", I provide my express written consent via electronic signature authorizing Anderson Pest Control Pros and one or more pest control specialists, their agents and marketing partners to contact me  and other related products and services to the number and email address I provided (including any wireless number). I further expressly consent to receive telemarketing emails, calls, text messages, pre-recorded messages, and artificial voice messages via an autodialed phone system, even if my telephone number is a mobile number that is currently listed on any state, federal or corporate “Do Not Call” list. I understand that my consent is not a condition of purchase of any goods or services and that standard message and data rates may apply.</p>
                    </div>
                </div>
            </div>

            <div className="phone">
                <h1>Get A Free Estimate Now</h1>
                {/* <div className='line'></div> */}
                <h2>Call Our Toll Free Number</h2>
                <a className='number' href='tel:8556971105'><h1>(855) 697-1105</h1></a>
            </div>
            <br />

            <div id="our-services">
                <h1 className='our-services-title'>Our Pest Control Services</h1>
                <p className='our-services-subtitle'>Include the capture or elimination of:</p>
                <div className='services-container'>
                    <div className='services'>
                        <br />
                        <h5>Wood Destroying Insects</h5>
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Common Household Pests</h5>
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Rodents and Animal Control</h5>
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Birds and Bats</h5>
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Bed Bugs</h5>
                    </div>
                    <div className='services'>
                        <br />
                        <h5>Fleas and Ticks</h5>
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
                    <a className='number' href='tel:8556971105'><h1>(855) 697-1105</h1></a>
                    <br />
                </div>
                <br />
            </div>

            <div className='pest-man-bg'>
                <div className='pest-man-container'>
                    <div className='pest-man-img-container'>
                        <img className='pest-man' src={Pest} alt="pest" />
                    </div>
                    <div className='pest-man-info'>
                        <h4>Our experts will remove your pests for you! We fix several pest control nightmares - guaranteed - our expert team uses the most advanced high tech products on the market. Many of these products were invented in our own lab by staff members.</h4>
                    </div>
                </div>
                <div className="get-form-container">
                    <h6>Get A Fast Quote Today!</h6>
                    <button onClick={() => window.location.href = '#header'} className="get-form-btn">Get A Quote</button>
                </div>
            </div>
        </div>
    )
}

export default HomeComp