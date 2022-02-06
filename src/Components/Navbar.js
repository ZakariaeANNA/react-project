import React from "react";
import './Navbar.css';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiOutlineDown} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {BsChatDots} from 'react-icons/bs';

const Navbar = () =>{
    return (
        <div className="Navbar">

            <div className="row">
               <div className="col1">
                  <div className="dropdown1">
                    <BsChatDots size={15} className="iconchat"/>
                    <a href="#">General Chat </a>   
                    <AiOutlineDown size={15} className="down"/> 
                  </div>
                  <div className="dropdown1-content">
                       <a href="#">Action 1</a>
                       <a href="#">Action 2</a>
                    </div>
               </div>
              
               <div className="col">
                   <div className="icon-notification">
                     <a href="#"><IoMdNotificationsOutline size={25}/></a>
                   </div> 
                   

                   
                  <div className="dropdown2">
                  <ul>
                   <li className="dropdown2">
                          
                              <a href="#">KurniaMajid</a>
                              <a href="#"><BiUserCircle size={25}/></a>
                              <a href=""><AiOutlineDown size={15} className="down"/></a>
                              <ul className="drop">
                                <li><a href="#">Profil</a></li>
                                <li><a href="#">Logout</a></li>
                              </ul>
                          
                      
                              </li>
                 </ul>  
                 </div>
                 
                 </div>
                 
               
        </div>
        </div>
    );
}

export default Navbar;