import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
import { useState } from 'react';

const ImageCarousel = ({images}) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="imageCarousel">
          <Carousel activeIndex={index} onSelect={handleSelect}>
          {images.map((each,key) => (            
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                src={each.default}
                alt="First slide"
              />
            </Carousel.Item>   
          ))}
          </Carousel>          
        </div>
    )
}

export default ImageCarousel
