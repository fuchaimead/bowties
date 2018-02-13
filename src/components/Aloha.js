import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux'

class Aloha extends React.Component {

  addToCart = (productId) => {
    this.props.dispatch({ type: 'ADD_TO_CART', item: this.props })
    debugger
  }

  displayProducts = () =>{
    const { price, products } = this.props
    let visible = products
    if(price)
    visible = visible.filter( p => p.price < price)
    return visible.map( product => {
      if (product.category === "aloha"){
          return (
            <div className='item' key={product.id}>
            <p> { product.name } </p> 
            <br />
            <img src={ product.img } alt={ product.name }/>
            <br />
            <p> ${product.price} </p>
            <button className="add" onClick={ () => this.addToCart(product.id) }> Add Item </button>
          </div> 
          )   
        } else {
          return null
        }
    })
  }


  render() {
    return(
      <div className="padding"> 
      <div> 
      <h1>  ALOHA COLLECTION </h1> 
      </div>
      <Sidebar /> 
      <div className='content'> 
      { this.displayProducts() }
      </div> 
      </div> 
    )
  }
}


const mapStateToProps = (state) => {
  return {
     products: state.products, 
     price: state.priceFilter
  }
}

export default connect(mapStateToProps)(Aloha)