import React from 'react'
import './header.css'
import Mainheader from './mainheader'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<div className='main'>
	<Mainheader/>
    <nav>
    <ol>
	   <li><Link to="/">HOME</Link></li>
	   <li><Link to="/men">MEN</Link></li>
	   <li><Link to="/women">WOMEN</Link></li>
	   <li><Link to="/about">ABOUT</Link></li>
	   <li><Link to="/contact">CONTACT</Link></li>
	</ol>
	      
</nav>
</div>
  )
}

export default Header