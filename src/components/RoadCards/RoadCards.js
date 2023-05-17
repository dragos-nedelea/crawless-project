import React from 'react'
import './RoadCards.scss'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';



function RoadCards() {
    return (
        <div>
            <div>
                <h1 className='header1'>we’ve got you covered at every step
                    of your automation journey</h1>
            </div>
            <div className='container CardContainer'>
                <div className='Card'>
                    <img src={card1} className='CardIMG' />
                    <Card.Body>
                        <h1 className='text-center cardTitle'>Develop</h1>
                        <p className='text-center cardText'>
                            Develop, test and maintain any workflow <br />
                            with an Integrated Development <br />
                            Environment that has everything you need.

                        </p>
                    </Card.Body>
                </div>
                <div className='Card'>
                    <img variant="top" src={card2} className='CardIMG' />
                    <Card.Body>
                        <h1 className='text-center cardTitle'>Run</h1>
                        <p className='text-center cardText'>
                            Focus on what really matters. Run <br />
                            workflows with one click on our highly <br />
                            performant Edge computing infrastructure.
                        </p>
                    </Card.Body>
                </div>
                <div className='Card'>
                    <img variant="top" src={card3} className='CardIMG' />
                    <Card.Body>
                        <h1 className='text-center cardTitle'>Monitor</h1>
                        <p className='text-center cardText'>
                            Stay on track with real-time workflow <br />
                            monitoring. Implement custom metrics that <br />
                            fit your project needs.
                        </p>
                    </Card.Body>
                </div>
            </div>
        </div>
    )
}

export default RoadCards