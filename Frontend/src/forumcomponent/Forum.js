import React, { useEffect, useState } from "react";
import logo from "../Media/logo-img.png";
import './Forum.scss'
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Forum = () => {
    const [posts,setPosts]=useState([]);
    const cat=useLocation().search;
    console.log(cat);

    useEffect(()=>{
        const fetchData=async ()=>{
            try{
               const res=await axios.get('/api/posts');
               setPosts(res.data.data);
               console.log(res); 
            }
            catch(err){
                console.log(err)
            }
        };
        fetchData();
    },[cat]);
//   const posts = [
//     {
//       id: 1,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 2,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 3,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//     {
//       id: 4,
//       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     },
//   ];
  return (
    <>
      <div div id="homepage">
        <nav className="navbar">
          <div>
            <img src={logo} alt="logo" style={{ height: 120 }} />
          </div>

          <div>
            <ul className="list1">
              {/* <li>
                <Link to="/Forum/?cat=adv">Adventure</Link>
              </li>
              <li>
                <Link to="/Forum/?cat=trek">Trekking</Link>
              </li>
              <li>
                <Link to="/Forum/?cat=dom">Domestic</Link>
              </li>
              <li>
                <Link to="/Forum/?cat=intr">International</Link>
              </li> */}
              <li>
                <Link to="/Write">Write</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="posts">
        
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post._id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forum;
