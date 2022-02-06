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
                <div className="dropdown1 space-x-2">
                    <BsChatDots size={20} className="iconchat"/>
                    <span className="chat">General Chat</span>
                    <div className="dropdown">
                        <a href="#" > <AiOutlineDown size={20} /> </a>
                        <div className="dropdown-content">
                            <a href="#">Action 1</a>
                            <a href="#">Action 2</a>
                        </div>    
                    </div>             
                </div>
            </div>

            <div>
                <div className="dropdown1 space-x-2">
                    <a href="#"><IoMdNotificationsOutline size={25}/></a>
                    <span className="profile">KurniaMajid</span>
                    <a href="#"><BiUserCircle size={25}/></a>
                    <div className="dropdown">
                        <a href=""><AiOutlineDown size={20} className="down"/></a>
                        <div className="dropdown-content" style=" right:0;">
                            <a href="#">Profil</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;