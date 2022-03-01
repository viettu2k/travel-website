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

  return (
    <Router>
      <Switch>
        <ModelContext.Provider value={{ state, dispatch, openModel }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </ModelContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
