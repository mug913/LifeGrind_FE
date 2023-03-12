import axios from 'axios';

export const createArea = async (area, name, token) => 
await axios.get(`${process.env.REACT_APP_API}/areas/${area.id}/edit`, {
      params: {name: name, pos: area.position}, 
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

export const deleteArea = async (area, token) => 
      await axios.delete(`${process.env.REACT_APP_API}/areas/${area.id}`, {
      params: {pos: area.position}, 
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

export const createSubArea = async (area, options, token ) => 
await axios.post(`${process.env.REACT_APP_API}/subareas`, 
      {options: options,
      area: area}, 
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
      

export const  deleteSubArea = async (subarea, token) => 
      await axios.delete(`${process.env.REACT_APP_API}/subareas/${subarea}`, 
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