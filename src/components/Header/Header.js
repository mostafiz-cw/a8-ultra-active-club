import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img
          className='header-logo'
          src='https://i.postimg.cc/MGDkYdc0/5eb3cb4bc8c459000443515c.png'
          alt=''
        />
        <h3 className='gym-name'>Power GYM</h3>
      </div>
      <h4 className='body-text'>Select your exercise for today & find total time</h4>


    </div>
  )
}

export default Header
