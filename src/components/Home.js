import React from 'react';
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
  state = { products: [
    {
            name: 'Alphabet Pattern',
            price: 129.99,
            category: 'tenugui',
            sale: false,
            article: 'jacket',
            img: alphabet
          },
          {
            name: 'Asanoha Hemp Leaf Pattern',
            price: 80.99,
            category: 'tenugui',
            sale: false,
            img: asanoha
          },
          {
            name: 'Hamachidori Birds on the Shore Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: false,
            img: hamachidori
          },
          {
            name: 'Hyotan Gourd Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: true,
            img: hyotan_gourd
          },
          {
            name: 'Mameshibori Pea-Dot Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: false,
            img: mameshibori
          },
          {
            name: 'Orizuru Origami Crane Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: false,
            img: orizuru
          },
          {
            name: 'Samehada Shark Skin Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: true,
            img: samehada
          },
          {
            name: 'Seigaiha Wave Pattern',
            price: 59.99,
            category: 'tenugui',
            sale: false,
            img: seigaiha
          },
        ]
  }

  displayProducts = () =>{
    return this.state.products.map( (product, i) => {
      return (
      <div className='item' key={i}>
       <p> {product.name} </p> 
       <img src={product.img} alt={product.name}/>
      </div> 
      )
      }
    )
  }

  render() {
    return(
      <div> 
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


export default Home