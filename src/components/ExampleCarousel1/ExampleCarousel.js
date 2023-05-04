import { React, useState } from "react"
import './ExampleCarousel.css'
import { Carousel, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import icon1 from '../../assets/iconbase.png'
import icon2 from '../../assets/iconBrowser.png'
import icon3 from '../../assets/iconVirt.png'
import icon4 from '../../assets/iconQueue.png'
import icon5 from '../../assets/iconLogs.png'
import icon6 from '../../assets/iconStorage.png'
import image1 from '../../assets/leftImage1.jpeg'
import image2 from '../../assets/leftImage2.jpeg'
import image3 from '../../assets/leftImage3.jpeg'
import image4 from '../../assets/leftImage4.jpeg'
import image5 from '../../assets/leftImage5.jpeg'
import image6 from '../../assets/leftImage6.jpeg'
import icon7 from '../../assets/iconVscode.png'
import icon8 from '../../assets/iconClipart.png'
import icon9 from '../../assets/iconSublime.png'



function ExampleCarousel() {

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
                    <Nav.Link eventKey={0} data-target="#carousel" data-slide-to={0} className="d-flex slideTab mx-2"><img src={icon1}></img> <span className="TabText">Code editor</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={1} data-target="#carousel" data-slide-to={1} className="d-flex slideTab mx-2"><img src={icon2}></img> <span className="TabText">Browser</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={2} data-target="#carousel" data-slide-to={2} className="d-flex slideTab mx-2"><img src={icon3}></img> <span className="TabText">Virtual CSS selectors</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={3} data-target="#carousel" data-slide-to={3} className="d-flex slideTab mx-2"><img src={icon4}></img> <span className="TabText">Queue</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={4} data-target="#carousel" data-slide-to={4} className="d-flex slideTab mx-2"><img src={icon5}></img> <span className="TabText">Logs</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={5} data-target="#carousel" data-slide-to={5} className="d-flex slideTab mx-2"><img src={icon6}></img> <span className="TabText">Storage</span></Nav.Link>
                </Nav.Item>
            </Nav>
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <div className="carouselMain d-flex">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Revolutionising workflow development with a powerful JavaScript code editor</h1>
                            <p className="m-0 VisP1 my-1">Our editor is designed to simplify data automation and web scraping workflows development. With a high-level SDK, developers can control and interact with any web page, API, or database, making automation and data scraping fast and easy. </p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image1} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex ">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Build powerful automation workflows with ad-free headless Chrome</h1>
                            <p className="m-0 VisP1 my-1">Our headless Chrome browser with integrated ad-blocking makes it easy for developers to build automation workflows in one place. With distraction-free browsing, developers can test and debug automation workflows directly within the app. Perfect for web scraping or browser automation projects.</p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image2} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Simplify workflow development with CSS selector feature</h1>
                            <p className="m-0 VisP1 my-1">Our CSS selector feature simplifies web automation and web scraping workflows by making it easier for developers to find DOM elements on a web page. With this tool, developers can easily and quickly target specific elements, reducing the time and effort needed for development. Whether you're building a web scraper or automating a repetitive task, our CSS selector feature is a must-have tool for any developer.</p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image3} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Enhance your web automation with a visual and filterable task queue</h1>
                            <p className="m-0 VisP1 my-1">Supercharge your web automation workflow with our visual and filterable task queue. Get all the essential details you need, including task status, creation date, arguments, and more - all available in table and JSON formats. Say goodbye to slow and cumbersome processes and get your tasks completed with lightning speed.</p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image4} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Optimise web automation with advanced log filtering for efficient debugging</h1>
                            <p className="m-0 VisP1 my-1">Our log filtering feature is a must-have for efficient web automation and web scraping workflows. With the ability to quickly filter logs by log level, date, task name, and log message, developers can easily debug, test, and troubleshoot their workflows. This streamlined approach saves time and effort while ensuring high-quality results. Upgrade your workflow with our log filtering feature today.</p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image5} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Maximise web automation efficiency with easy data storage and management</h1>
                            <p className="m-0 VisP1 my-1">Boost your web automation workflow with easy data storage and management. This feature supports popular databases like MongoDB, PostgreSQL, MySQL, Elasticsearch, Redis, as well as file storage systems like , CSV, S3, and more. Efficiently store and organise your data using advanced sorting and filtering options to view it in table or JSON format.</p>
                            <p className="m-0 VisP2">Replaces:</p>
                            <div className="d-flex">
                                <img src={icon7} className="replaceIcon"></img>
                                <img src={icon8} className="replaceIcon"></img>
                                <img src={icon9} className="replaceIcon"></img>
                            </div>
                            <Button className="exploreBtn">Explore IDE features</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image6} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ExampleCarousel