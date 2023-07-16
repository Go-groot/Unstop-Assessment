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
  // managing state to check for model activation  
  const [model , setModel] = useState(false);

  //managing state to check the sidebar activation 
  const [sidebar , setSidebar] = useState(false);  

  //function to handle the click event for the model
  const modelClick = () =>{
    setModel(!model)
  }

  //function to handle the click event for sidebar
  const sidebarClick = () =>{
    setSidebar(!sidebar)
  }

  return (
    <>{/* conditionaly displaying form model based on the user interaction */}    
      {model && <Model className='model' setModel={modelClick}/>}

      {/* conditionaly displaying sidebar for mobile based on the user screen resulotion and interaction */}
      {sidebar && <SidebarMobile click={sidebarClick} className='mobileSidebar'/>}

     {/* Main App component to render the content  */}
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
