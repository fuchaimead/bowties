import React from 'react'
import { connect } from 'react-redux'


class Cart extends React.Component{
  // state = { visible: [] }

  // mapProducts = (visible) => {
  //   const { products } = this.props
  //   return products.map(product => {
  //     return(
  //       <div key={product.id}>
  //       <div className='item' key={product.id}>
  //         <p> {product.name} </p> 
  //         <br /> 
  //         <img src={product.img} alt={product.name}/>
  //         <br />
  //         <p> ${product.price} </p>
  //         </div> 
  //       </div>
  //     )
  //   })
  // }

  render(){
    return(
      <div className="padding"> 
      <div> Here is the Shopping Cart </div> 
        {/* { this.mapProducts() } */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart}
}
export default connect(mapStateToProps)(Cart)

