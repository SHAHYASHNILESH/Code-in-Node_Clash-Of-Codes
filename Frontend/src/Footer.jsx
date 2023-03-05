import React from 'react'
import footer1 from './Media/Footer/footer-logo.png'
import footer2 from './Media/Footer/post-02.jpg'
import footer3 from './Media/Footer/post-01.jpg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_div2">
                    <div className="max-width">
                        <div className="footer1">
                            <h2>Get in Touch</h2>


                            <div className="inner1">
                                <div><i className="fa fa-map-marker"></i></div>
                                <div>Dwarkadas J. Sanghvi HQ <br /> 24 Fifth st., Ville Parle, Mumbai</div>
                            </div>

                            <div className="inner1">
                                <div><i className="fa fa-envelope-o"></i></div>
                                <div>Email : <a href="">traveleksath@gmail.com</a> </div>
                            </div>

                            <div className="inner1">
                                <div><i className="fa fa-phone"></i></div>
                                <div>Phone : +91 9852528230<br />
                                    Support : +91 8727269010</div>
                            </div>

                        </div>

                        <div className="footer3">
                            <h2>Recent Posts</h2>

                            <div className="box1">
                                <img src={footer3} alt="" />

                                <span><h5>Our Biggest Summer Meetup</h5> <h6>August 1, 2018</h6>
                                </span>
                            </div>
                            <div className="box1">
                                <img src={footer2} alt="" />

                                <span><h5>Our Biggest Summer Meetup</h5> <h6> Octomber 10, 2019</h6>
                                </span>
                            </div>

                        </div>


                        <div className="footer4">
                            <h2>Get in touch!</h2>
                            <h1>+91 9853290230</h1>
                            <p>Explore the world !!!</p>
                        </div>
                    </div>

                </div>


                <div className="footer_div3">


                    <div className="max-width">
                        <div className="footer5">
                            <div className="text_div">
                                <h3>Copyright © 2019 Construction. All rights reserved.</h3>
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
        </>
    )
}

export default Footer