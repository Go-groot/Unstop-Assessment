import React from 'react'
import Overview from './Overview'
import MyAssesments from './MyAssesments'

const Main = ({openModal}) => {

  return (
    <div className='mainContainer'>
      <div className="heading">
        <h2>Assesement Overview</h2>
      </div>
      <div className="components">
        <Overview />
        <MyAssesments openModal={openModal}/>
      </div>
    </div>
  )
}

export default Main
