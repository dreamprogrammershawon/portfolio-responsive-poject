import './Topbar.scss'
import { FaRegFaceSadTear } from "react-icons/fa6";

import { FiActivity } from "react-icons/fi";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Dream.
          </a>
          <div className="itemContainer">
       <FaRegFaceSadTear className='icon'/>


            <span>Love u Mithila</span>
          </div>
          <div className="itemContainer">
   <FiActivity className='icon'/>


            <span>dream@shawon.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}