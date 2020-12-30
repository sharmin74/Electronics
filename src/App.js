import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Products from './components/Products';
import Homecare from './components/Homecare';
import Bottles from './components/Bottles';
import Home from './components/Home';
import SideDrawer from './components/SideDrawer';
import  Backdrop from './Backdrop';

function App() {
    const [sideDrawer, setSideDrawer] = useState(false);
    function setDrawer(){
        setSideDrawer((prevValue) => {
            return !prevValue;
        })
    }
    function backdropClickHandler(){
        setSideDrawer(false);
    }
    let backdrop;
    if(sideDrawer){
        backdrop = <Backdrop click={backdropClickHandler} />
    } 
    return (
        <>
        <Router>
        <div className='app' style={{height: "100%"}}>
        <SideDrawer show={sideDrawer} click={backdropClickHandler} />
        {backdrop}
            <Switch>
                <Route path='/about'>
                    <Navbar click={setDrawer} />
                    <About />
                </Route>
                <Route path='/products'>
                    <Navbar click={setDrawer} />
                    <Products />
                </Route>
                <Route path='/bottles'>
                    <Navbar click={setDrawer} />
                    <Bottles />
                </Route>
                <Route path='/homecare'>
                    <Navbar click={setDrawer} />
                    <Homecare />
                </Route>
                <Route path='/contact-us'>
                    <Navbar click={setDrawer} />
                    <Contact />
                </Route>
                <Route path='/'>
                    <Navbar click={setDrawer} />
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
