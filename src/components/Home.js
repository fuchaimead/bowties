import React from 'react';
import Sidebar from './Sidebar';
import blue_monstera from '../images/blue_monstera.jpg'
import blue_seabirds from '../images/blue_seabirds.jpg'
import brown_palm_tree from '../images/brown_palm_tree.jpg'
import green_island_floral from '../images/green_island_floral.jpg'
import red_abstract_floral from '../images/red_abstract_floral.jpg'
import red_emblem from '../images/red_emblem.jpg'
import red_floral from '../images/red_floral.jpg'
import peony_aloha_shirt from '../images/peony_aloha_shirt.jpg'
import yellow_leaves from '../images/yellow_leaves.jpg'


class Home extends React.Component {
  state = { products: [
    {
      name: 'Blue Monstera Gardenia Aloha Shirt',
      price: 149.99,
      category: 'aloha',
      sale: true,
      img: blue_monstera
    },
    {
      name: 'Blue Seabirds and Fish Aloha Shirt',
      price: 39.99,
      category: 'aloha',
      sale: false,
      img: blue_seabirds
    },
    {
      name: 'Brown Palm Tree Aloha Shirt',
      price: 49.99,
      category: 'aloha',
      sale: true,
      img: brown_palm_tree
    },
    {
      name: 'Green Island Floral Aloha',
      price: 12.99,
      category: 'aloha',
      sale: true,
      img: green_island_floral
    },
    {
      name: 'Red Abstract Floral Aloha',
      price: 29.99,
      category: 'aloha',
      sale: false,
      img: red_abstract_floral
    },
    {
      name: 'Red Emblem Aloha Shirt',
      price: 18.99,
      category: 'aloha',
      sale: false,
      img: red_emblem
    },
    {
      name: 'Red Floral Aloha Shirt',
      price: 28.99,
      category: 'aloha',
      sale: false,
      img: red_floral
    },
    {
      name: 'Red Peony Aloha Shirt',
      price: 49.99,
      category: 'aloha',
      sale: false,
      img: peony_aloha_shirt
    },
    {
      name: 'Yellow Leaves Aloha',
      price: 59.99,
      category: 'aloha',
      sale: true,
      img: yellow_leaves
    }, ]
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
      <Sidebar /> 
      <div className='content'> 
      { this.displayProducts() }
      </div> 
      </div> 
    )
  }
}


export default Home