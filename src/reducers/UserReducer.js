import update from 'immutability-helper'
import { userInitialState } from "../contexts/UserContext"
//reducer for handling user state actions.
export const userReducer = (user,action) => {
    switch(action.type){
      case 'add':
        return action.payload
      case 'rescue':
        return userInitialState
      case 'add_area':
          const updateUser = update(user, {areas: {$set: action.payload}}) 
          return updateUser
      case 'delete_area':
          const deleteUpdate = update(user, {areas: {$set: action.payload.areas}}) 
          return deleteUpdate
      case 'refresh_day_area_sub': {
          const targetAreaIndex = user.areas.findIndex(area => area.position === action.area_pos)
          const newAreas = [...user.areas]
          newAreas[targetAreaIndex].subareas = action.payload
          return {
            ...user,
           areas: newAreas
            }
          }
      case 'refresh_area' : {
          const targetAreaIndex = user.areas.findIndex(area => area.position === action.area_pos)
          const newAreas = [...user.areas]
          newAreas[targetAreaIndex].subareas[0].records = action.payload
          return {
            ...user,
            areas: newAreas
            }
        }
      default:
      return user
    }
}

