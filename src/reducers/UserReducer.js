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
      case 'add_area':
       return {
         ...user,
         attributes: {
           ...user.attributes,
           areas: action.payload
         }
        }
      default:
        return user
    }
  }

