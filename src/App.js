import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import ModelProvider from './context/providers/ModelProvider';
import NavProvider from './context/providers/NavProvider';
import SharedProvider from './context/providers/SharedProvider';
import GalleryProvider from './context/providers/GalleryProvider';
import Nav from './components/Nav';
import Toggle from './components/Toggle';
import DestinationsProvider from './context/providers/DestinationsProvider';
import AnimationsProvider from './context/providers/AnimationsProvider';

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Details = lazy(() => import('./pages/Details'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GalleryProvider>
            <DestinationsProvider>
              <SharedProvider>
                <AnimationsProvider>
                  <Toggle />
                  <Nav />
                  <HelmetProvider>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/details/:id' component={Details} />
                        <Route component={NotFound} />
                      </Switch>
                    </Suspense>
                  </HelmetProvider>
                </AnimationsProvider>
              </SharedProvider>
            </DestinationsProvider>
          </GalleryProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
};

export default App;
