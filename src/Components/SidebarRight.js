import React from "react";
import './SidebarRight.css';
import {FiSearch} from 'react-icons/fi';
import {BiUserCircle,BiMicrophoneOff} from 'react-icons/bi';


const SidebarRight = () =>{
    return (
        <div className="SidebarRight">
            <div className="search">
                <input type="text" placeholder="Search" id="serch"/>
                <FiSearch size={20} className="icon"/>
            </div>
            <div className="boxadmin">
               <div className="admin">
                   ADMIN
               </div>
               <div className="status-s">
                   s
               </div>
            </div>
            <div className="boxadmin1">
               <BiUserCircle size={50} className="iconuser1"/>
               <div className="article1">
                    <p><strong>Me</strong></p>
                    <div className="desc1">
                    <p>Now on Podchess</p>
                    </div>
               </div>
               <BiMicrophoneOff size={20} className="iconmicro1"/>
            </div>
            <div className="boxadmin1">
               <BiUserCircle size={50} className="iconuser1"/>
               <div className="article1">
                    <p><strong>Parjoku Fkboi</strong></p>
                    <div className="desc1">
                    <p>Now on Podchess</p>
                    </div>
               </div>
               <BiMicrophoneOff size={20} className="iconmicro1"/>
            </div>
            <div className="boxadmin1">
               <BiUserCircle size={50} className="iconuser1"/>
               <div className="article1">
                    <p><strong>Irul Cuaem</strong></p>
                    <div className="desc1">
                    <p>Now on Podchess</p>
                    </div>
               </div>
               <BiMicrophoneOff size={20} className="iconmicro1"/>
            </div>
            <div className="boxadmin2">
               <BiUserCircle size={50} className="iconuser2"/>
               <div className="article2">
                    <p><strong>Den Yili</strong></p>
                    <div className="desc2">
                    <p>Watching Netflix</p>
                    </div>
               </div>
            </div>
            <div className="boxadmin3">
               <BiUserCircle size={50} className="iconuser3"/>
               <div className="article3">
                    <p><strong>Mulick Abimana</strong></p>
                    <div className="desc3">
                    <p>Now on Figma</p>
                    </div>
               </div>
            </div>
            <div className="boxbodakstudio">
               <div className="budakstudio">
                   BUDAK STUDIO
               </div>
               <div className="status-s1">
                   s
               </div>
            </div>
            <div className="boxbodakstudio1">
               <BiUserCircle size={50} className="iconuser2"/>
               <div className="article2">
                    <p><strong>Rudee Taher</strong></p>
                    <div className="desc2">
                    <p>Playing Spotitid</p>
                    </div>
               </div>
            </div>
            <div className="boxbodakstudio2">
               <BiUserCircle size={50} className="iconuser4"/>
               <div className="article4">
                    <p><strong>Narina Dewi</strong></p>
                    <div className="desc4">
                    <p>Playing Point Blank</p>
                    </div>
               </div>
            </div>
            <div className="boxbodakstudio3">
               <BiUserCircle size={50} className="iconuser5"/>
               <div className="article5">
                    <p><strong>Raminten</strong></p>
                    <div className="desc5">
                    <p>Playing Among Us</p>
                    </div>
               </div>
            </div>
            <div className="boxbodakstudio4">
               <BiUserCircle size={50} className="iconuser5"/>
               <div className="article5">
                    <p><strong>Loli Bandrek</strong></p>
                    <div className="desc5">
                    <p>Now on Figma</p>
                    </div>
               </div>
            </div>
            <div className="boxbodakstudio5">
               <BiUserCircle size={50} className="iconuser5"/>
               <div className="article5">
                    <p><strong>Den Gleb</strong></p>
                    <div className="desc5">
                    <p>Watching Netflix</p>
                    </div>
               </div>
            </div>
            <div className="boxmember">
               <div className="member">
                   MEMBER
               </div>
               <div className="status-s2">
                   25
               </div>
            </div>
            <div className="boxmember1">
               <BiUserCircle size={50} className="iconuser6"/>
               <div className="article6">
                    <p><strong>Gunawan Dwi Cahyo</strong></p>
                    <div className="desc6">
                    <p>Playing PUBG</p>
                    </div>
               </div>
            </div>
            <div className="boxmember2">
               <BiUserCircle size={50} className="iconuser6"/>
               <div className="article6">
                    <p><strong>Roni Abanda</strong></p>
                    <div className="desc6">
                    <p>Playing Ghensin</p>
                    </div>
               </div>
            </div>
            <div className="boxmember3">
               <BiUserCircle size={50} className="iconuser6"/>
               <div className="article6">
                    <p><strong>Nunung Abraham</strong></p>
                    <div className="desc6">
                    <p>Playing Among Us</p>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default SidebarRight;