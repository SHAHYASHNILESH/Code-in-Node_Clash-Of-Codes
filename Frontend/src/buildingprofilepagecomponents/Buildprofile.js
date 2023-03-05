import React from 'react';
import logo from '../Media/logo-img.png';
import './Buildprofile.scss';
import footer2 from '../Media/Footer/post-02.jpg';
import footer3 from '../Media/Footer/post-01.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const Buildprofile = () => {
    const [interests, setInterests] = useState([]);
    const [newInterest, setNewInterest] = useState('');

    const handleAddInterest = () => {
        setInterests([...interests, newInterest]);
        setNewInterest('');
    };
    return (
        <>
            <div id="buildprofile">
                <nav className="navbar"  >

                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div>

                        <ul className="list1">

                            <li><Link to="/Service">Travel Together</Link></li>

                            <li><Link to="/CreateGroup">Create Group</Link></li>

                            <li><Link to="/Blog">Forum</Link></li>

                            <li><Link to="/Aboutus">About Us</Link></li>

                            <li><Link to="/Contactus">Contact Us</Link></li>

                            <li><Link to="/Login">Login/SignUp</Link></li>

                        </ul>

                    </div>

                </nav>
                <div className="main_div1">
                    <div className="text_div">
                        <h1>Build Your Profile !</h1>
                        <div className="creategroupform">
                            <form action="">
                                <div>
                                    <label htmlFor="profileimage">Upload Profile Image : </label>
                                    <input type="file" name='profileimg' id='profileimg'
                                        accept=".png, .jpg, .jpeg" style={{ marginLeft: '77px' }} />
                                </div>
                                <div>
                                    <label htmlFor="description">Enter Description : </label>
                                    <textarea name="desc" id="desc" cols="30" rows="10" style={{ marginLeft: '119px' }}></textarea >
                                </div>
                                <div>
                                <label htmlFor="interest">What are your interest ? : </label>
                                    <input
                                        type="text"
                                        value={newInterest}
                                        onChange={(event) => setNewInterest(event.target.value)}
                                        style={{ marginLeft: '90px', marginRight:'3px' }}
                                    />
                                    <button onClick={handleAddInterest} style={{marginRight:'-30px'}}>Add Interest</button>
                                    <ul>
                                        {interests.map((interest) => (
                                            <li key={interest}>{interest}</li>
                                        ))}
                                    </ul>
                                </div>



                                <div className="creategroupbtn">
                                    <button className="button-36" role="button">SUBMIT</button>
                                    <button className="button-36" role="reset">RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer_div3">
                        <div className="max-width">
                            <div className="footer5">
                                <div className="text_div">
                                    <h3>Copyright © 2023 Travel EkSath</h3>
                                </div>
                                <div className="text_div">
                                    <h3 style={{ fontSize: '1rem' }}> Made with love ❤️</h3>
                                </div>
                                <div className="icon_div">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-google-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
