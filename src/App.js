import './App.css';
import SidebarLeft from "./Components/SidebarLeft";
import SidebarRight from './Components/SidebarRight';
import Chat from './Components/Chat';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <SidebarLeft /> 
      <Navbar />
      <Chat />
      <SidebarRight />
    </div>
  );
}
  
export default App;
