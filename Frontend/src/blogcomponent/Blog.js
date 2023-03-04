import React from 'react'
import logo from '../Media/logo-img.png'
import zeronine from '../Media/blog/09.jpg'
import zeroeight from '../Media/blog/08.jpg'
import zerofiveone from '../Media/blog/05 (1).jpg'
import zerosixone from '../Media/blog/06 (1).jpg'
import zerosevenone from '../Media/blog/07 (1).jpg'
import zerofourone from '../Media/blog/04 (1).jpg'
import footer1 from '../Media/Footer/footer-logo.png'
import footer2 from '../Media/Footer/post-01.jpg'
import footer3 from '../Media/Footer/post-02.jpg'
import './Blog.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
  return (
    <>
    <div id="Blogpage">
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
            <img src={logo} alt=""/>
        </div>

        <div>

        <ul className="list1">
            {/* <li><a href="home.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="ourteam.html">Our Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="Contactus.html">Contact Us</a></li> */}
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Aboutus">About Us</Link></li>
            
            <li><Link to = "/Service">Services</Link></li>
          
            <li><Link to = "/Ourteam">Our team</Link></li>
          
            <li><Link to = "/Blog">Blog</Link></li>
           
            <li><Link to = "/Contactus">Contact Us</Link></li>

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
        <h1>Blog</h1>
        <span>
            <a href="home.html"><i className="fa fa-home"></i> Home</a>
        </span>
        <span className="double_angle"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
        <span className="contact">Blog</span>
    </div>




    <div className="main_div2">


        <div className="card">

            <div className="img_div">
                <img src={zeronine} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">What Are The Benefits Of LEED Certification?</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>




        <div className="card">

            <div className="img_div">
                <img src={zeroeight} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">How Is 3D Printing Affecting The Construction?</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>



        <div className="card">

            <div className="img_div">
                <img src={zerofiveone} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">Improve Workflow With Agile Construction</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>



        <div className="card">

            <div className="img_div">
                <img src={zerosixone} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">Tips : Builders Needs Liability Insurance</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>



        <div className="card">

            <div className="img_div">
                <img src={zerosevenone} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">Guide To Remodeling Your Building</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>



        <div className="card">

            <div className="img_div">
                <img src={zerofourone} alt="" height="250px"
                width="380px"/>

                <h1>17 <br/> APR</h1>
            </div>

            <div className="text_div">

                <div className="text1">
                    <h1><a href="">The 9 Best Construction Guides Of 2019</a></h1>

                    <div className="text">
                        <div>
                            <i className="fa fa-comments"></i>
                            <h5>Comments</h5>
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h5>Alex</h5>
                        </div>
                    </div>

                </div>

                <div className="text2">
                    <p>Lorem ipsum dolo hooljlj rt amet, csectetur adipimag A ms pum ciis natoque peus loream ipsum siple.</p>
                    <a href="">ReadMore <i className="fa fa-angle-right"></i></a>
                    

                </div>
            </div>

        </div>
    </div>





    <footer>
        <div className="footer_div1">
            <div className="inner1">
                <img src={footer1} alt=""/>

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
                        <img src={footer2} alt=""/>
        
                        <span><h5>Our Biggest Summer Meetup</h5> <h6>August 1, 2018</h6> 
                        </span>
                    </div>
                    <div className="box1">
                        <img src={footer3} alt=""/>
        
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

export default Blog
