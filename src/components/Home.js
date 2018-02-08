import React from 'react';
import { connect } from 'react-redux'
import Sidebar from './Sidebar';
import alphabet from '../images/alphabet.jpg'
import asanoha from '../images/asanoha.jpg'
import hamachidori from '../images/hamachidori.jpg'
import hyotan_gourd from '../images/hyotan_gourd.jpg'
import mameshibori from '../images/mameshibori.jpg'
import orizuru from '../images/orizuru.jpg'
import samehada from '../images/samehada.jpg'
import seigaiha from '../images/seigaiha.jpg'


class Home extends React.Component {


  displayProducts = () =>{
    return this.props.products.map( (product, i) => {
      if (product.category == "tenugui")
      return (
      <div className='item' key={i}>
       <p> {product.name} </p> 
       <br /> 
       <img src={product.img} alt={product.name}/>
       <br />
       <p> ${product.price} </p>
       <button className="add" > Add Item </button>
      </div> 
      )
      }
    )
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
     products: state.products
  }
}

export default connect(mapStateToProps)(Home)