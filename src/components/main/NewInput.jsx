import React from 'react'
import {MdAdd} from 'react-icons/md'

// Component to activate model and add more new assessments 

const NewInput = ({openModal}) => {
  return (
    // recieving the PROPS from the APP Component to trigger the model activation 
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
