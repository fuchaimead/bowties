import React from 'react'
import { connect } from 'react-redux'


class Cart extends React.Component{
  state = { visible: [] }

  mapProducts = (visible) => {
    return visible.map(item => {
      return(
        <div key={ item.id }>
        <div className='item' key={ item.id }>
         <p> { item.name } </p> 
         <br /> 
         <img src={ item.img } alt={ item.name }/>
         <br />
         <p> ${ item.price } </p>
         </div> 
       </div>
      )
    })  
  }


  cartIsEmpty = () => {
    return(
      <div>
        <h4>Your cart is empty</h4>
        <a href="./">
        <button>Fill it up!</button>
        </a>
      </div>
    )
  }

  render(){
    const { cart } = this.props
    return(
      <div className="padding"> 
       <div> 
          <h1>SHOPPING CART</h1> 
      </div>
      <div className='content'> 
      { (Object.keys(cart).length === 0 && cart.constructor === Object) ?  this.cartIsEmpty() : this.mapProducts(cart) }
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart)

