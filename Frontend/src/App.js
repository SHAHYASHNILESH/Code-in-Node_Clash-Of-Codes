import Aboutus from './aboutuscomponent/Aboutus';
import './App.css';
import Home from './homecomponent/Home.js'
import Service from './servicescomponents/Service';
import Ourteam from './ourteamcomponent/Ourteam';
import Blog from './blogcomponent/Blog';
import Contactus from './contactuscomponent/Contactus';
import Login from './logincomponents/Login';
import Dummy from './Dummy';
import {
  Routes,
  Route,
} from "react-router-dom";

import { Creategroup } from './creategroupcomponent/Creategroup';
import { Buildprofile } from './buildingprofilepagecomponents/Buildprofile.js';
import Mainpage from './profilepagecomponent/Mainpage';

import Forum from './forumcomponent/Forum';
import Single from './forumcomponent/Single';
import Write from './forumcomponent/Write';






function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Aboutus" element = {<Aboutus/>}/>
      <Route path = "/Service" element = {<Service/>}/>
      <Route path = "/Creategroup" element = {<Creategroup/>}/>
      <Route path = "/Blog" element = {<Blog/>}/>

      <Route path = "/Ourteam" element = {<Ourteam/>}/>
      <Route path = "/Forum" element = {<Forum/>}/>
      <Route path = "/Forum/?cat=adv/" element = {<Forum/>}/>
      <Route path = "/Forum/?cat=trek/" element = {<Forum/>}/>
      <Route path = "/Forum/?cat=dom/" element = {<Forum/>}/>
      <Route path = "/Forum/?cat=intr/" element = {<Forum/>}/>
      <Route path = "/post/:id" element = {<Single/>}/>
      <Route path = "/Write" element = {<Write/>}/>

      <Route path ="/Contactus" element = {<Contactus/>}/>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Dummy" element ={<Dummy/>}/>

      <Route path = "/Buildprofile" element ={<Buildprofile/>}/>
      {/* This is profile page (below) */}
      <Route path = "/Mainpage" element ={<Mainpage/>}/>

     </Routes>
    </>
  );
}

export default App;
