import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import ItemDetail from '../pages/ItemDetails';
// [React Router Steps]
// 1)Create the Page Components
// 2)BrowserRouter adds the ability to assign components to a route
// 3)Route matches the URl to a path then renders
// the component for that particular path

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* exact prop tells Router component to match path exactly */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/shop/:id">
            <ItemDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
