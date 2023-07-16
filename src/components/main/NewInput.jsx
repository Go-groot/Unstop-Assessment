import React from 'react'
import {MdAdd} from 'react-icons/md'

const NewInput = ({openModal}) => {
  return (
    <div onClick={openModal} className='inputContainer' >
      <div className="upperBody">
        <div className="plusSign">
          <MdAdd className='icon'/>
        </div>
      </div>
      <div className="lowerBody">
        <h3>New Assessment</h3>
        <p>From here you can add questions of multiple types like MCQs, subjectives(text or paragraph)!</p>
      </div>
    </div>
  )
}

export default NewInput
