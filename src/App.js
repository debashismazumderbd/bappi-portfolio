import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/blogs">
            <h1>Blog Coming Soon</h1>
          </Route>
          <Route path="*">
            <h1>Route not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
