import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NoMatch from './NoMatch';
import Tenugui from './Tenugui';
import Aloha from './Aloha';
import About from './About';
import '../App.css'
import banner from '../images/banner.jpg'

class App extends Component {
  render() {
    return (
      <div> 
      <div className="wrapper">
        <Navbar />
        <div className="clear"></div>
        <div className="push"></div>
        <img src={banner} alt='banner image' /> 
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tenugui' component={Tenugui} />
            <Route exact path='/aloha' component={Aloha} />
            <Route exact path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
      </div>
      </div>
    );
  }
}

export default App;

