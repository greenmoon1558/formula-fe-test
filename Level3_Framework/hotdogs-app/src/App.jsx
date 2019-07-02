import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Contact } from "./pages";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/contact/" component={Contact} />
    </Router>
  );
}

export default App;
