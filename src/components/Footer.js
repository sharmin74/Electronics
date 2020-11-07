import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>Copyright {date}</p>
        </div>
    )
}

export default Footer
