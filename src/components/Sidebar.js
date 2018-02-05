import React from 'react';

class Sidebar extends React.Component {
  render(){
    return(
      <aside>
      <label>Highest Price: <span>$50</span></label>
      <div className="sidearea">
        <input 
        className="slider" 
        id="pricerange" 
        type="range"
        value="pricerange"  
        min="min" 
        max="max" 
        step="0.1" 
      />
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

export default Sidebar