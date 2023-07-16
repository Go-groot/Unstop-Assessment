import NewInput from './NewInput';
import Assesments from './Assesments';
import {HiOutlineSearch} from 'react-icons/hi';
import {RiFilterFill} from 'react-icons/ri';
import {MdOutlineBarChart} from 'react-icons/md'

const MyAssesments = ({openModal}) => {

  return (
    <div className='myAssessmentsContainer'>
        <div className="heading">
          <div className="left">
            <h3>My Assessments</h3>          
          </div>
          <div className="right">
            <HiOutlineSearch />
            <RiFilterFill />
            <MdOutlineBarChart />
          </div>
        </div>
        <div className="components">
            <NewInput className='comp' openModal={openModal}/>
            <Assesments className='comp'/>
            <Assesments className='comp'/>
        </div>
    </div>
  )
}

export default MyAssesments
