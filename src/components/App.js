import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NoMatch from './NoMatch';
import Aloha from './Aloha';
import About from './About';
import Cart from './Cart'
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="image">
      <div className="wrapper">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tenugui' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/aloha' component={Aloha} />
            <Route exact path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
        <div className="clear"></div>
        <div className="push"></div>
      </div> 
      </div>
    );
  }
}



export default App;

