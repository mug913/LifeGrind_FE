import axios from 'axios';


export const signUp = async (user) => 
    await axios.post(`${process.env.REACT_APP_API}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        user:{
          username: user.username,
          password: user.password,
          email: user.email
        }
      })
      .then(res => {
        if (res.data.status === 202) {
          localStorage.setItem('token', res.data.token)
          return(res)}
        else
          return(res)
      }).catch(function (error){
        if (!error.response) {
          return ({data:{status: 'null', error: ['Error: Network Connection Unavailable']}})}
        else {
           return(error.response.data)
        }
      })


export const signIn = async (user) => 
    await axios.post(`${process.env.REACT_APP_API}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      user:{
          email: user.email,
          password: user.password,
        }
    })
     .then(res => {
      if (res.data.status === 202) {
        localStorage.setItem('token', res.data.token)
        return(res)}
      else
      console.log(res)
        return(res)
    }).catch(function (error){
      return(error.response.data)
    })
  