import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelContext from "./context/ModelContext";
import Model from "./components/Model";

function App() {
  const [state, dispatch] = useState({ modelStatus: false });

  const openModel = () => {
    dispatch({ modelStatus: true });
  };

  const closeModel = () => {
    dispatch({ modelStatus: false });
  };

  return (
    <Router>
      <ModelContext.Provider value={{ state, dispatch, openModel, closeModel }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ModelContext.Provider>
    </Router>
  );
}

export default App;
