const currentPath = (state = "", action) => {
  switch(action.type){
    case 'SET_PATH':
      return action.path
    default:
      return state
  }
}

export default currentPath
