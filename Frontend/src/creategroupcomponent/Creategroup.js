import React from 'react';
import logo from '../Media/logo-img.png'
import './Creategroup.scss';
import footer2 from '../Media/Footer/post-02.jpg'
import footer3 from '../Media/Footer/post-01.jpg'
import { Link, useLocation } from 'react-router-dom';

export const Creategroup = () => {
    return (
        <>
            <div id="creategroup">
                <nav className="navbar"  >

                    {/* <div>
                        <img src={logo} alt="logo" />
                    </div> */}

                    <div>

                        <ul className="list1" style={{marginLeft:'200px'}}>

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
                        <h1>Create Group</h1>
                        <div className="creategroupform">
                        <form action="">
                            <div>
                                <label htmlFor="groupname">Group Name : </label>
                                <input type="text" name='grpname' id='grpname' style={{marginLeft:'150px'}}/>
                            </div>
                            <div>
                                <label htmlFor="location">Enter Location : </label>
                                <input type="text" name='loc' id='loc' style={{marginLeft:'132px'}}/>
                            </div>
                            <div>
                                <label htmlFor="startdate">Start Date : </label>
                                <input type="date" name='startdate' id='startdate' style={{marginLeft:'175px'}} />
                            </div>
                            <div>
                                <label htmlFor="duration">Duration (in days) : </label>
                                <input type="text" name='duration' id='duration' style={{marginLeft:'95px'}}/>
                            </div>
                            <div>
                                <label htmlFor="description">Enter Description : </label>
                                <textarea name="desc" id="desc" cols="30" rows="10" style={{marginLeft:'105px'}}></textarea >
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
