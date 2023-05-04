import React from 'react'
import './HeroHome.css'
import banner from '../../assets/banner.png'
import Button from 'react-bootstrap/Button'

function HeroHome() {
    return (
        <div className="container HeroSection">
            <div className='container'>
                <h1 className='HeroHeading1'>one app <br />
                    endless possibilities</h1>
                <h4 className='HeroHeading2'>world’s first distributed data automation ecosystem</h4>
                <h6 className='HeroHeading3'>the all-in-one tool for workflow development, running and monitoring</h6>
                <div>
                    <Button id='startBtn'>/start</Button>
                    <Button id='devBtn'>for developers &#62;</Button>
                </div>
            </div>
            <div>
                <img src={banner} className='HeroImage'></img>
            </div>
        </div>)
}

export default HeroHome