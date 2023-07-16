import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi';
import '../styles/header2.css';

const Header2 = ({click}) => {
  return (
    <div className='headerContainer'>
       <div onClick={click} className="hamburger" >
            <BiMenuAltLeft className='icon'/>
       </div>
       <div className="heading">
            <h3>Assessment</h3>
       </div>
    </div>
  )
}

export default Header2
