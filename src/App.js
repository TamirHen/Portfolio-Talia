import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div style={{ padding: "0px 115px" }}>
            <Header />
            <Route path="/">
              <Body />
            </Route>
          </div>
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;
