import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './Media/logo-img.png'

const Header = (props) => {
    const [user, setUser] = useState({})
    const userData = async (e) => {
        //e.preventDefault();
        // const { phone:phone} = user;
        console.log("user");
        if (props.email && props.email !== "") {
            console.log(props.email)
            let email = props.email;
            const res = await fetch("/get-mainpage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });
            var data = await res.json();


            // console.log(data);
            setUser({
                name: data.data.name,
                email: data.data.email,
                phone: data.data.phone,
                dob: data.data.dob,
                location: data.data.location,
                gender: data.data.location
            });
        }
        // console.log("Hello");
        // console.log(user);
        // console.log(data.data);
        // console.log(data.data.name);

    };


    useEffect(() => {
        userData();

    }, [])

    return (
        <>
            <nav className="navbar"  >

                <div>
                    <img src={logo} alt="logo" />
                </div>

                <div>

                    <ul className="list1">

                        <li><Link to={`/travel-together`}>Travel Together</Link></li>

                        <li><Link to="/CreateGroup">Create Group</Link></li>

                        <li><Link to="/Blog">Forum</Link></li>

                        <li><Link to="/Aboutus">About Us</Link></li>

                        <li><Link to="/Contactus">Contact Us</Link></li>
                        {(props.email) ?
                            <li><Link to="/Mainpage">{user.name}</Link></li>
                            : <li><Link to="/Login">Login/SignUp</Link></li>}
                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Header