import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Header.css";
import UserImage from '../assets/images/user.jpg'

const Header = () => {
  return (
    <div>
    <div className='container navbar'>
    <div className='logo'>
    
    <Link to='/'className='text-decoration-none text-dark' ><h2 className='logo-title '>Quiz-App</h2></Link>
    </div>
    <ul className='quiz-links'>

<li ><Link to='/quiz-home' className='text-decoration-none list-style-none text-black'>Take Quiz</Link></li>

    </ul>

    <div className='user'>
    <img src={UserImage} alt="UserImage" />
    </div>
    </div>
    </div>
  )
}

export default Header