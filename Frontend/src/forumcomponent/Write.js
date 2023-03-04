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
      formData.append("file", file);
      const res = await axios.post("/api/posts/", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/api/posts/`, {
            title,
            desc: value,

            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
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
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="adv"
                id="adv"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="adv">Adventure</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="trek"
                id="trek"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="trek">Trekking</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="abr"
                id="abr"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="adv">International</label>
            </div>
            <div className="cat">
              <input
                type="radio"
                name="cat"
                value="intr"
                id="intr"
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor="adv">Domestic</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
