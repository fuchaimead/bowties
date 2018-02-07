import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  state = { pricerange: 300, min: 0, max: 400 }


  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    this.props.dispatch({ type: 'SET_COST_FILTER', cost: this.state.duration  })
  }

  render(){
    const { pricerange, min, max } = this.state
    return(
      <aside>
      <label>Highest Price: <span>${pricerange}</span></label>
      <div className="sidearea">
        <input 
        className="slider" 
        name="pricerange"
        value={pricerange}
        type="range"
        min={min}
        max={max} 
        step="0.1" 
        onChange={this.handleChange}
      />
        <span className="min">${ this.state.min }</span>
        <span className="max">${ this.state.max }</span>
      </div> 
      <div className="sidearea callout">
      <h4>Special Sale!</h4>
      <p>Shop now because half our items are greatly reduced</p>
      </div>
      <div className="sidearea callout">
        <h4>Contact Us</h4>
        <p>Questions? Call us at 1-888-555-SHOP, we're happy to be of service.</p>
      </div>
        </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.searchProps
  }
}

export default connect(mapStateToProps)(Sidebar)