import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Community from './pages/community';
import NavImport from './Components/NavBar/navImport';




function App() {
  return (
    <BrowserRouter>
      <NavImport />
      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );

}

export default App;