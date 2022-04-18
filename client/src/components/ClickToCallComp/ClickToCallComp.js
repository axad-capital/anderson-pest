import React from 'react'
import './clickToCallComp.css'
import PhoneIcon from '@mui/icons-material/Phone';
import PestCall from './pest-call.png'
import PestControlIcon from '@mui/icons-material/PestControl';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Pest from './pest.png'


const ClickToCallComp = () => {
    return (
        <div>
            <div className='ctc-container'>
                {/* <h1 className='ctc-title'>Our service works on your schedule. 24/7 customer support, on site inspection services and scheduling text alerts when we are on-our-way are included. Call us now to speak to a representative.</h1> */}
                <div className='ctc-title-container'>
                    <h1 className='ctc-title'>Exterminate Your Pests In Less Than 1 Week</h1>
                    <p className='ctc-sub-title'>Having issues with pest crawling all over your home?  Frightened or scared that you or your family would be harmed? Call to get a Free Consultation on getting rid of these little critters lying around your house</p>
                    <div className='phone-container'>
                        <PhoneIcon className='ctc-icon' />
                        <a className='phone-num' href="tel:8556971105">(855) 697-1105</a>
                    </div>
                </div>
                <div className='ctc-img-container'>
                    <img className='ctc-img' src={PestCall} alt="pestman" />
                </div>
            </div>

            <div className='under-text-container'>
                <h1 className='under-text-container-title'>Affordable And Reliable Pest Control Services</h1>
                <div className="line"></div>
                <br />
                <h3 className='under-text-container-text'>Our service works on your schedule.</h3>
                <h3 className='under-text-container-text'>24/7 customer support, on site inspection services and scheduling text alerts when we are on-our-way are included.</h3>
                <h3 className='under-text-container-text'>Call us now to speak to a representative.</h3>
            </div>

            <div className='pest-spraying-man-container'>
                <img className='pest-spraying-man' src={Pest} alt="pest" />
            </div>

            <div className='upper-foot'>
                <h1 className='upper-foot-title'>Getting A Quote Is Easy</h1>
                <br />
                <div className='upper-foot-info'>
                    <div>
                        <PhoneIcon className='foot-icon' />
                        <h5 className='foot-icon-text'>Call our number and be connected to an agent.</h5>
                    </div>
                    <br />
                    <div>
                        <PestControlIcon className='foot-icon' />
                        <h5 className='foot-icon-text'>Tell us about your current pest problem.</h5>
                    </div>
                    <br />
                    <div>
                        <DateRangeIcon className='foot-icon' />
                        <h5 className='foot-icon-text'>We schedule your appointment.</h5>
                    </div>
                </div>
            </div>

            <br />
            <div className="second-phone">
                <PhoneIcon className='ctc-icon' />
                <a className='phone-num' href="tel:8556971105">(855) 697-1105</a>
            </div>

        </div>
    )
}

export default ClickToCallComp