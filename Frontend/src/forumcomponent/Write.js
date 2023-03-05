import { React, useState } from "react";
import "./Forum.scss";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Media/logo-img.png";
import moment from "moment/moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      console.log(formData);
      formData.append("file", file);
      const res = await axios.post("/api/upload/", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // const imgUrl = await upload();
    // console.log(imgUrl);
    try {
      await axios.post("/api/posts/", {
        title,
        desc: value,
        cat,
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      });
      navigate("/Forum");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div id="homepage">
        <nav className="navbar">
          <div>
            <img src={logo} alt="logo" style={{ height: 105 }} />
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
      <div className="add">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <input
            type="text"
            placeholder="Category(Travel,Trek,Domestic,International)"
            onChange={(e) => setCat(e.target.value)}
          />
          <div className="buttons">
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
