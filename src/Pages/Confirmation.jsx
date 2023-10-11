import React from 'react'
import '../Components/styles/Confirmation.css'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const Confirmation = () => {
  return (
    <div className='gen-container'>
      <div className="primary-container">
        <div className="overlay-container">
          <div className="content">
            <div className="icon">
              <IoMdCheckmarkCircleOutline size={110}/>
            </div>
            <h2>THANK YOU</h2>
            <p>BOOKING PROCESS IS SUCCESSFULLY COMPLETED</p>
            <button>
              Print ticket
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Confirmation