import React from "react";
import './Navbar.css';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {AiOutlineDown} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {BsChatDots} from 'react-icons/bs';

const Navbar = () =>{
    return (
        <div className="Navbar font-bold">
            <div>
                <div className="dropdown1 space-x-2 sm:ml-10">
                    <BsChatDots size={20} className="iconchat"/>
                    <span className="chat">General Chat</span>
                    <div className="dropdown">
                        <a href="javascript(void(0));" > <AiOutlineDown size={20} /> </a>
                        <div className="dropdown-content left-0" >
                            <a href="javascript(void(0));">Action 1</a>
                            <a href="javascript(void(0));">Action 2</a>
                        </div>    
                    </div>             
                </div>
            </div>

            <div>
                <div className="dropdown1 space-x-2">
                    <a href="javascript(void(0));"><IoMdNotificationsOutline size={25}/></a>
                    <span className="profile">KurniaMajid</span>
                    <a href="javascript(void(0));"><BiUserCircle size={25}/></a>
                    <div className="dropdown">
                        <a href="javascript(void(0));"><AiOutlineDown size={20} className="down"/></a>
                        <div className="dropdown-content" >
                            <a href="javascript(void(0));">Profil</a>
                            <a href="javascript(void(0));">Logout</a>
                        </div>
                    </div>
<<<<<<< HEAD
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
=======
                </div>
            </div>
>>>>>>> 24690e3634bb8975f34b656ece481d17561493bb
        </div>
    );
}

export default Navbar;