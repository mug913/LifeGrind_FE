

export const userReducer = (user,action) => {
    switch(action.type){
      case 'add':
        return action.payload
      default:
        return user
    }
  }

