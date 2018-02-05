import React from 'react';
import Sidebar from './Sidebar';

class Home extends React.Component {
  state = { products: [
    {
      name: 'Blue Monstera Gardenia Aloha Shirt',
      price: 149.99,
      category: 'aloha',
      sale: true,
      img: 'blue_monstera.jpg'
    },
    {
      name: 'Blue Seabirds and Fish Aloha Shirt',
      price: 39.99,
      category: 'aloha',
      sale: false,
      img: 'blue_seabirds.jpg'
    },
    {
      name: 'Brown Palm Tree Aloha Shirt',
      price: 49.99,
      category: 'aloha',
      sale: true,
      img: 'brown_palm_tree.jpg'
    },
    {
      name: 'Green Island Floral Aloha',
      price: 12.99,
      category: 'aloha',
      sale: true,
      img: 'green_island_floral.jpg'
    },
    {
      name: 'Red Abstract Floral Aloha',
      price: 29.99,
      category: 'aloha',
      sale: false,
      img: 'red_abstract_floral.jpg'
    },
    {
      name: 'Red Emblem Aloha Shirt',
      price: 18.99,
      category: 'aloha',
      sale: false,
      img: 'red_emblem.jpg'
    },
    {
      name: 'Red Floral Aloha Shirt',
      price: 28.99,
      category: 'aloha',
      sale: false,
      img: 'red_floral.jpg'
    },
    {
      name: 'Red Peony Aloha Shirt',
      price: 49.99,
      category: 'aloha',
      sale: false,
      img: 'peony_aloha_shirt.jpg'
    },
    {
      name: 'Yellow Leaves Aloha',
      price: 59.99,
      category: 'aloha',
      sale: true,
      img: 'yellow_leaves.jpg'
    }, ]
  }

  displayProducts = () =>{
    return this.state.products.map( (product, i) => {
      return (
      <div key={i}>
       <p> {product.name} </p> 
      </div> 
      )
      }
    )
  }

  render() {
    return(
      <div> 
      <Sidebar /> 
      { this.displayProducts() }
      </div> 
    )
  }
}


export default Home