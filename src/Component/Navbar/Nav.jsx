import "./Nav.css"

import { FaHome } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoGameControllerOutline } from "react-icons/io5";

import { IoMdMenu } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";

function Nav(){
    const navinfo = [
   {href: "/" , label: "Home", icon: <FaHome/>, id: 1},
   {href: "/reels",label:"Reels",icon: <BsCameraReels/> , id: 2},
   {href: "/groups", label: "Groups",icon: <FaPeopleGroup/> , id: 3},
   {href: "/gaming", label: "Gaming",icon:<IoGameControllerOutline />, id: 4 }
    ]
 
    return (<>
    <nav className="navbar">
        <div className="logo">
           
            <img src="http://localhost:5173/src/assets/img.jpg.png" alt="logo" />
            <input  type="text" placeholder="Search Facebook" /><span><FaSearch/></span>
        </div>
        <div className="nav-list">
            {navinfo.map((info)=>(
               <a id={info.id} href={info.href}><span>{info.icon}</span></a>
            ))}
        </div>

        <div className="side-bar">
             <div className="menu"><span> <IoMdMenu/></span></div>
             <div className="messenger"><span> <FaFacebookMessenger/></span></div>
             <div className="notification"><span><IoIosNotifications/></span></div>
             <div className="profile"><span><FaUserCircle/></span></div>
        </div>
    </nav>
    </>)
}

export default Nav;