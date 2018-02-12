import React from 'react';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';


class Home extends React.Component {


  displayProducts = () =>{
    const { price, products } = this.props
    let visible = products
    if(price)
    visible = visible.filter( p => p.price < price)
      return visible.map( (product, i) => {
        if (product.category === "tenugui"){
        return(
          <div className='item' key={i}>
          <p> {product.name} </p> 
          <br /> 
          <img src={product.img} alt={product.name}/>
          <br />
          <p> ${product.price} </p>
          <button className="add" > Add Item </button>
          </div> 
          )
        }else {
          return null
        }
    })
  }

  render() {
    
    return(
      <div className="padding"> 
      <div> 
      <h1>  TENUGUI COLLECTION </h1> 
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

export default connect(mapStateToProps)(Home)