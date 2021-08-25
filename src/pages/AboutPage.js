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
                            ...

                        </Card.Text>
                    </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default AboutPage

