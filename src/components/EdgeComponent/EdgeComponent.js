import React from 'react'
import './EdgeComponent.scss'
import icon1 from '../../assets/EdgeIcon.png'
import icon2 from '../../assets/EdgeActive.png'
import icon3 from '../../assets/EdgeCPU.png'
import icon4 from '../../assets/CPUFreq.png'
import icon5 from '../../assets/EdgeRam.png'
import icon6 from '../../assets/EdgeGPU.png'





function EdgeComponent() {
    return (
        <div className='container EdgeContainer'>
            <div className='d-flex flex-column justify-content-center'>
                <img src={icon1} className='mx-auto my-5 EdgeIcon'></img>
                <h1 className='EdgeHeading1'>crawless EDGE — compute them all</h1>
                <p className='EdgeText1'>world’s first distributed web automation infrastructure</p>
            </div>
            <div className='d-flex EdgeCards'>
                <div className='mx-4 EdgeCard'>
                    <img src={icon2} className='mx-auto my-4'></img>
                    <p className='CardTitle'>Active devices</p>
                    <p className='CardNumber'>1,400</p>
                </div>

                <div className='mx-4 EdgeCard'>
                    <img src={icon3} className='mx-auto my-4'></img>
                    <p className='CardTitle'>CPU Cores</p>
                    <p className='CardNumber'>806</p>
                </div>

                <div className='mx-4 EdgeCard'>
                    <img src={icon4} className='mx-auto my-4'></img>
                    <p className='CardTitle'>CPU Frequency</p>
                    <p className='CardNumber'>64,000</p>
                    <p className='CardSI'>GHz</p>
                </div>

                <div className='mx-4 EdgeCard'>
                    <img src={icon5} className='mx-auto my-4'></img>
                    <p className='CardTitle'>RAM</p>
                    <p className='CardNumber'>78,606</p>
                    <p className='CardSI'>GB</p>
                </div>

                <div className='mx-4 EdgeCard'>
                    <img src={icon6} className='mx-auto my-4'></img>
                    <p className='CardTitle'>GPU RAM</p>
                    <p className='CardNumber'>32,056</p>
                    <p className='CardSI'>GB</p>
                </div>
            </div>
        </div>
    )
}

export default EdgeComponent