import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div as='h1' textAlign='center'>
        Page Not Found
        <Link to='/'> Home</Link>
      </div>
    );
  }
}

export default NoMatch;
