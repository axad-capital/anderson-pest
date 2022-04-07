import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';
import Pest from './pest.png'

const NavComp = () => {

    const location = useLocation()

  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='pest-logo' src={Pest} alt="pest" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>      
                            <li className="nav-item">
                                <a href='#our-services' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a href='tel:555-555-5555' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Call Us</a>
                            </li>                    
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavComp