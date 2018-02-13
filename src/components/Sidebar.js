import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  state = { pricerange: 300 }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.props.dispatch({ type: 'SET_PRICE_FILTER', price: this.state.pricerange })
  }

  render(){
    const { pricerange } = this.state
    return(
      <aside>
      <label>Highest Price: <span>${pricerange}</span></label>
      <div className="sidearea">
        <input 
        className="slider" 
        name="pricerange"
        value={pricerange}
        type="range"
        min={0}
        max={400} 
        step="0.1" 
        onChange={this.handleChange}
      />
        <span className="min">${ this.state.min }</span>
        <span className="max">${ this.state.max }</span>
      </div> 
      <div className="sidearea callout">
        <h4>Only Show Sale Items</h4>
        <br />
        <label className="switch">
          <input type="checkbox" />
         <span className="toggle round" data-checked="Yes" data-unchecked="No"></span>
        </label>
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
    filter: state.searchProps, 
    cost: state.costFilter
  }
}

export default connect(mapStateToProps)(Sidebar)