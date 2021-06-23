import './App.css';

import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Prices from './components/prices';
import Reviews from './components/reviews';
import Footer from './components/footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Header/>
      <main>
      <Switch>
          <Route exact path ="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/prices" component={Prices} />
          <Route path="/reviews" component={Reviews} />
      </Switch>
      </main>
        <Footer/>
    </Router>
  );
}

export default App;