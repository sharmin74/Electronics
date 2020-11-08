import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>Copyright {date}. Volt-Amp Logic Controls</p>
        </div>
    )
}

export default Footer
