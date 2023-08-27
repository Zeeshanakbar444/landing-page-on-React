
import React from "react"

import Carousel from 'react-bootstrap/Carousel';
import image from "../images/1p.jpg"
import image2 from "../images/2p.jpg"
import image3 from "../images/3p.jpg"
import './body.css'
import Button from 'react-bootstrap/Button';
import Card from "./card.jsx";

const Body = () => {





    return (
        <>
        
            <div className="zee">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="img "
                            src={image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5 className="h5">First slide label</h5>
                            <p className="para">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button className="btn" variant="outline-primary">Primary</Button>{' '}
                            <Button className="btn" variant="warning">Warning</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img"
                            src={image2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5 className="h5">Second slide label</h5>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button className="btn" variant="outline-primary">Primary</Button>{' '}
                            <Button className="btn" variant="warning">Warning</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img"
                            src={image3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5 className="h5">Third slide label</h5>
                            <p className="para">
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            <Button className="btn" variant="outline-primary">Primary</Button>{' '}
                            <Button className="btn" variant="warning">Warning</Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="card-div">
                <Card />
                <Card />
                <Card />
            </div>


            <br />
            <br />
            <br />
            <br />
        </>

    )

}
export default Body