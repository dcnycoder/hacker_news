import css from './css'
import React from 'react'

const Bootstrap = () => {
  return <div className='containter'>
    Grid
    <div className='row'>
      <div className='col' color='red'>
        column 1
      </div>
      <div className='col'>
        column 2
      </div>
      <div className='col'>
        column 3
      </div>
    </div>
  </div>
}

export default Bootstrap
