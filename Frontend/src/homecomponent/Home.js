import React from 'react'
import logo from '../Media/logo-img.png'
import zeroone from '../Media/Home/01.jpg'
import zerotwo from '../Media/Home/02.jpg'
import zerothree from '../Media/Home/03.jpg'

import zerooneone from '../Media/Home/01 (1).jpg'
import zeroonetwo from '../Media/Home/01 (2).jpg'
import zeroonethree from '../Media/Home/01 (3).jpg'
import zeroonefour from '../Media/Home/01 (4).jpg'
import zeroonefive from '../Media/Home/01 (5).jpg'

import footer1 from '../Media/Footer/footer-logo.png'
import footer2 from '../Media/Footer/post-02.jpg'
import footer3 from '../Media/Footer/post-01.jpg'
import './Home.scss'
import '../font-awesome-4.7.0/css/font-awesome.min.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header'
import Footer from '../Footer'

const Home = () => {
    const location = useLocation()
    // console.log(location.state.email)
  return (
    <>
    <div id ="homepage">
    {/* <div className="setting">
        <span className="material-symbols-outlined abc">
            settings
        </span>
    </div> */}

    {/* <div className="home_button">
        <a href="#home"><span className="material-symbols-outlined">
            expand_less
            </span></a>
    </div> */}


    {/* <header id="home">
        <div>Your Trusted 24 Hours Service Provider</div>
        <div><i className="fa fa-envelope-o"></i><a href="">info@example.com</a></div>
        <div><i className="fa fa-phone"></i>+ 18000-200-1234</div>
    </header> */}

    
    <Header email={(location && location.state && location.state.email) ?location.state.email : ''} /> 


    <div className="main_div1">
        <div className="text_div">
            <h1>Welcome to Travel EkSath</h1>
            <p>Have fun with your travel companions.Enjoy your trips with the one of your choice. Minimum cost, Maximum enjoyment.</p>
            <p>Ab Travel kabhi bhi, kahi bhi !</p>
        </div>

    </div>

    <div className="main_div3">

        <div className="inner_div">
            <div className="text_div1">
                <h1>Why Choose Us ?</h1>
                <p>We are the best platform for finding your tavel comapanions. We allow our users to connect with their travelling buddys without sharing personal details. We belive in your privacy and safety.</p>
            </div>

            <div className="text_div2">
                <div>
                <i className="fa fa-check"><span>Fatsest way to connect</span></i>
                <i className="fa fa-check"><span>Verfied companions</span>
                </i>
                <i className="fa fa-check"><span>Emergency services</span></i>
               </div>

               <div>
                <i className="fa fa-check"><span>Exclusive Locations allowed</span></i>
                <i className="fa fa-check"><span>Group trips available</span> 
                </i>
                <i className="fa fa-check"><span>Report feature</span></i>
               </div>

            </div>


            <div className="icon_div">
                <div className="div1">
                    <div><i className="fa fa-user"></i></div>
                    <div>Trusted By <h1>4390</h1></div>
                </div>
                <div className="div1">
                    <div><i className="fa fa-globe"></i></div>
                    <div>Certification <h1>2390</h1></div>
                </div>
                <div className="div1">
                    <div><i className="fa fa-trophy"></i></div>
                    <div>Awards <h1>3390
                    </h1></div>
                </div>
                
            </div>

        </div>

    </div>

    <div className="main_div7">
        <div className="text_div">
            
            <h1>What Our Clients Saying?</h1>
        </div>
        <div className="card_div">
            <div className="card">
                <div className="para">
                <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra , vehicula pharetra dolo.</p>
                </div>
                <div className="name">
                    <img src={zeroone} alt=""/>
                    <span>Rshley Foster <br/><h5>Solo Traveller</h5></span>                    
                </div>
            </div>
            <div className="card">
                <div className="para">
                <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra , vehicula pharetra dolo.</p>
                </div>
                <div className="name">
                    <img src={zerotwo} alt=""/>
                    <span>Alex john  <br/><h5>Solo Traveller</h5></span>                    
                </div>
            </div>
            <div className="card">
                <div className="para">
                <p>Praesent pharetra orci odio, ut mattis tellus ullamcorper ornare. Suspendisse ullamcorper metus in erat viverra , vehicula pharetra dolo.</p>
                </div>
                <div className="name">
                    <img src={zerothree} alt=""/>
                    <span>Maria st  <br/><h5>Solo Traveller</h5></span>                    
                </div>
            </div>
        </div>
    </div>

    <div className="main_div9">
        <div className="text_div">
            <h1>EXPLORE ! WITH YOUR TRAVEL COMPANION</h1>
        </div>
        <div className="card_div">

        <div className="card">
            <img  style={{borderRadius:'1rem', objectFit:'cover'}} src={zerooneone} alt="" height="300px" width="225rem"/>
        </div>
        <div className="card">
            <img  style={{borderRadius:'1rem', objectFit:'cover'}} src={zeroonetwo} alt="" height="300px" width="225rem"/>
        </div>
        <div className="card">
            <img  style={{borderRadius:'1rem', objectFit:'cover'}} src={zeroonethree} alt="" height="300px" width="225rem"/>
        </div>
        <div className="card">
            <img  style={{borderRadius:'1rem', objectFit:'cover'}} src={zeroonefour} alt="" height="300px" width="225rem"/>
        </div>
        <div className="card">
            <img  style={{borderRadius:'1rem', objectFit:'cover'}} src={zeroonefive} alt="" height="300px" width="225rem"/>
        </div>

        </div>


    </div>

    <Footer />

    </div>
    </>
  )
}

export default Home
