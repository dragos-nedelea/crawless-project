import React from 'react'
import './DownloadComponent.css'
import Button from 'react-bootstrap/Button'
import vect1 from '../../assets/LeftTopVect.png'
import vect2 from '../../assets/LeftBotVect.png'
import vect3 from '../../assets/RightVect.png'
import icon1 from '../../assets/AppleLogo.png'
import icon2 from '../../assets/WindowsLogo.png'
import icon3 from '../../assets/LinuxLogo.png'



function DownloadComponent() {
  return (
    <div className='DownloadMain'>
      <div className='d-flex flex-column VectorMain'>
        <img src={vect1} className='Vect1'></img>
        <img src={vect2} className='Vect2'></img>
        <img src={vect3} className='Vect3'></img>
        <div className='mx-auto ContextDownload'>
          <h1 className='text-center DownloadHeader1'>available for desktop</h1>
          <p className='text-center DownloadText1'>download, install and create web automation workflows now</p>
          <div className='my-5 d-flex'>
          <Button className='mx-3 DownloadBtn'><img src={icon1} className='mx-2'></img><span className='mx-2'>MacOs High Sierra +</span></Button>
          <Button className='mx-3 DownloadBtn'><img src={icon2} className='mx-2'></img><span className='mx-2'>Microsoft Windows 10 64Bit</span></Button>
          <Button className='mx-3 DownloadBtn'><img src={icon3} className='mx-2'></img><span className='mx-2'>Linux</span></Button>
          </div>
          <div className='d-flex'>
          <Button className='mx-auto DownloadBtn2'>GET STARTED</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadComponent