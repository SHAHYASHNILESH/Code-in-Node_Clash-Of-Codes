import React from "react";
import "./Forum.scss";
import logo from "../Media/logo-img.png";
import "./Forum.scss";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const Single = () => {
  return (
    <>
      <div div id="homepage">
        <nav className="navbar">
          <div>
            <img src={logo} alt="logo" style={{ height: 70 }} />
          </div>

          <div>
            <ul className="list1">
              <li>
                <Link to="/Login">Login/SignUp</Link>
              </li>
              <li>
                <Link to="/Write">Write</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="single">
        <div className="content">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
          <div className="user">
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={"/write?edit=2"}>
                <img src="https://i.pinimg.com/originals/10/45/8c/10458c3537f992017af59cebebc7cc7a.png" />
              </Link>
              <img src="https://www.seekpng.com/png/small/202-2022743_edit-delete-icon-png-download-delete-icon-png.png" />
            </div>
          </div>
          <h1>Travel</h1>
          <p>
            Go back and read the content marketing definition one more time, but
            this time remove the relevant and valuable. That’s the difference
            between content marketing and the other informational garbage you
            get from companies trying to sell you “stuff.” Companies send us
            information all the time – it’s just that most of the time it’s not
            very relevant or valuable (can you say spam?). That’s what makes
            content marketing so intriguing in today’s environment of thousands
            of marketing messages per person per day.Go back and read the
            content marketing definition one more time, but this time remove the
            relevant and valuable. That’s the difference between content
            marketing and the other informational garbage you get from companies
            trying to sell you “stuff.” Companies send us information all the
            time – it’s just that most of the time it’s not very relevant or
            valuable (can you say spam?). That’s what makes content marketing so
            intriguing in today’s environment of thousands of marketing messages
            per person per day.Go back and read the content marketing definition
            one more time, but this time remove the relevant and valuable.
            That’s the difference between content marketing and the other
            informational garbage you get from companies trying to sell you
            “stuff.” Companies send us information all the time – it’s just that
            most of the time it’s not very relevant or valuable (can you say
            spam?). That’s what makes content marketing so intriguing in today’s
            environment of thousands of marketing messages per person per day.Go
            back and read the content marketing definition one more time, but
            this time remove the relevant and valuable. That’s the difference
            between content marketing and the other informational garbage you
            get from companies trying to sell you “stuff.” Companies send us
            information all the time – it’s just that most of the time it’s not
            very relevant or valuable (can you say spam?). That’s what makes
            content marketing so intriguing in today’s environment of thousands
            of marketing messages per person per day.
          </p>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default Single;
