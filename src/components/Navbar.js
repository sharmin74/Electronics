import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import './Navbar.css'
import logo from './photos/logo1.jpg'

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    function changeBg(){
        if(window.scrollY >= 100){
            setNavbar(true)
        }   else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBg)
    return (
        <div className={navbar ? 'navbar navbar__small active': 'navbar navbar__small'}>
            <Link  className='navbar__eachItem' to='/'>
                <div className='navbar__logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </Link>
            <div className='navbar__items'>
                <ul>
                    <Link  className='navbar__eachItem' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link  className='navbar__eachItem' to='/about'>
                        <li>About Us</li>
                    </Link>
                    <Link  className='navbar__eachItem' to='/products'>
                        <li>Our Products</li>
                    </Link>
                    <Link  className='navbar__eachItem' to='/contact-us'>
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
