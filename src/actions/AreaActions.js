import axios from 'axios';

export const createArea = async (area, name, token) => 
await axios.get(`${process.env.REACT_APP_API}/areas/${area.id}/edit`, {
      params: {name: name}, 
      headers: {"Authorization": `token ${token}`}
      })
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

export const createSubArea = async (area, name, token) => 
await axios.get(`${process.env.REACT_APP_API}/areas/${area.id}/edit`, {
      params: {name: name}, 
      headers: {"Authorization": `token ${token}`}
      })
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
      
            