import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Media/logo-img.png'

const Header = () => {
    return (
        <>
            <nav className="navbar"  >

                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div>

                    <ul className="list1">

                        <li><Link to="/travel-together">Travel Together</Link></li>

                        <li><Link to="/CreateGroup">Create Group</Link></li>

                        <li><Link to="/Blog">Forum</Link></li>

                        <li><Link to="/Aboutus">About Us</Link></li>

                        <li><Link to="/Contactus">Contact Us</Link></li>

                        <li><Link to="/Login">Login/SignUp</Link></li>

                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Header