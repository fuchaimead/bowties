import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NoMatch from './NoMatch';
import Tenugui from './Tenugui';
import Aloha from './Aloha';
import About from './About';
import '../App.css'
import ocean from '../images/ocean.jpg'
import banner from '../images/banner.jpg'

class App extends Component {
  render() {
    return (
      <div> 
      <div style={styles.image}>
      <div className="wrapper">
        <Navbar />
        <img src={banner} className='masthead' alt='banner' /> 
        <div className="clear"></div>
        <div className="push"></div>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/tenugui' component={Home} />
            <Route exact path='/aloha' component={Aloha} />
            <Route exact path='/about' component={About} />
            <Route component={NoMatch} />
          </Switch>
      </div>
      </div> 
      </div>
    );
  }
}

const styles = {
  image :{
    backgroundImage: "url("+ ocean + ")",
    backgroundSize: 'cover'
  }
}

export default App;

