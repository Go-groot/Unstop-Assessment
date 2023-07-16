import React from 'react'
import {MdBusinessCenter,MdDateRange} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import '../../styles/assessment.css'

const Assesments = () => {
  return (
    <div className="submissionContainer">
    <div className="upper">
        <div className="iconsHolder">
            <span className='business'><MdBusinessCenter className='businesIcon'/></span>
            <span className='dots'><BiDotsVerticalRounded/></span>
        </div>
        <div className="contentHolder">
            <h2>Math Assessment</h2>
            <p><span className='Job'>Job</span><span className='dateSpan'> <MdDateRange className='dateIcon'/> 20 Apr 2023</span></p>
        </div>
    </div>
    <div className="lower">
        <div className="quantity">
            <div className="duration">
                <p>00</p>
                <p>Duration</p>
            </div>
            <div className="questions">
                <p>00</p>
                <p>Questions</p>
            </div>
        </div>
        <div className="links">
            <button><AiOutlineLink className='shareIcon'/> Share</button>
            <div className="personAvatar">
                LP
            </div>
        </div>
    </div>
</div>
  )
}

export default Assesments
