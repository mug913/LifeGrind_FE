import React, {useRef, useContext, useLayoutEffect}  from 'react'
import { Logout } from '../components/Logout'
import {DayLog} from '../components/DayLog'
import { AreaLog } from '../components/AreaLog';
import { UserContext } from '../contexts/UserContext';
import { PopUpContext } from '../contexts/PopUpContext';
import { PopUp } from '../components/PopUp';
import { Timekeeper} from '../components/Timekeeper';
import axios from 'axios';

//present User page if logged in.
export const UserPage = () => {

  const hasChecked = useRef(false) 
  const {user,dispatch} = useContext(UserContext);
  const {popUpContent} = useContext(PopUpContext);
  const dayArea =  user.areas.filter((a) => { return a.position == 0}) ?? [{position: 0}]
  console.log("dayarea = ", dayArea)
  console.log("areas = ",user.areas)
  const activeAreas =  user.areas.slice(1, user.areas.length)

    // check for presence of valid JWT and if so request user data from backend on load. 
    useLayoutEffect(() =>{
    let token = localStorage.getItem('token')
    if(!hasChecked.current && token){
      axios.get(`${process.env.REACT_APP_API}/profile`, {
        method: "GET",
        headers: {
          "Authorization": `token ${token}`
        }
      })
      .then(result => {
        if(!result.data.error){
        localStorage.setItem('token', result.data.token)
        dispatch({type: 'add', payload: result.data.user})
        hasChecked.current = true;
        }
        else{
        localStorage.clear();}
      })
    }
   }) 

//display user page elements
    return (
      <div >
          {user.id && <div>
          <h2>Welcome {user.username}<Timekeeper/></h2> 
            <div className="log-area">
              <DayLog area={dayArea[0]} />
              {activeAreas.map(area =>(
              <AreaLog area={area} key={area.position}/>
              ))}
                <div className="pop-up">
                  <PopUp content={popUpContent}/>
                </div>
              <Logout/> 
            </div>
          </div>}
      </div>
    )
}