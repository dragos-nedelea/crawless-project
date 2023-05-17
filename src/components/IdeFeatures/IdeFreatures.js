import React from 'react'
import './IdeFeatures.scss'
import icon from '../../assets/ide.png'

function IdeFreatures() {
    return (
        <div className='container IdeMain'>
            <div>
                <img class="mx-auto d-block IdeIcon" src={icon}></img>
                <h1 className='m-auto IdeHeading1 my-3'>Crawless IDE — the most advanced
                    workflow development tool on the market</h1>
            </div>
            <div>
                <h4 className='m-auto IdeHeading2'>Develop any data automation or web scraping workflow with minimum effort and maximum control.</h4>
            </div>
        </div>
    )
}

export default IdeFreatures