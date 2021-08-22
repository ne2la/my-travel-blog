import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/AboutPage.css'
import { Card } from "react-bootstrap"
import abtMeImg from '../images/AboutMe.jpg'


const AboutPage = () => {

    return (
        <>
            <div className="aboutMeMain">
            <Card style={{paddingBottom:'2%',backgroundColor:'#f2f3f4'}} border="primary">
                <Card.Img variant="top" src= {abtMeImg} style={{paddingLeft:'30%',paddingRight:'30%',paddingTop:'2%'}}/>
                    <Card.Body>
                        <Card.Text>
                            I am Madushan Lakshitha Neelananda an Undergraduate
                            student in Informatics Institute of technology. I'm Creative Full Stack Web Developer. 
                            A highly organized, dedicated Software Engineer. 
                            My technical skills include React, HTML, CSS, Java Script, React Native, Node JS, 
                            Java, Python and much more

                        </Card.Text>
                    </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default AboutPage

