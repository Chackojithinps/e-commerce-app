import React from 'react'
import './styles.css'
const Loader = () => {
  return (
    <div className='loader-container'>
       <div className='loader'></div>
       <h2>Loading...</h2>
       <p className='loader-p'>This may take a few seconds, please don't close this page.</p>
    </div>
  )
}

export default Loader
