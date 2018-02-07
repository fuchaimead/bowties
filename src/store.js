import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import blue_monstera from './images/blue_monstera.jpg'
import blue_seabirds from './images/blue_seabirds.jpg'
import brown_palm_tree from './images/brown_palm_tree.jpg'
import green_island_floral from './images/green_island_floral.jpg'
import red_abstract_floral from './images/red_abstract_floral.jpg'
import red_emblem from './images/red_emblem.jpg'
import red_floral from './images/red_floral.jpg'
import peony_aloha_shirt from './images/peony_aloha_shirt.jpg'
import yellow_leaves from './images/yellow_leaves.jpg'
// import alphabet from './images/alphabet.jpg'
// import asanoha from './images/asanoha.jpg'
// import hamachidori from './images/hamachidori.jpg'
// import hyotan_gourd from './images/hyotan_gourd.jpg'
// import mameshibori from './images/mameshibori.jpg'
// import orizuru from './images/orizuru.jpg'
// import samehada from './images/samehada.jpg'
// import seigaiha from './images/seigaiha.jpg'

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

//{} state of your store 
const store = createStore(rootReducer, { cartTotal: 0,
  cart: {},
  sale: false,
  products: [
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
    },
    // {
    //   name: 'Alphabet Pattern',
    //   price: 129.99,
    //   category: 'tenugui',
    //   sale: false,
    //   article: 'jacket',
    //   img: alphabet
    // },
    // {
    //   name: 'Asanoha Hemp Leaf Pattern',
    //   price: 80.99,
    //   category: 'tenugui',
    //   sale: false,
    //   img: asanoha
    // },
    // {
    //   name: 'Hamachidori Birds on the Shore Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: false,
    //   img: hamachidori
    // },
    // {
    //   name: 'Hyotan Gourd Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: true,
    //   img: hyotan_gourd
    // },
    // {
    //   name: 'Mameshibori Pea-Dot Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: false,
    //   img: mameshibori
    // },
    // {
    //   name: 'Orizuru Origami Crane Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: false,
    //   img: orizuru
    // },
    // {
    //   name: 'Samehada Shark Skin Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: true,
    //   img: samehada
    // },
    // {
    //   name: 'Seigaiha Wave Pattern',
    //   price: 59.99,
    //   category: 'tenugui',
    //   sale: false,
    //   img: seigaiha
    // },
  ]


}, enhancers) 


if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;