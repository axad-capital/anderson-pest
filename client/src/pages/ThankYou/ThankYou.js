import React from 'react'
import './thankYou.css'

const ThankYou = () => {
    return (
        <div>
            <div className='thanks-container'>
                <h1 className='thanks-title'>Thank you for completing the form, to get immediate assistance, please call the number below.</h1>
                <br />
                <a className='thanks-num' href='tel:(877) 412-0488'><h1>(877) 412-0488</h1></a>
            </div>
        </div>
    )
}

export default ThankYou