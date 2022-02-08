import './App.css';
import SidebarLeft from "./Components/SidebarLeft";
import SidebarRight from './Components/SidebarRight';
import Chat from './Components/Chat';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App flex">
      <SidebarLeft /> 
      <div className="w-screen sm:fixed float-left">
        <Navbar />
        <Chat />
      </div>
      
      <SidebarRight />
    </div>
  );
}
  
export default App;
