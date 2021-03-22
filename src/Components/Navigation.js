import React from 'react';

function Navigation({children}) {
  return (
    <div className='top-nav'>
      <div className='nav-left'>
        <div className='logo'>NEWS PORTAL</div>
        <div className='search'>{children}</div>
      </div>
      <div className='nav-right'>LOGIN</div>
    </div>
  )
}

export default Navigation;