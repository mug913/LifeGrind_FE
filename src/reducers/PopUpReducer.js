//reducer for handling popup element state actions. 
  export const popUpReducer = (popUpContent,action) => {
      switch(action.type){
        //replace current elements with payload.
        case 'replace':
          console.log(`reducer:${action.payload}`)
            return action.payload
        //clear elements
        case 'clear':
            return null
        default:
          return popUpContent
      }
    }
  