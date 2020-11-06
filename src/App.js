import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Products from './components/Products';
import Home from './components/Home';

function App() {
    return (
        <>
        <Router>
        <div className='app'>
        <Navbar />
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/products'>
                    <Products />
                </Route>
                <Route path='/contact-us'>
                    <Contact />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
        </Router>
        </>
    )
}

export default App
