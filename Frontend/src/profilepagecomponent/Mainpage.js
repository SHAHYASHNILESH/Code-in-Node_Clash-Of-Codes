import React, { useEffect, useState } from 'react'
import './Mainpage.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Media/logo-img.png'

export default function Mainpage() {
    // const [user, setUser] = useState({})
    // const date = new Date();
    // // let phone = 9867075589;
    // const location = useLocation();
    // let phone = location.state.phone;
    // const userData = async (e) => {
    //     //e.preventDefault();
    //     // const { phone:phone} = user;
    //     console.log("user");
    //     console.log(location.state)
    //     const res = await fetch("/get-mainpage", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //       phone,
    //       }),
    //     });
    //     var data = await res.json();
       

    //     // console.log(data);
    //     setUser({
    //         name : data.data.name,
    //         email: data.data.email,
    //         phone: data.data.phone,
    //         city : data.data.city,
    //         state : data.data.state,
    //         dob : data.data.dob,

    //     });
    //     // console.log("Hello");
    //     // console.log(user);
    //     // console.log(data.data);
    //     // console.log(data.data.name);
        
    //   };
      
        
    //   useEffect(() => {
    //     userData();
        
    //   }, [])
     
      
    return (
        <>
   
           <div id="main-page">
           {/* <Navbarmainpage name = {user.name} /> */}
           <nav className="navbar"  >

        {/* <div>
        <img src={logo}  alt="logo" />
        </div> */}

        <div>

        <ul className="list1">
               
            <li><Link to = "/Service">Travel Together</Link></li>

            <li><Link to = "/CreateGroup">Create Group</Link></li>
          
            <li><Link to = "/Forum">Forum</Link></li>

            <li><Link to = "/Aboutus">About Us</Link></li>
           
            <li><Link to = "/Contactus">Contact Us</Link></li>
            
            <li><Link to = "/Login">Login/SignUp</Link></li>
  
        </ul>

        </div>
    </nav>

            <div className="container">
            <div id='ppheading'style={{display:'flex', justifyContent:'center'}}><h5>USER PROFILE</h5></div>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle"
                                            width="150" />
                                        <div className="mt-3">
                                            {/* <h4>{user.name}</h4> */}
                                            <h4>Meghesh Nagpure</h4>
                                            <p className="text-secondary mb-1">Travel Comapnion</p>
                                            {/* <p className="text-muted font-size-sm">{user.city},{user.state}</p> */}
                                            <p className="text-muted font-size-sm">Mumbai, Maharashtra</p>
                                            {/* <Link to="/LevelsPage">
                                            <button type="button" class="btn btn-success mx-2">Start</button>
                                            </Link> */}
                                            <button type="button" class="btn btn-primary mx-2">Upload Photo</button>
                                            <Link to="/">
                                            <button type="button" class="btn btn-danger mx-2">Logout</button>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h3 className="mb-0"><b>Hobbies / Interests</b></h3>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Exploring</h6>
                                        <span className="text-secondary">New Places</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Photography</h6>
                                        <span className="text-secondary">Wildlife</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Singing</h6>
                                        <span className="text-secondary">Rap</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Dancing</h6>
                                        <span className="text-secondary">Hip-Hop</span>
                                    </li>
                                    {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <div class="d-grid gap-2 col-10 mx-auto">
                                            <Link to="/Viewpassbook">
                                                <button class="button-39">View Passbook</button>
                                            </Link>
                                            <Link to="/Viewdebitcard">
                                                <button class="button-40">View Virtual Debit Card</button>
                                            </Link>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-center">
                                            <h3 className="mb-0"><b>PROFILE DETAILS</b></h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">
                                            {user.name}
                                        </div> */}
                                        <div className="col-sm-9 ">
                                            Meghesh Nandkumar Nagpure
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Mobile</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">
                                            {user.phone}
                                        </div> */}
                                        <div className="col-sm-9 ">
                                            9152538377
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">
                                           {user.email}
                                        </div> */}
                                        <div className="col-sm-9 ">
                                           meghesh@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-center">
                                            <h3 className="mb-0"><b>ADDITIONAL DETAILS</b></h3>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Date of Birth</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">

                                            {
                                            new Date(user.dob).toDateString()}
                                        </div> */}
                                        <div className="col-sm-9 ">

                                            29/02/2001
                                            </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Age</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">
                                            {date.getFullYear()-new Date(user.dob).getFullYear()}
                                        </div> */}
                                         <div className="col-sm-9 ">
                                            21 yrs
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City / Village / Town</h6>
                                        </div>
                                        {/* <div className="col-sm-9 ">
                                            {user.city}
                                        </div> */}
                                        <div className="col-sm-9 ">
                                            Mumbai
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                    {/* <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">District</h6>
                                        </div>
                                        <div className="col-sm-9 ">
                                            Thane
                                        </div>
                                    </div> */}
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">State</h6>
                                        </div>
                                        {/* <div className="col-sm-9">
                                         {user.state}
                                        </div> */}
                                        <div className="col-sm-9">
                                         Maharashtra
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
