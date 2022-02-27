import { userInitialState } from "../contexts/UserContext"

export const userReducer = (user,action) => {
    switch(action.type){
      case 'add':
        console.log(action.payload)
        return action.payload
      case 'rescue':
        return userInitialState
      case 'add_area':
       return {
         ...user,
         ...user.areas,
           areas: action.payload
        }
      default:
        return user
    }

  



  }

