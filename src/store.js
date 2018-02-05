// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';

// const enhancers = compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

// //{} state of your store 
// const store = createStore(rootReducer, { cartTotal: 0,
//   cart: {},
//   sale: false,
//   products: [
//     {
//       name: 'Blue Monstera Gardenia Aloha Shirt',
//       price: 149.99,
//       category: 'aloha',
//       sale: true,
//       img: 'blue_monstera.jpg'
//     },
//     {
//       name: 'Blue Seabirds and Fish Aloha Shirt',
//       price: 39.99,
//       category: 'aloha',
//       sale: false,
//       img: 'blue_seabirds.jpg'
//     },
//     {
//       name: 'Brown Palm Tree Aloha Shirt',
//       price: 49.99,
//       category: 'aloha',
//       sale: true,
//       img: 'brown_palm_tree.jpg'
//     },
//     {
//       name: 'Green Island Floral Aloha',
//       price: 12.99,
//       category: 'aloha',
//       sale: true,
//       img: 'green_island_floral.jpg'
//     },
//     {
//       name: 'Red Abstract Floral Aloha',
//       price: 29.99,
//       category: 'aloha',
//       sale: false,
//       img: 'red_abstract_floral.jpg'
//     },
//     {
//       name: 'Red Emblem Aloha Shirt',
//       price: 18.99,
//       category: 'aloha',
//       sale: false,
//       img: 'red_emblem.jpg'
//     },
//     {
//       name: 'Red Floral Aloha Shirt',
//       price: 28.99,
//       category: 'aloha',
//       sale: false,
//       img: 'red_floral.jpg'
//     },
//     {
//       name: 'Red Peony Aloha Shirt',
//       price: 49.99,
//       category: 'aloha',
//       sale: false,
//       img: 'peony_aloha_shirt.jpg'
//     },
//     {
//       name: 'Yellow Leaves Aloha',
//       price: 59.99,
//       category: 'aloha',
//       sale: true,
//       img: 'yellow_leaves.jpg'
//     },
//     {
//       name: 'Alphabet Pattern',
//       price: 129.99,
//       category: 'tenugui',
//       sale: false,
//       article: 'jacket',
//       img: 'alphabet.jpg'
//     },
//     {
//       name: 'Asanoha Hemp Leaf Pattern',
//       price: 80.99,
//       category: 'tenugui',
//       sale: false,
//       img: 'asanoha.jpg'
//     },
//     {
//       name: 'Hamachidori Birds on the Shore Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: false,
//       img: 'hamachidori.jpg'
//     },
//     {
//       name: 'Hyotan Gourd Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: true,
//       img: 'hyotan_gourd.jpg'
//     },
//     {
//       name: 'Mameshibori Pea-Dot Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: false,
//       img: 'mameshibori.jpg'
//     },
//     {
//       name: 'Orizuru Origami Crane Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: false,
//       img: 'orizuru.jpg'
//     },
//     {
//       name: 'Samehada Shark Skin Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: true,
//       img: 'samehada.jpg'
//     },
//     {
//       name: 'Seigaiha Wave Pattern',
//       price: 59.99,
//       category: 'tenugui',
//       sale: false,
//       img: 'seigaiha.jpg'
//     },
//   ]


// }, enhancers) 


// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;