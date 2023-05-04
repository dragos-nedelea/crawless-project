import React from 'react'
import './VideoExample.css'
import vIMG from '../../assets/vIMG.png'
import StartBtn from '../../assets/Start.png'

function VideoExample() {
  return (
    <div className='container VideoMain'>
      <div className='d-flex flex-column container'>
        <img src={vIMG} className='mx-auto img-fluid'></img>
        <img src={StartBtn} className='mx-auto StartBtn'></img>
        <h1 className='VideoText'>Web automation with crawless
          in 30 seconds</h1>
       
      </div>
    </div>
  )
}

export default VideoExample