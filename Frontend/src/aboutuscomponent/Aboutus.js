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
import './Aboutus.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import { Link, useLocation } from 'react-router-dom';


const Aboutus = () => {
  return (
    <>
    <div id= "Aboutuspage">
    <div className="setting">
        <span className="material-symbols-outlined abc">
            settings
        </span>
    </div>

    <div className="home_button">
        <a href="#home"><span className="material-symbols-outlined">
            expand_less
            </span></a>
    </div>


    <header id="home">
        <div>Your Trusted 24 Hours Service Provider</div>
        <div><i className="fa fa-envelope-o"></i><a href="">info@example.com</a></div>
        <div><i className="fa fa-phone"></i>+ 18000-200-1234</div>
    </header>


    <nav className="navbar" >

        <div>
            <img src={logo} alt="logo"/>
        </div>

        <div>

        <ul className="list1">
            {/* <li><a href="home.html">Home</a></li> */}
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Aboutus">About Us</Link></li>
            
            <li><Link to = "/Service">Services</Link></li>
          
            <li><Link to = "/Ourteam">Our team</Link></li>
          
            <li><Link to = "/Blog">Blog</Link></li>
           
            <li><Link to = "/Contactus">Contact Us</Link></li>
            {/* <li><a href="aboutus.html">About Us</a></li>
            
            <li><a href="services.html">Services</a></li>
            <li><a href="ourteam.html">Our Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="Contactus.html">Contact Us</a></li> */}

            <li><a href=""><i className="fa fa-search"></i></a></li>
        </ul>
        
        <ul className="list2">

            <li><a href=""><i className="fa fa-facebook"></i></a></li>
            <li><a href=""><i className="fa fa-twitter"></i></a></li>
            <li><a href=""><i className="fa fa-google-plus"></i></a></li>
            <li><a href=""><i className="fa fa-linkedin"></i></a></li>

        </ul>

        </div>

    </nav>



    <div className="main_div1">
        <h1>About Us</h1>
        <span>
            <a href="home.html"><i className="fa fa-home"></i> Home</a>
        </span>
        <span className="double_angle"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
        <span className="contact">About Us</span>
    </div>



    <div className="main_div2">
        

        <div className="img_div">
            <img src={single} alt=""/>
        </div>

        <div className="text_div">

            <h3>ABOUT US</h3>
            <h1>Experience A Better Way To Build.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing .</p>
            <h2>Meet With Our Mission</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <h2>What Is Our Vision?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy.</p>


            <div className="button_div">
                <button><a href="">More  About Us</a> </button>
            </div>

        </div>
    </div>





    <div className="main_div3">
        <div className="img_div1">

            <div className="inner1">

                <h1>
                    People Aks These Question Over And Over Again
                </h1>


                <div className="card1">

                    <div>
                        <a href="">

                        <h2>We Are Passionate</h2>

                        </a>

                        <a href="">

                        <i className="fa fa-angle-down"></i>

                        </a>

                    </div>

                    <div>

                        <img src={zerothreethree} alt="" height="160px"
                        width="135px"/>

                        <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather</p>

                    </div>
                </div>


                <div className="card2">
                    <a href="">

                        <h2>Honest and Dependable</h2>

                        </a>

                        <a href="">

                        <i className="fa fa-angle-down"></i>

                        </a>
                </div>


            




            </div>


            <div className="inner2">

                <h1>Easy Way To Collaborate Our Company</h1>
                <p>We have a long and proud history givin emphasis to environment social and economic outcomes</p>


                <div className="range1">
                    <div>
                        <h4>Industrial</h4>
                        <h5>91%</h5>
                    </div>

                    <div>

                    </div>

                </div>


                <div className="range2">
                    <div>
                        <h4>Construction</h4>
                        <h5>79%</h5>
                    </div>

                    <div>

                    </div>

                </div>



                <div className="range3">
                    <div>
                        <h4>Remodeling</h4>
                        <h5>91%</h5>
                    </div>

                    <div>

                    </div>

                </div>
                
            </div>

        </div>

        <div className="img_div2">
            
        </div>
    </div>









    <div className="main_div4">


        <div className="background_image">
            <div className="text_div">
                <h3>CONTACT DETAILS</h3>
                <h1>How Can We Help You?</h1>
              </div>
        


        <div className="form_div">

            <div className="inner1">

                <div className="text">
                    <h3>FREE CONSULTATION</h3>
                    <h1>GET A FREE QUOTE</h1>
                </div>

                <div className="form">
                    <input type="text" placeholder="Full Name"/>
                    <span><input type="email" placeholder="Email Address"/></span>
                    <br/>
                    <input type="number" placeholder="Phone Number"/>
                    <span><input type="number" placeholder="Zip Code"/></span> 
                    <br/>
                    <select name="" id="">
                        <option value="">Services</option>
                        <option value="">Reconstruction</option>
                        <option value="">General</option>
                    </select>
                    <br/>
                    <textarea name="" id="" cols="70" rows="2" placeholder="Message"></textarea>
                </div>
    
                <button><a href="">GET A FREE QUOTE</a> </button>

            </div>


            <div className="inner2">

                <div className="div1">
                    <i className="fa fa-map-marker"></i>

                    <a href=""><h3>Visit Our Branches</h3></a>
                    <p>Themeforest, Envanto HQ 24 Fifth st., Los Angeles, USA</p>

                </div>

                <div className="div2">
                    <i className="fa fa-map-marker"></i>

                    <a href=""><h3>Visit Our Branches</h3></a>
                    
                    <p>Themeforest, Envanto HQ 24 Fifth st., Los Angeles, USA</p>

                    
                </div>



            </div>

            </div>

        </div>


        





    </div>




    <div className="main_div5">

        <div className="text_div1">
            <h3>WORKING WITH EXCELLENT</h3>
            <h1>Our Special Services</h1>
        </div>


        <div className="card_div">


        <div className="card">
            <div className="img_div">
                <img src={teamzeroone} width="250px" height="300px" alt=""/>

                <div className="overlay">
                
                </div>
            </div>

            <div className="text_div">

                <div className="icon_div">
                    <a href=""><i className= "fa fa-facebook"></i></a>
                    <a href=""><i className= "fa fa-twitter"></i></a>
                    <a href=""><i className= "fa fa-linkedin"></i></a>
                    <a href=""><i className= "fa fa-google-plus"></i></a>
                    <a href=""><i className= "fa fa-pinterest-p"></i></a>
                </div>
                <a href="">Joya Mitchel</a>
                <h5>Installation Civil Enginner</h5> 
            </div>

        </div>


        <div className="card">
            <div className="img_div">
                <img src={teamzerotwo} width="250px" height="300px" alt=""/>

                <div className="overlay">
                
                </div>
            </div>

            <div className="text_div">

                <div className="icon_div">
                    <a href=""><i className= "fa fa-facebook"></i></a>
                    <a href=""><i className= "fa fa-twitter"></i></a>
                    <a href=""><i className= "fa fa-linkedin"></i></a>
                    <a href=""><i className= "fa fa-google-plus"></i></a>
                    <a href=""><i className= "fa fa-pinterest-p"></i></a>
                </div>
                <a href="">Dwayn Royes</a>
                <h5>Installation Civil Enginner</h5> 
            </div>

        </div>


        <div className="card">
            <div className="img_div">
                <img src={teamzerothree} width="250px" height="300px" alt=""/>

                <div className="overlay">
                
                </div>
            </div>

            <div className="text_div">

                <div className="icon_div">
                    <a href=""><i className= "fa fa-facebook"></i></a>
                    <a href=""><i className= "fa fa-twitter"></i></a>
                    <a href=""><i className= "fa fa-linkedin"></i></a>
                    <a href=""><i className= "fa fa-google-plus"></i></a>
                    <a href=""><i className= "fa fa-pinterest-p"></i></a>
                </div>
                <a href="">John Martin</a>
                <h5>Installation Civil Enginner</h5> 
            </div>

        </div>


        <div className="card">
            <div className="img_div">
                <img src={teamzerofour} width="250px" height="300px" alt=""/>

                <div className="overlay">
                
                </div>
            </div>

            <div className="text_div">

                <div className="icon_div">
                    <a href=""><i className= "fa fa-facebook"></i></a>
                    <a href=""><i className= "fa fa-twitter"></i></a>
                    <a href=""><i className= "fa fa-linkedin"></i></a>
                    <a href=""><i className= "fa fa-google-plus"></i></a>
                    <a href=""><i className= "fa fa-pinterest-p"></i></a>
                </div>
                <a href="">Smitherford</a>
                <h5>Installation Civil Enginner</h5> 
            </div>

        </div>

        </div>
    </div>






    <footer>
        <div className="footer_div1">
            <div className="inner1">
                <img src="../Media/Footer/footer-logo.png" alt=""/>

            </div>
            <div className="inner2">
                <div>
                    <i className="fa fa-envelope-open-o"></i>
                </div>
                <div>
                    <h2>Subscribe To Our Newsletter</h2>
                    <h4>Stay in touch with us to get latest news and discount coupons</h4>
                </div>
                <div>
                    <input type="email" placeholder="Email Address"/>
                    <i className="mail fa fa-envelope">

                    </i>
                </div>

            </div>

        </div>



        <div className="footer_div2">
            <div className="max-width">
                <div className="footer1">
                    <h2>Get in Touch</h2>


                    <div className="inner1">
                        <div><i className="fa fa-map-marker"></i></div>
                        <div>Themeforest,Envant HQ <br/> 24 Fifth st., Los Angeles, USA</div>
                    </div>

                    <div className="inner1">
                        <div><i className="fa fa-envelope-o"></i></div>
                        <div>Email : <a href="">name@yourmail.com</a> </div>
                    </div>

                    <div className="inner1">
                        <div><i className="fa fa-phone"></i></div>
                        <div>Phone : +12 (3) 456 0000 <br/>
                            Support : +12 (3) 456 0000</div>
                    </div>

                </div>


                <div className="footer2">
                    <h2>Useful Links</h2>

                    <div className="inner_div">

                        <div className="inner1">
                            <i className="fa fa-check"><a href="home.html">Home</a></i>
                            <i className="fa fa-check"><a href="services.html">Services</a></i>
                            <i className="fa fa-check"><a href="aboutus.html">About</a></i>
                            <i className="fa fa-check"><a href="">Gallery</a></i>
                            <i className="fa fa-check"><a href="blog.html">Blog</a></i>
                            <i className="fa fa-check"><a href="">Map</a></i>
                        </div>

                        
                        <div className="inner1">
                            <i className="fa fa-check"><a href="">FAQ</a></i>
                            <i className="fa fa-check"><a href="">Offers</a></i>
                            <i className="fa fa-check"><a href="Contactus.html">Contact Us</a></i>
                            <i className="fa fa-check"><a href="">Pricing</a></i>
                            <i className="fa fa-check"><a href="">Locations</a></i>
                            <i className="fa fa-check"><a href="">Review</a></i>
                        </div>

                    </div>
                    
                </div>


                <div className="footer3">
                    <h2>Recent Posts</h2>

                    <div className="box1">
                        <img src={footer1} alt=""/>
        
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
                    <h2>Get Free Estimate</h2>
                    <h1>123-456-78910</h1>
                    <p>Our online scheduling and payment system is safe.</p>
                    <button><a href="">Request With  Online Form</a> </button>
                    
                </div>
            </div>

        </div>


        <div className="footer_div3">


            <div className="max-width">
                <div className="footer5">
                    <div className="text_div">
                    <h3>Copyright © 2019 Construction. All rights reserved.</h3>
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
