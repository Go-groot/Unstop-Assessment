import React from 'react'

// react-icons for all Icons used in the project;

import {TbLayoutList} from 'react-icons/tb'
import {MdOutlinePeopleAlt} from 'react-icons/md';
import { SlGlobe } from 'react-icons/sl';
import {IoMdLink} from 'react-icons/io';

const Overview = () => {
  return (
    <div className='overviewContainer'>
        {/* Total Assessment Section */}
        <div className="totalAsses">
            <h3>Total Assessment</h3>
            <div className="content">
            <TbLayoutList className='icon'/>
            <p>34</p>
            </div>
        </div>

        {/* Candidates Section */}
        <div className="candidates">
            <div className="heading">
                <h3>Candidates</h3>
            </div>
            <div className="content">
            <MdOutlinePeopleAlt className='icon'/>
                <div className="totalCandidate">
                    <h3>11,145 <span>+89</span></h3>
                    <span>Total Candidate</span>
                </div>
                <div className="whoAttampted">
                    <h3>1,14 <span>+89</span></h3>
                    <span>Who Attampted</span>
                </div>
            </div>
        </div>

        {/* Candidate Sources Section*/}
        <div className="candidateSource">
            <div className="heading">
                <h3>Candidate Source</h3>
            </div>
            <div className="content">
                <SlGlobe className='icon'/>
                <div className="emails">
                    <h3>11,000 <span>+89</span></h3>
                    <p>E-mail</p>
                </div>
                <div className="socialShares">
                    <h3>145 <span>+89</span></h3>
                    <p>Social Share</p>
                </div>
                <div className="uniqueLinks">
                    <h3>145 <span>+89</span></h3>
                    <p>Unique Links</p>
                </div>
            </div>
        </div>

        {/* Total Purpose Section */}
        <div className="totalPurpose">
            <div className="heading">
                <h3>Total Purpose</h3>
            </div>
            <div className="content">
                <IoMdLink className='icon'/>
                <h3>11</h3>
            </div>
        </div>
    </div>
  )
}

export default Overview
