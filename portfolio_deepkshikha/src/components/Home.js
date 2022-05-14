import Carousel from 'react-bootstrap/Carousel'
import sky from '../assets/sky.png'
import Footer from './Footer'
function Home() {
    return (
        <div className='home'>
            <div className="full-flex">
                <div className="blur-box"></div>
                <div className="thoughts-carousel">
                <div className="carousel-container">
                <span className="carousel-heading">One thought experiment a day...</span>
                <Carousel>
            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={sky}
                alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={sky}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={sky}
                alt="Third slide"
                />

            </Carousel.Item>
            </Carousel>
                </div>
            </div>

            </div>
            <Footer></Footer>
        </div>
      );
}

export default Home;