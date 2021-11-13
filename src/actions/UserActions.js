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
        if (res.status !== 422) {
          localStorage.setItem('token', res.data.token)
          return(res)}
        else
          return(res)
      }).catch(function (error){
      return(error.response.data)
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
      if (res.data.status !== 401) {
        localStorage.setItem('token', res.data.token)
        return(res.data.user.data)}
      else
      console.log(res)
        return(res)
    }).catch(function (error){
      return(error.response.data)
    })
  