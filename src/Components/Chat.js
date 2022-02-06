import React from 'react'
import './Chat.css'
import {FiPaperclip,FiMeh,FiEdit,FiTrash }from 'react-icons/fi'
import { IoSend } from 'react-icons/io5'



const Chat = () =>{
  return(
    <div className='container'>
      <div className='message-body'>
        <div className='date'><span>Toady</span></div>
        <div className='message entrant'>
          <p>
            <span className='edit-delete'>
              <button className='delete' onClick={()=>{alert('deleted')}}><FiTrash className='delete' size={20}/></button>  
              <button className='edit' onClick={()=>alert('edited')}><FiEdit className='edit' size={20}/></button>
            </span>
            <span className='text'>message sortant par moi meme i hade nothing to do so i said why not to send a messegae</span><img src='MyUser.png' alt='myruser'/></p><span className='time'>8h ago</span>
        </div>
        <div className='message sortant'>
          <p><img src='TheirUser.png' alt='myuser'/><span className='text'>message entrant par des autres utiistaeur hello dody its a nice tos see i have a long time seeing so</span></p><span className='time'>9h ago</span>
        </div>
        <div className='message sortant'>
          <p><img src='TheirUser.png' alt='myuser'/><span className='text'>message entrant par des autres utiistaeur</span></p><span className='time'>9h ago</span>
        </div>
        <div className='message entrant'>
          <p>
            <span className='edit-delete'>
              <button className='delete' onClick={()=>{alert('deleted')}}><FiTrash className='delete' size={20}/></button>  
              <button className='edit' onClick={()=>alert('edited')}><FiEdit className='edit' size={20}/></button>
            </span>
            <span className='text'>message sortant par moi meme</span><img src='MyUser.png' alt='myruser'/></p><span className='time'>8h ago</span>
        </div>
        <div className='message sortant'>
          <p><img src='TheirUser.png' alt='myuser'/><span className='text'>message entrant par des autres utiistaeur</span></p><span className='time'>9h ago</span>
        </div>
        
      </div>
      <div className='message-form'>
          <button className='emoji-btn' onClick={()=>{alert('choose emoji')}}><FiMeh color='#ccc'  size={20}/></button>
          <input placeholder='Enter your message here' type='text'/>
          <label className='upload-button' htmlFor="upload-button">
            <span className="image-button">
              <FiPaperclip className="picture-icon" color='#ccc' size={20}/>
            </span>
          </label>
          <input type='file' 
            id='upload-button'
            multiple={false}
            style={{ display: 'none' }}
          />
          <button className='send-btn' onClick={()=>alert('message sent')}>
            <IoSend className='send-icon' color='white' size={20}/>
          </button>
        </div>
    </div>
  )
}
export default Chat