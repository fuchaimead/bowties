import { combineReducers } from 'redux'
import flash from './flash'
import products from './products'
import searchProps from './searchProps'
import priceFilter from './priceFilter'
import currentPath from './currentPath'
import cart from './cart'


const rootReducer = combineReducers({
  flash,
  products,
  searchProps,
  priceFilter,
  currentPath,
  cart,
})

export default rootReducer
