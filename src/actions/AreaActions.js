import axios from 'axios';

export const createArea = async (area, token) => 
    await axios.post(`${process.env.REACT_APP_API}/areas`, {
        name: area.name
      },{ headers: {
            "Authorization": `token ${token}`}
        }        
      )
      .then(res => {
        if (res.data.status === 422) {
          return (res)          }
        }).catch(function (error){
        if (!error.response) {
          return ({data:{status: 'null', error: ['Error: Network Connection Unavailable']}})}
        else {
           return(error.response.data)
        }
      })

      