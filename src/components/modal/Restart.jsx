import React from 'react'

const Restart = () => {
  return (
    <div className='restart'>
        <h3>Restart Game?</h3>
        <div className="restart_btn">
            <button className='btn btn-sm '>no, cancel</button>
            <button className='btn btn-sm btn--secondary'>yes, restart</button>
        </div>


    </div>
  )
}

export default Restart