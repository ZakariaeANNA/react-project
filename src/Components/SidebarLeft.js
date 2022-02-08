import React from "react";
import { VscThreeBars } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'
import { MdKeyboardArrowUp,MdRecordVoiceOver,MdVoiceOverOff,MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillStar,AiFillSetting,AiOutlineLogout } from 'react-icons/ai';

const SidebarLeft = () =>{
    const HideorShow = (elms) =>{
        Array.from(elms).forEach((x) => {
            if (x.style.display === "none") {
              x.style.display = "block";
              document.getElementById("side").style.backgroundColor = "white";
            } else {
              x.style.display = "none";
              document.getElementById("side").style.backgroundColor = "";
            }
        })
    }
    const handleHidden = () =>{
        var logo = document.getElementsByClassName("hide");
        HideorShow(logo);  
    }
    return (
        <div id="side" className="SidebarLeft px-2 sm:z-10 space-y-1 text-sm font-bold float-left sm:fixed h-screen">
            <div className="flex font-bold text-xl flex-row items-center justify-between">
                <div className="hide sm:hidden">
                    Kump<span className="text-sky-500">ulo</span>
                </div>
                <div onClick={handleHidden}>
                    <VscThreeBars size={30}/>
                </div>   
            </div>
            <div className="hide space-y-3 sm:hidden">
                <div className="flex flex-row items-center border-2 p-2 rounded-xl border-black justify-between">
                    <span className="pr-8">Search</span>
                    <FiSearch size={20} />
                </div>
                <div className="text-gray-600 font-bold flex flex-row justify-between">
                    <div>
                      CHANNELS  
                    </div>
                    <div>
                        120
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-2">
                        <BiUserCircle size={30} />
                        <span>Gmeet Rutin</span>
                    </div>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div className="text-gray-600 font-bold flex flex-row items-center justify-between">
                    <div>
                      CHAT CHANNELS  
                    </div>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div className="space-y-2">
                    <div className="space-x-2 flex flex-row items-center justify-between">
                        <span className="pr-8">😊 Share-Ukhtea</span>
                        <AiFillStar size={20} color="gray"/>
                    </div>
                    <div>
                        <span>📧 General Chat</span>
                    </div>
                    <div>
                        <span>👍 Introducing</span>
                    </div>
                    <div>
                        <span>😂 Gibahin-Dribbble</span>
                    </div>
                    <div>
                        <span>👍 Share-Shot</span>
                    </div>
                </div>
                <div className="text-gray-600 font-bold flex flex-row items-center justify-between">
                    <div>
                      VOICE CHANNELS  
                    </div>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div className="space-y-2">
                    <div>
                        <div className="flex items-center justify-between space-y-1">
                            <span>🎙️ Podchess</span>
                            <span>3/5</span> 
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <BiUserCircle size={35} />
                                <span>Parjoku Fkboi</span>
                            </div>
                            <MdRecordVoiceOver size={20} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <BiUserCircle size={35} />
                                <span>Irul Cuaem</span>
                            </div>
                            <MdRecordVoiceOver size={20} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <BiUserCircle size={35} />
                                <span>Me</span>
                            </div>
                            <MdVoiceOverOff size={20} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>😂 Design Terus</span>
                        <span>0/5</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>😂 Bincang Caem</span>
                        <span>0/5</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <BiUserCircle size={35} />
                        <span>Picko Squad</span>
                    </div>
                    <MdKeyboardArrowDown size={30} />
                </div>
            </div>
            
            <hr className="hide px-2 bg-black sm:hidden" />
            <div className="hide space-y-2 sm:hidden">
                <div> SYSTEM </div>
                <div className="flex items-center space-x-3">
                    <AiFillSetting size={20}/>
                    <span>General Setting</span>
                </div>
                <div className="flex items-center text-red-600 font-bold space-x-3">
                    <AiOutlineLogout size={20}/>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}

export default SidebarLeft;