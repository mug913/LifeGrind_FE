import axios from 'axios';

export const sunCheck = async (long, lat) => 
await axios.get(`${process.env.REACT_APP_SUN_API}lat=${lat}&lng=${long}&date=today`)
    .then(res => {
      if (res.data.status === "OK") {
        return (res)          }
      }).catch(function (error){
      if (!error.response) {
        return ({data:{status: 'null', error: ['SUNRISE API CALL FAILURE']}})}
      else {
         return(error.response.data)
      }
    })