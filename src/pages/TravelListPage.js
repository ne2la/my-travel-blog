import TravelList from "../components/TravelList"
import TravelContent from './TravelContent' 

const TravelListPage = () => {
    return (
        <div>
            <h4 className="travelList-title"> 
            <div className="destination-icon"> My Destinations <i class="fas fa-route"/> </div>
            </h4>
            <TravelList travelStops={TravelContent}/>            
        </div>
    )
}

export default TravelListPage
