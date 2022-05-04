import React from 'react'
import './thankYou.css'

const ThankYou = () => {
    return (
        <div>
            <div className='thanks-container'>
                <h1 className='thanks-title'>Thank you for completing the form, to get immediate assistance, please call the number below.</h1>
                <br />
                <a className='thanks-num' href='tel:8556971105'><h1>(855) 697-1105</h1></a>
            </div>
        </div>
    )
}

export default ThankYou