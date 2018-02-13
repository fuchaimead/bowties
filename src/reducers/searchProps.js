const searchProps = (state = false, action) => {
  switch(action.type){
    case 'ADD_SEARCH_FILTER':
      return action.sale
    default:
      return state
  }
}

export default searchProps
