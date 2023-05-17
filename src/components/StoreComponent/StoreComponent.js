import React from 'react'
import './StoreComponent.scss'
import icon1 from '../../assets/StoreIcon.png'

function StoreComponent() {
    return (
        <div className='container StoreContainer'>
            <div className='d-flex flex-column justify-content-center'>
                <img src={icon1} className='mx-auto my-5 StoreIcon'></img>
                <h1 className='StoreHeading1'>Crawless Store —the shortest way to create your bots </h1>
                <p className='StoreText1'>Browse ready-made tasks and workflows from the growing community around the world</p>
            </div>
        </div>
    )
}

export default StoreComponent