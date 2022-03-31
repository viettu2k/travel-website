import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import SharedProvider from "./context/providers/SharedProvider";
import GalleryProvider from "./context/providers/GalleryProvider";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";
import DestinationsProvider from "./context/providers/DestinationsProvider";
import Details from "./pages/Details";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <SharedProvider>
                <Toggle />
                <Nav />
                <HelmetProvider>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/details/:id" component={Details} />
                    <Route component={NotFound} />
                  </Switch>
                </HelmetProvider>
              </SharedProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
