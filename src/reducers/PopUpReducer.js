
  export const popUpReducer = (popUpContent,action) => {
      switch(action.type){
        case 'replace':
            return action.payload
        case 'clear':
            return null
        default:
          return popUpContent
      }
    }
  