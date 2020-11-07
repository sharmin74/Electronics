import React from 'react'
import './Products.css'
import p1 from './photos/Products/p1.JPG'
import p2 from './photos/Products/p2.JPG'
import p3 from './photos/Products/p3.JPG'
import p4 from './photos/Products/p4.JPG'
import p5 from './photos/Products/p5.JPG'
import p6 from './photos/Products/p6.JPG'
import p7 from './photos/Products/p7.JPG'
import p8 from './photos/Products/p8.JPG'
import p9 from './photos/Products/p9.JPG'
import Button from '@material-ui/core/Button';

function Products() {
    return (
        <div className='products'>
            <h1>Our Products</h1>
            <div className='products__row'>
                <div className='products__col'>
                    <img src={p1} alt="product"/>
                    <h4>Universal Digital Panel Meters</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p2} alt="product"/>
                    <h4>Universal Digital Panel Meters</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p3} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p4} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
            </div>
            <div className='products__row'>
                <div className='products__col'>
                    <img src={p5} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p6} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p7} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p8} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
            </div>
            <div className='products__row'>
                <div className='products__col'>
                    <img src={p9} alt="product"/>
                    <h4>Real Time Switches</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p2} alt="product"/>
                    <h4>Universal Digital Panel Meters</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p3} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
                <div className='products__col'>
                    <img src={p4} alt="product"/>
                    <h4>Universal Timers</h4>
                    <Button variant="contained" color="default">Read more</Button>
                </div>
            </div>
        </div>
    )
}

export default Products
