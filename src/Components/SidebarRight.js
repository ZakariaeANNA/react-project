import React from "react";
import './SidebarRight.css';
import {FiSearch} from 'react-icons/fi';
import {BiUserCircle,BiMicrophoneOff} from 'react-icons/bi';
import { VscThreeBars } from 'react-icons/vsc'


const SidebarRight = () =>{
   const HideorShow = (elms) =>{
      Array.from(elms).forEach((x) => {
          if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("sideright").style.backgroundColor = "white";
          } else {
            x.style.display = "none";
            document.getElementById("sideright").style.backgroundColor = "";
          }
      })
  }
  const handleHidden = () =>{
      var logo = document.getElementsByClassName("hideright");
      HideorShow(logo);  
  }
    return (
        <div className="SidebarRight float-right text-sm px-2 space-y-2 sm:z-10 sm:fixed" id="sideright">
            <div onClick={handleHidden}>
               <VscThreeBars size={30}/>
            </div> 
            <div className="hideright sm:hidden space-y-2">
               <div className="search">
                  <input type="text" placeholder="Search" id="serch"/>
                  <FiSearch size={20} className="icon"/>
               </div>
               <div className="flex flex-row justify-between">
                  <div>ADMIN</div>
                  <div>s</div>
               </div>
               <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Me</strong></p>
                        <p className="text-gray-700">Now on Podchess</p>
                     </div>
                  </div>
                  <BiMicrophoneOff size={20} />
               </div>
               <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Parjoku Fkboi</strong></p>
                        <p className="text-gray-700">Now on Podchess</p>
                     </div>
                  </div>
                  <BiMicrophoneOff size={20} />
               </div>
               <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Irul Cuaem</strong></p>
                        <p className="text-gray-700">Now on Podchess</p>
                     </div>
                  </div>
                  <BiMicrophoneOff size={20} />
               </div>
               <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Mulick Abimana</strong></p>
                        <p className="text-gray-700">Now on Podchess</p>
                     </div>
                  </div>
               </div>
               <div className="flex flex-row justify-between">
                  <div>BUDAK STUDIO</div>
                  <div>s</div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Raminten</strong></p>
                        <p className="text-gray-700">Playing Among us</p>
                     </div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Loli Bandrek</strong></p>
                        <p className="text-gray-700">Now on Figma</p>
                     </div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Den Gleb</strong></p>
                        <p className="text-gray-700">Watching Netflix</p>
                     </div>
               </div>
               <div className="flex flex-row justify-between">
                  <div>MEMBER</div>
                  <div>25</div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Gunawan Dwi Cahyo</strong></p>
                        <p className="text-gray-700">Playing PUBG</p>
                     </div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Roni Abanda</strong></p>
                        <p className="text-gray-700">Playing Ghensin</p>
                     </div>
               </div>
               <div className="flex flex-row items-center space-x-1">
                     <BiUserCircle size={50} />
                     <div>
                        <p><strong>Nunung Abraham</strong></p>
                        <p className="text-gray-700">Playing Among Us</p>
                     </div>
               </div>
            </div>
            
        </div>
    );
}

export default SidebarRight;