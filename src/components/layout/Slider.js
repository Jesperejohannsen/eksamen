import React from 'react';
import slide1 from '../Images/slide1.jpg' 
import slide2 from '../Images/slide2.jpg' 
import slide3 from '../Images/slide3.jpg'

//hentet fra 
import Carousel from 'react-bootstrap/Carousel'

const Header = () => {
    return (
                       
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Det først brød"
    />
    <Carousel.Caption>
      <h2 className="logo">Vi elsker at lave brød</h2>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Godt brød"
    />

    <Carousel.Caption>
      <h2 className="logo">Vi elsker at lave brød</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="blød brød"
    />

    <Carousel.Caption>
      <h2 className="logo">Vi elsker at lave brød</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
 )}
export default Header;