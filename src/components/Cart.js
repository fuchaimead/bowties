import React from 'react'
import { connect } from 'react-redux'


class Cart extends React.Component{
  state = { visible: [] }

  mapProducts = (visible) => {
    return visible.map(item => {
      return(
        <div key={item.id}>
        <div className='item' key={item.id}>
         <p> {item.name} </p> 
         <br /> 
         <img src={item.img} alt={item.name}/>
         <br />
         <p> ${item.price} </p>
         </div> 
       </div>
      )
    })  
  }

  render(){
    const { cart } = this.props
    return(
      <div className="padding"> 
      <div> Here is the Shopping Cart </div> 
      { this.mapProducts(cart) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart)

