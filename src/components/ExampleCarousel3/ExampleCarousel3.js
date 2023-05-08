import { React, useState } from "react"
import './ExampleCarousel3.css'
import { Carousel, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import icon1 from '../../assets/iconDownload.png'
import icon2 from '../../assets/iconShare.png'
import icon3 from '../../assets/iconVControl.png'
import image1 from '../../assets/ImageCarousel3.png'




function ExampleCarousel3() {
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
                    <Nav.Link eventKey={0} data-target="#carousel" data-slide-to={0} className="d-flex slideTab mx-2"><img src={icon1}></img> <span className="TabText">On-click install</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={1} data-target="#carousel" data-slide-to={1} className="d-flex slideTab mx-2"><img src={icon2}></img> <span className="TabText">Share</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={2} data-target="#carousel" data-slide-to={2} className="d-flex slideTab mx-2"><img src={icon3}></img> <span className="TabText">Version control system</span></Nav.Link>
                </Nav.Item>
            </Nav>
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <div className="carouselMain d-flex">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Import/export workflow and tasks</h1>
                            <p className="m-0 VisP1 my-1">Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blandit turpis cursus in hac habitasse platea.</p>
                            <Button className="exploreBtn">Explore Store features &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image1} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex ">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Import/export workflow and tasks</h1>
                            <p className="m-0 VisP1 my-1">Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blandit turpis cursus in hac habitasse platea.</p>
                            <Button className="exploreBtn">Explore Store features &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image1} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselMain d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <h1 className="VisHeading my-2">Import/export workflow and tasks</h1>
                            <p className="m-0 VisP1 my-1">Et malesuada fames ac turpis egestas. Mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Tristique sollicitudin nibh sit amet commodo. Blandit turpis cursus in hac habitasse platea.</p>
                            <Button className="exploreBtn">Explore Store features &#62;</Button>
                        </div>
                        <div className="w-auto">
                            <img src={image1} className="image3 img-fluid"></img>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default ExampleCarousel3