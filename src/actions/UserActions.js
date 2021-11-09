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
        localStorage.setItem('token', res.data.token)
        console.log(res.data.user.data)
        return(res.data.user.data)
      }).catch(function (error){
      return(error.response.statusText)
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
        localStorage.setItem('token', res.data.token)
        console.log(res.data.user.data)
        return(res.data.user.data)
    }).catch(function (error){
      return(error.response.statusText)
    })
  