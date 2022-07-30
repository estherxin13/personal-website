import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import { Interests } from "./pages/interests";
import NavImport from "./Components/NavBar/navImport";
import { Footer } from "./Components/footer";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavImport />
      <Route exact path="/interests" component={Interests} />
      <Route exact path="/" component={Home} />
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
