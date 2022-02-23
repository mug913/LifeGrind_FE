
  export const popUpReducer = (popUpContent,action) => {
      switch(action.type){
        case 'replace':
            return action.payload
        default:
          return popUpContent
      }
    }
  