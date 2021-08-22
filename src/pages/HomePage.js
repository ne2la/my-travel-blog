import {Container,Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import '../Styles/HomePage.css'

const HomePage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
        <h4 className="homePageTitle"> Welcome to My BloG </h4>
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{width:'83%',marginLeft:'8%'}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/2.jpg").default}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/1.jpg").default}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/4.jpg").default}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/5.jpg").default}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/6.jpg").default}
                    alt="First slide"
                    />
                </Carousel.Item>
    </Carousel>   

        </Container>

        <h4 className="homePageSubTitle"> On this website You can find Beautiful Destinations where I have visited... <br/>
        </h4>

        <div className="homeBody">

                <div className="box1">
                    <div className="boxContent">
                        <h1 className="homeH1"> 01. Stunning Beaches</h1>
                        <p className="boxPara">
                            Rapidly gaining international popularity as one of the most beautiful beach 
                            destinations in the world, the island nation of Sri Lanka offers a range of 
                            landscapes, from rainforests to endless miles of powdery, white-sand beach. 
                            The natural beauty is accented by a cultural history dating back thousands of years. 
                            Getting to Sri Lanka is also easier than ever, with direct flights from many European, 
                            Asian, and Arabian airline hubs. Advance planning is a must as the country has two 
                            monsoon seasons, affecting different areas of the island at different times. 
                            Resorts and beaches in the west and southwest should be avoided from May through 
                            September, and locations in the east and north have their monsoon season 
                            from October through February.

                        </p>
                    </div>
                </div>

                <div className="box2">
                <div className="boxContent">
                    <h1 className="homeH1"> 02. Beautiful Mountain </h1>
                    <p className="boxPara">
                    Sri Lanka is well known all over the world for its beautiful mountains and the scenic beauty
                     that comes as a plus with it. The central and southern parts of the country are dotted with
                      a lot of rugged mountains and peaks. These places are of high ecological value and are 
                      biologically diverse. The mountains of Sri Lanka have well-preserved forest areas and they 
                      also form the origin of a lot of rivers in the country. The Sri Pada Mountain of Sri Lanka 
                      is the holy peak to which pilgrims from across the world visit to worship the footprint of Lord Buddha. 
                      This country is also home to many waterfalls and is famous worldwide for its tea plantations.
                    </p>
                    <p>
                      The weather conditions of this country are almost stable throughout the year with low temperatures. 
                      Huge mountains covered in lush greenery and occasionally marked by waterfalls are the features of the 
                      country that make it starkly beautiful. Sri Lankan towns such as Nuwara Eliya with their majestic 
                      sightseeing opportunities and mountains in Sri Lanka are what makes the country remarkable.

                    </p>
                    </div>
                </div>

                <div className="box3">
                <div className="boxContent">
                    <h1 className="homeH1"> 03. Amazing waterfalls </h1>
                    <p className="boxPara">
                    May it be an elegantly cascading beauty that requires a few hours of hiking to reach, or a gushing mass 
                    of impatient waterfall you randomly encounter by the roadside, Sri Lanka has it all covered. 
                    Having the highest waterfall density in the world with a recorded 382 waterfalls spread throughout the country, 
                    Sri Lanka is the place to be to see all kinds of waterfalls.
                    Fed by two half-yearly monsoons, rivers rush down the rocky precipices and form spectacular waterfalls. 
                    Only some of these picturesque waterfalls can be viewed with ease as the others are located inside thick 
                    forests and around tea plantations.
                    </p>
                    <p>
                    The waterfalls in Sri Lanka are well distributed and are not confined to the hill country. Colombo District 
                    has four waterfalls; two of which are just four meterseach, with the others being 10m and 15m. Kurunegala District 
                    has just one of six meters andGampaha and Hambantota districts have two each.
                    The largest number of waterfalls are in the Ratnapura district (109) followed by Nuwara Eliya (75) and Kegalle (40). 
                    Some of the waterfalls have interesting folk tales and legends attached to them.
                    </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage
