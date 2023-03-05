import { React, useRef } from "react";
import logo from "../Media/logo-img.png";
import footer1 from "../Media/Footer/footer-logo.png";
import footer2 from "../Media/Footer/post-02.jpg";
import footer3 from "../Media/Footer/post-01.jpg";
import "./Contactus.scss";
import emailjs from "@emailjs/browser";
import "../font-awesome-4.7.0/css/font-awesome.min.css";
import { Link, useLocation } from "react-router-dom";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_372of4d",
        "template_wp2p12b",
        form.current,
        "5-r0S5Vr1z6xiXDoP"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div id="Contactuspage">
        {/* <div className="setting">
        <span className="material-symbols-outlined abc">
            settings
        </span>
    </div>
 */}

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

        <nav className="navbar">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <ul className="list1">
              <li>
                <Link to="/Service">Travel Together</Link>
              </li>

              <li>
                <Link to="/CreateGroup">Create Group</Link>
              </li>

              <li>
                <Link to="/Forum">Forum</Link>
              </li>

              <li>
                <Link to="/Aboutus">About Us</Link>
              </li>

              <li>
                <Link to="/Contactus">Contact Us</Link>
              </li>

              <li>
                <Link to="/Login">Login/SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="main_div1">
          <h1 style={{ color: "black" }}>Contact Us</h1>
          <span>
            <a href="home.html">
              <i className="fa fa-home"></i> Home
            </a>
          </span>
          <span className="double_angle">
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </span>
          <span className="contact">Contact Us</span>
        </div>

        <div className="main_div2">
          <div className="card">
            <div className="text1">
              <h1>Visit Our Place</h1>
              <h2>14 Branches Over The World</h2>
            </div>

            <div className="text2">
              <i className="fa fa-life-ring"></i>
              <h4>
                Phone: +324 123 45 978 <br /> Email:{" "}
                <a className="support" href="">
                  support@habikon.com
                </a>{" "}
              </h4>
              <a href="">Locate Us On Map</a>
            </div>
          </div>

          <div className="card">
            <div className="text1">
              <h1>Quick Contact</h1>
              <h2>Get Quick Touch With Us</h2>
            </div>

            <div className="text2">
              <i className="fa fa-phone"></i>
              <h4>
                Flat A, 20/7, Reynolds Neck Str <br /> Helenaville, FV77 8WS
              </h4>
              <a href="">Get Call Back</a>
            </div>
          </div>

          <div className="card">
            <div className="text1">
              <h1>Visit Between</h1>
              <h2>Business Hours For Only Office</h2>
            </div>

            <div className="text2">
              <i className="fa fa-clock-o"></i>
              <h4>
                Mon - Satday: 9.00am to 6.00pm <br /> Sunday: Holiday
              </h4>
              <a href="">Make An Appointment</a>
            </div>
          </div>
        </div>

        <div className="main_div3">
          {/* 
        <div className="map_div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d241272.46771837218!2d72.87164413033967!3d19.111570915720385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665858533648!5m2!1sen!2sin" width="550" height="380" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div> */}

          <div className="form_div">
            <div className="text">
              <h1>Call Us Or Fill The Form</h1>
            </div>

            <div className="form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Full Name" />
              <span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                />
              </span>
              <br />
              <textarea
                name="message"
                id=""
                cols="50"
                rows="2"
                placeholder="Message"
              ></textarea>
              <button>
                <a href="">Submit </a>{" "}
              </button>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer_div2">
            <div className="max-width">
              <div className="footer1">
                <h2>Get in Touch</h2>

                <div className="inner1">
                  <div>
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    Dwarkadas J. Sanghvi HQ <br /> 24 Fifth st., Ville Parle,
                    Mumbai
                  </div>
                </div>

                <div className="inner1">
                  <div>
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <div>
                    Email : <a href="">traveleksath@gmail.com</a>{" "}
                  </div>
                </div>

                <div className="inner1">
                  <div>
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    Phone : +91 9852528230
                    <br />
                    Support : +91 8727269010
                  </div>
                </div>
              </div>

              <div className="footer3">
                <h2>Recent Posts</h2>

                <div className="box1">
                  <img src={footer3} alt="" />

                  <span>
                    <h5>Our Biggest Summer Meetup</h5> <h6>August 1, 2018</h6>
                  </span>
                </div>
                <div className="box1">
                  <img src={footer2} alt="" />

                  <span>
                    <h5>Our Biggest Summer Meetup</h5>{" "}
                    <h6> Octomber 10, 2019</h6>
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
                  <h3 style={{ fontSize: "1rem" }}> Made with love ❤️</h3>
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
  );
};

export default Contactus;
