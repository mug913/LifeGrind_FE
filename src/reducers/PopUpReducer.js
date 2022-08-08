
  export const popUpReducer = (popUpContent,action) => {
      switch(action.type){
        case 'replace':
          console.log(`reducer:${action.payload}`)
            return action.payload
        case 'clear':
            return null
        default:
          return popUpContent
      }
    }
  