import React from 'react'
import '../styles/model.css';
// using react-icons library for all the icons
import {AiOutlineClose} from 'react-icons/ai';

const Model = ({setModel}) => {
  return (
    <div className='modelContainer slide-up-animation'>
        {/* Upper Header Section of the Model */}
        <div className="header">
            <h3>Create new assesment</h3>
            <button onClick={setModel} ><AiOutlineClose className='icon'/></button>
        </div>
        
        {/* Main Body of the Form for all the Data submission*/}
        <div className="body">
            <form action="" className='formBody'>
                <label htmlFor="">Name of assesment</label>
                <input type="text" name="" id="" placeholder='Type Here'/>
                <label htmlFor="">Purpose of the test is</label>
                {/* using Select Tag to provide options for the user */}
                <select id="selectOption" name="selectOption">
                    <option value="" disabled selected hidden>Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                {/* Description section */}
                <label htmlFor="">Description</label>
                <select id="selectOption" name="selectOption">
                    <option value="" disabled selected hidden>Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <label htmlFor="">Skills</label>
                <div className="skillsContainer">
                    {/* Selected Skills container */}
                    <div className="upper">
                        <div className="skills">UI/UX and Design <AiOutlineClose className='icon'/></div>
                        <div className="skills">No of Question <AiOutlineClose className='icon'/></div>
                        <div className="skills">Web Development <AiOutlineClose className='icon'/></div>
                        <div className="skills">UI/UX and Design <AiOutlineClose className='icon'/></div>
                        <div className="skills">Web Development <AiOutlineClose className='icon'/></div>
                    </div>
                    {/* New Skills input */}
                    <div className="inputTag">
                        <input type="text" placeholder='Type here'/>
                    </div>
                </div>
                <div className="duration">
                    <label htmlFor="">Duration of assesment</label>
                    <input type="time" name="" id="" />
                </div>
            </form>
        </div>
        {/* Submit or Save Sumbmition */}
        <div className="submit">
            <button>Save</button>
        </div>
    </div>
  )
}

export default Model
