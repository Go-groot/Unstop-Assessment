import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/main/Main";
import './styles/app.css';
import './styles/overview.css';
import './styles/main.css';
import './styles/myAssessment.css';
import './styles/newinput.css';
import Model from "./components/Model";
import { useState } from "react";
import Navbar2 from "./components/Navbar2";
import Header2 from "./components/Header2";
import SidebarMobile from "./components/SidebarMobile";

function App() {
  const [model , setModel] = useState(false);
  const [sidebar , setSidebar] = useState(false);
  // const [overview , setOverview] = useState(true);

  const modelClick = () =>{
    setModel(!model)
  }
  const sidebarClick = () =>{
    setSidebar(!sidebar)
  }

  return (
    <>    
      {model && <Model className='model' setModel={modelClick}/>}
      {sidebar && <SidebarMobile click={sidebarClick} className='mobileSidebar'/>}
      {/* {overview && <Overview />}   */}
      <div className="App">
        <div className='leftPanel'>
          <Sidebar />  
        </div>    
        <Header2 click={sidebarClick} className='mobileSidebar'/>
        <div className="rightPanel">
          <Navbar />
          <Navbar2 />
          <Main openModal={modelClick}/>
        </div>
      </div>
    </>
  );
}

export default App;
