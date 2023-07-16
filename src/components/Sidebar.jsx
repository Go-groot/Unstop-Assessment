import React from 'react'
import {CiGrid42} from 'react-icons/ci';
import {MdOutlineNoteAlt, MdPadding} from 'react-icons/md';
import {BsQuestionSquare} from 'react-icons/bs'
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      {/* Upper Interactive section for the sidebar */}
      <div className="upper">
        <div className="dashboard">
          <CiGrid42 />
          <p>Dashboard</p>
        </div>
        <div className="Assessment active">
          <MdOutlineNoteAlt />
          <p>Assessment</p>
        </div>
        <div className="myLibrary">
          <BsQuestionSquare />
          <p>My Library</p>
        </div>
      </div>
      {/* Lower section for Round Status */}
      <div className="lower">
        <div className="admin">
            <p>Admin</p>
        </div>
        <div className="roundStatus">
          <MdPadding className='icon'/>
          <p>Round Status</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
