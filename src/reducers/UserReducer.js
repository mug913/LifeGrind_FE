const userInitialState = {
  name: '', 
  id: false,
  attributes: {
      areas: [{position: 0}]
  }
}

export const userReducer = (user,action) => {
    switch(action.type){
      case 'add':
        return action.payload
      case 'rescue':
        return userInitialState
      default:
        return user
    }
  }

