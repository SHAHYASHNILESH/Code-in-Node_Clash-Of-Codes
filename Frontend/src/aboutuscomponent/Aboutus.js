import React from 'react'
import logo from '../Media/logo-img.png'
import single from '../Media/aboutus/single-img-five.png'
import zerothreethree from '../Media/aboutus/03 (3).jpg'
import teamzeroone from '../Media/our team/team-img01.jpg'
import teamzerotwo from '../Media/aboutus/team-img02 (1).jpg'
import teamzerothree from '../Media/aboutus/team-img03 (1).jpg'
import teamzerofour from '../Media/aboutus/team-img04 (1).jpg'
import footer1 from '../Media/Footer/post-01.jpg'
import footer2 from '../Media/Footer/post-02.jpg'
import footer3 from '../Media/Footer/post-01.jpg'
import './Aboutus.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import { Link, useLocation } from 'react-router-dom';


const Aboutus = () => {
    return (
        <>
            <div id="Aboutuspage">
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
                    <h1 style={{ color: 'black', fontSize: '50px' }}>About Us</h1>
                    <span>
                        <Link to="/" ><i className="fa fa-home"></i> Home</Link>
                    </span>
                    <span className="double_angle"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                    <span className="contact">About Us</span>
                </div>

                <div className="main_div2">
                    <div className="img_div">
                        <img src={single} className="simple" alt="" />
                    </div>
                    <div className="text_div">
                        <h3>ABOUT US</h3>
                        <h1>Experience A Better Way To Travel.</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing .</p>
                        <h2>Meet With Our Mission</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        <h2>What Is Our Vision?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy.</p>
                    </div>
                </div>

                <div className="main_div7">

        <div className="text_div">
            
            <h1>Why Join Travel EkSath?</h1>
        </div>

        <div className="card_div">
            <div className="card">
                <div className="para">
                <p>Every trip is authentic. Every trip is unique. Every itinerary is special. There are no standard trips. You won't be 1 out of a million others. You will be one of a very small group that experience your destination in the best way possible.</p>
                </div>
            </div>
            <div className="card">
                <div className="para">
                <p>The groups are super small. Usually, only 4 to 8 TripMates travel with you. This is the most authentic way to travel and still have all benefits of traveling in a group. Moreover, you will make amazing friends from all around the world!</p>
                </div>
            </div>
            <div className="card">
                <div className="para">
                <p>You will never forget your trip. You experience is going to be life changing. Traveling in such a small group in this amazingly authentic way will forever stay as one of your most memorable experiences. Check out our reviews and you'll understand!</p>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="footer_div2">
            <div className="max-width">
                <div className="footer1">
                    <h2>Get in Touch</h2>


                    <div className="inner1">
                        <div><i className="fa fa-map-marker"></i></div>
                        <div>Dwarkadas J. Sanghvi HQ <br/> 24 Fifth st., Ville Parle, Mumbai</div>
                    </div>

                    <div className="inner1">
                        <div><i className="fa fa-envelope-o"></i></div>
                        <div>Email : <a href="">traveleksath@gmail.com</a> </div>
                    </div>

                    <div className="inner1">
                        <div><i className="fa fa-phone"></i></div>
                        <div>Phone : +91 9852528230<br/>
                            Support : +91 8727269010</div>
                    </div>

                </div>

                <div className="footer3">
                    <h2>Recent Posts</h2>

                    <div className="box1">
                        <img src={footer3} alt=""/>
                        <span><h5>Our Biggest Summer Meetup</h5> <h6>August 1, 2018</h6> 
                        </span>
                    </div>
                    <div className="box1">
                        <img src={footer2} alt=""/>
        
                        <span><h5>Our Biggest Summer Meetup</h5> <h6> Octomber 10, 2019</h6>  
                        </span>
                    </div>
                    
                </div>


                <div className="footer4">
                    <h2>Get in touch!</h2>
                    <h1>+91 9853290230</h1>
                    <p>Explore the world !!!</p> 
                    <p>Made with Love ❤️</p>
                </div>
            </div>

        </div>


        <div className="footer_div3">


            <div className="max-width">
                <div className="footer5">
                    <div className="text_div">
                    <h3>Copyright © 2023 Travel EkSath</h3>
                    </div>

                    <div className="text_div">
                       <h3 style={{fontSize:'1rem'}}> Made with love ❤️</h3>
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
export default Aboutus
