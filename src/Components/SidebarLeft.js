import React from "react";
import { VscThreeBars } from 'react-icons/vsc'
import { FiSearch } from 'react-icons/fi'
import { BiUserCircle } from 'react-icons/bi'
import { MdKeyboardArrowUp,MdRecordVoiceOver,MdVoiceOverOff,MdKeyboardArrowDown } from 'react-icons/md';
import { AiFillStar,AiFillSetting,AiOutlineLogout } from 'react-icons/ai';

const SidebarLeft = () =>{
    return (
        <div className="SidebarLeft p-5 space-y-3 w-5/12">
            <div className="flex font-bold text-xl flex-row items-center space-x-10">
                <div>
                    Kump<span className="text-sky-500">ulo</span>
                </div>
                <div>
                    <VscThreeBars size={30}/>
                </div>   
            </div>
            <div className="space-y-3">
                <div className="flex flex-row items-center border-2 p-2 rounded-xl border-black">
                    <span className="text-l pr-8">Search</span>
                    <FiSearch size={20} />
                </div>
                <div className="text-gray-600 font-bold flex flex-row space-x-10">
                    <div>
                      CHANNELS  
                    </div>
                    <div>
                        120
                    </div>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <BiUserCircle size={30} />
                    <span>Gmeet Rutin</span>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div className="text-gray-600 font-bold flex flex-row items-center space-x-10">
                    <div>
                      CHAT CHANNELS  
                    </div>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div className="space-y-2">
                    <div className="space-x-2 flex flex-row items-center">
                        <span>😊</span>
                        <span className="pr-8">Share-Ukhtea</span>
                        <AiFillStar size={20} color="gray"/>
                    </div>
                    <div className="space-x-2">
                        <span>📧</span>
                        <span>General Chat</span>
                    </div>
                    <div className="space-x-2">
                        <span>👍</span>
                        <span>Introducing</span>
                    </div>
                    <div className="space-x-2">
                        <span>😂</span>
                        <span>Gibahin-Dribbble</span>
                    </div>
                    <div className="space-x-2">
                        <span>👍</span>
                        <span>Share-Shot</span>
                    </div>
                </div>
                <div className="text-gray-600 font-bold flex flex-row items-center space-x-10">
                    <div>
                      VOICE CHANNELS  
                    </div>
                    <MdKeyboardArrowUp size={30} />
                </div>
                <div>
                    <div>
                        <div>
                            <span>🎙️</span>
                            <span className="pr-16">Podchess</span>
                            <span>3/5</span> 
                        </div>
                        <div className="flex items-center space-x-3">
                            <BiUserCircle size={35} />
                            <span>Parjoku Fkboi</span>
                            <MdRecordVoiceOver size={20} />
                        </div>
                        <div className="flex items-center space-x-3">
                            <BiUserCircle size={35} />
                            <span>Irul Cuaem</span>
                            <MdRecordVoiceOver size={20} />
                        </div>
                        <div className="flex items-center space-x-3">
                            <BiUserCircle size={35} />
                            <span>Me</span>
                            <MdVoiceOverOff size={20} />
                        </div>
                    </div>
                    <div>
                        <span>😂</span>
                        <span className="pr-16">Design Terus</span>
                        <span>0/5</span>
                    </div>
                    <div>
                        <span>😂</span>
                        <span className="pr-16">Bincang Caem</span>
                        <span>0/5</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <BiUserCircle size={35} />
                <div>
                    Picko Squad  
                </div>
                <MdKeyboardArrowDown size={30} />
            </div>
            <hr className="px-2" />
            <div>
                SYSTEM
                <div className="flex items-center">
                    <AiFillSetting size={20}/>
                    General Setting
                </div>
                <div className="flex items-center text-red-600 font-bold">
                    <AiOutlineLogout size={20}/>
                    Logout
                </div>
            </div>
        </div>
    );
}

export default SidebarLeft;