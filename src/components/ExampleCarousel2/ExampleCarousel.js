import { React, useState } from "react"
import './ExampleCarousel2.scss'
import { Carousel, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import icon1 from '../../assets/Fast.png'
import icon2 from '../../assets/Scalable.png'
import icon3 from '../../assets/Incognito.png'
import image1 from '../../assets/ImageFast.jpeg'
import image2 from '../../assets/ImageScalable.jpeg'
import image3 from '../../assets/ImageIncognito.png'


function ExampleCarousel2() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };



    return (
        <div className="container-fluid" id="carousel" data-bs-ride="true">
            <Nav variant="tabs"
                activeKey={index}
                onSelect={handleSelect} id="slideTabs">
                <Nav.Item>
                    <Nav.Link eventKey={0} data-target="#carousel" data-slide-to={0} className="d-flex slideTab mx-2"><img src={icon1}></img> <span className="TabText">FAST</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={1} data-target="#carousel" data-slide-to={1} className="d-flex slideTab mx-2"><img src={icon2}></img> <span className="TabText">SCALABLE</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={2} data-target="#carousel" data-slide-to={2} className="d-flex slideTab mx-2"><img src={icon3}></img> <span className="TabText">INCOGNITO</span></Nav.Link>
                </Nav.Item>
            </Nav>
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <div className="carouselMain d-flex">
                        <div className="d-flex flex-column TextDiv">
                            <h1 className="VisHeading my-2"><span>speed</span> matters</h1>
                            <p className="m-0 VisP1 my-1">with lower processing times, the infrastructure can handle higher volumes while maintaining quick response times required to automate a tasks, providing you with cost-effective, efficient and streamlined web automation services</p>
                            <Button className="exploreBtn">EXPLORE EDGE &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image1} className="image img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex">
                        <div className="d-flex flex-column TextDiv">
                            <h1 className="VisHeading my-2"><span>volume</span> handled</h1>
                            <p className="m-0 VisP1 my-1">scale computing resources up or down in real-time, we’ll ensure you always have the right volume that meets your web automation needs, our infrastructure can handle even the most demanding web automation tasks, while enjoying lightning-fast speeds and high performance</p>
                            <Button className="exploreBtn">EXPLORE EDGE &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image2} className="image img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex">
                        <div className="d-flex flex-column TextDiv">
                            <h1 className="VisHeading my-2"><span>privacy</span> granted</h1>
                            <p className="m-0 VisP1 my-1">we understand the importance of privacy and security in today's digital landscape, that’s why our web automation workflows always run in incognito and with ad-block enabled, we ensure your web automation activity will remain private and secure</p>
                            <Button className="exploreBtn">EXPLORE EDGE &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image3} className="image img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ExampleCarousel2