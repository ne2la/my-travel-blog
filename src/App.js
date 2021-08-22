import './App.css';
import NavBar from './NavBar'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import TravelListPage from './pages/TravelListPage';
import TravelPage from './pages/TravelPage';
import FooterPage from './pages/FooterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Router>
      <NavBar/>
        <div>
        <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/travel-list" component={TravelListPage}/>
        <Route path="/travel/:name" component={TravelPage}/>
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
      <FooterPage/>
      </Router>
    </>
  );
}

export default App;
