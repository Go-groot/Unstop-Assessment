import React from 'react'
import {CiGrid42} from 'react-icons/ci';
import {MdOutlineNoteAlt, MdPadding} from 'react-icons/md';
import {BsQuestionSquare} from 'react-icons/bs'
import '../styles/sidebarMobile.css';
import {AiOutlineClose} from 'react-icons/ai';

// Component to be displayed on mobile screens only

const SidebarMobile = ({click}) => {
  return (
    <div className='sidebarContainers left-right'>
      <div className="header">
        <h3>Menu</h3>
        <AiOutlineClose onClick={click}/>
      </div>
      <div className="upper">
        <div className="dashboard">
          <CiGrid42 className='icons'/>
          <p>Dashboard</p>
        </div>
        <div className="Assessment active">
          <MdOutlineNoteAlt className='icons'/>
          <p>Assessment</p>
        </div>
        <div className="myLibrary">
          <BsQuestionSquare className='icons'/>
          <p>My Library</p>
        </div>
      </div>
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

export default SidebarMobile
