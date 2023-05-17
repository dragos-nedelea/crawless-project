import React from 'react'
import './FeaturesCont.scss'
import icon1 from '../../assets/iconDoc.png'
import icon2 from '../../assets/iconCollab.png'
import icon3 from '../../assets/iconFreeComp.png'
import image1 from '../../assets/imageFeature.png'



function FeaturesCont() {
    return (
        <div className='container featureMain'>
            <div className='featureIntrig'>
                <h1 className='IntrigText d-flex flex-column'>
                    ... and more,<br/>
                    to help you evolve towards the web automation era
                </h1>
                <img src={image1} className='align-items-end FeatureImg'></img>

            </div>
            <div className='featureDesc'>
                <div className='my-5 featureCard'>
                    <img src={icon1} className='mb-3'></img>
                    <h1 className='DocHeader my-3'>Documentation</h1>
                    <p className='DocText'>allows developers to create and manage markdown documentation within the IDE, making it easy to keep track of the project's progress and share information with team members.</p>

                </div>
                <div className='my-5 featureCard'>
                    <img src={icon2} className='my-3'></img>
                    <h1 className='DocHeader my-3'>Collaboration</h1>
                    <p className='DocText'>essential for team-based software development, enabling developers to work together, share knowledge, and deliver high-quality code</p>

                </div>
                <div className='my-5 featureCard'>
                    <img src={icon3} className='my-3'></img>
                    <h1 className='DocHeader my-3'>Free Computing</h1>
                    <p className='DocText'>enables developers to run their code on a local environment for free, providing an accessible and cost-effective solution for testing and debugging projects</p>

                </div>

            </div>
        </div>
    )
}

export default FeaturesCont