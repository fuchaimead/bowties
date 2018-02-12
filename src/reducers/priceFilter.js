const priceFilter = (state = 300, action) => {
  switch(action.type) {
    case 'SET_PRICE_FILTER':
      return action.price;
    default:
      return state;
  }
}

export default priceFilter;
