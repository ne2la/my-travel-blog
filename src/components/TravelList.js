import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,Row,Container} from 'react-bootstrap'


const TravelList = ({travelStops}) => {

    return (
        <>
        <Container>
            <div style={{marginBottom:'5%'}}>
            <Row className="mb-3">
          {travelStops.map((item,key) => (
              <>
              <Card border="primary" bg='light' style={{ width: '18rem',margin:'10px'}} key={key} className="mb-3">
                <Card.Img variant="top" src={item.images[0].default} className="cardImg" style={{maxHeight:'200px'}}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.details[0].substring(0,150)} ......
                        <Card.Link href={`/travel/${item.name}`} variant="primary"> Read More!</Card.Link>
                    </Card.Text>
                    
                </Card.Body>
              </Card>
              </>
          ))}
          </Row>
          </div>
        </Container>
        </>
    )
}

export default TravelList
