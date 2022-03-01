import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const sliderHeight = "400px";
    return (
        <div>
            <section id="top-banner" className="">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/slider/1.jpg"
                            height={sliderHeight}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Going For A Vaction?</h3>
                            <p>Find best travel plan for your vaction and book from home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/slider/2.jpg"
                            height={sliderHeight}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Going For A Vaction?</h3>
                            <p>Find best travel plan for your vaction and book from home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/slider/3.jpg"
                            height={sliderHeight}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Going For A Vaction?</h3>
                            <p>Find best travel plan for your vaction and book from home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default Home;