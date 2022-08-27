import axios from 'axios';

export const createAreaRecord = async (area, options, token) => {
await axios.post(`${process.env.REACT_APP_API}/records`, 
      {options: options,
      area: area,
      record: 1}, 
      {headers: {"Authorization": `token ${token}`}}
      )
      .then(res => {
        if (res.status === 200) {
          return (res.data)          }
        }).catch(function (error){
        if (!error.response) {
          return ({data:{status: 'null', error: ['Error: Network Connection Unavailable']}})}
        else {
          let res = {data: error.response.data}
          return(res)
        }
      })
}