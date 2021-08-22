import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import TravelList from '../components/TravelList'
import NotFoundPage from './NotFoundPage'
import TravelContent from './TravelContent'
import {Container} from 'react-bootstrap'


const TravelPage = ({match}) => {

    const name = match.params.name
    const currentDestination =  TravelContent.find((currentDestination) => currentDestination.name === name)

    if(!currentDestination) return <NotFoundPage/>
    

    const otherDestinations = TravelContent.filter((otherDestinations) => otherDestinations.name !== currentDestination.name)
    const releventImages = TravelContent.find((releventName) => releventName.name === name)
    const sameDistrictDestinations = otherDestinations.filter((sameCity) => sameCity.location === currentDestination.location)
    const sameCategory = otherDestinations.filter((sameCategory) => sameCategory.category === currentDestination.category) 

    return (
        <>

        <h3 className="travelList-title">{currentDestination.title}</h3>
        <Container>
                    <ImageCarousel images={releventImages.images}/>
                    <div className='paraDiv'>
                    {currentDestination.details.map((item,key) => (
                        <p key={key}>{item}</p>
                    ))}
                    </div>
                                    
            <div style={{marginTop:"0px",float:'left'}}>
                {(sameDistrictDestinations.length > 0) && <div>
                    <hr/>
                    <h3 className="suggest-title"> Experience {currentDestination.location}... </h3>
                    <TravelList travelStops={sameDistrictDestinations}/>
                </div>}
                <hr/>
                {(sameCategory.length > 0) && <div>
                    <h3 className="suggest-title"> Explore more {currentDestination.category}s ... </h3>
                    <TravelList travelStops={sameCategory}/>
                </div>}
            </div>
            </Container>

        </>
    )
}

export default TravelPage
