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
        case 'refresh_day_area_sub': {
          const targetArea = user.areas.findIndex(area => area.position === action.area_pos)
          const newAreas = [...user.areas]
          newAreas[targetArea].subareas = action.payload
          return {
            ...user,
            areas: newAreas
            }
          }
        default:
        return user
    }
}

