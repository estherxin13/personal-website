import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import  Home from './pages/home';
import {About} from './pages/about';
import { Community } from './pages/community';
import NavImport from './Components/NavBar/navImport';
import { Footer } from './Components/footer';
import { WellifyDetails } from './pages/wellifyDetails';
import { SiteDetails } from './pages/siteDetails';
import { RBCDetails } from './pages/rbcDetails';
import { NasaDetails } from './pages/nasaDetails';

function App() {
  return (
    <BrowserRouter>
      <NavImport />
      <Route path="/about" component={About} />
      <Route path="/wellify" component={WellifyDetails} />
      <Route path="/personalWebsite" component={SiteDetails} />
      <Route path="/rbc" component={RBCDetails} />
      <Route path="/Nasa" component={NasaDetails} />
      <Route path="/community" component={Community} />
      <Route exact path="/" component={Home} />
      <Footer />
    </BrowserRouter>
  );

}

export default App;