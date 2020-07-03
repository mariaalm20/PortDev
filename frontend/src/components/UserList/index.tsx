import React, {useState, useEffect} from 'react'

import {Container, Separator} from './styles'
import ServerButton from '../UserButton'

import api from '../../services/api'

interface Users {
  id: string;
  avatar : string;
}

const ServerList: React.FC = () => {
   const [userImage, setUserImage] = useState<Users[]>([])

   const devId = String(localStorage.getItem("devId"))

   useEffect(() => {
    api.get("dev").then((response) => {
      setUserImage(response.data)
      console.log(response.data)
    })
  }, [])

   return (
     <Container>
        {userImage.map((user) => (
          user.id === devId && (
            <ServerButton isHome avatar = {user.avatar}/>
          ) 
        ))}
         
       <Separator />

       <ul>
         {userImage.map((user) => (
           user.id !== devId && (
           <li key = {user.id}>
           <ServerButton avatar = {user.avatar}/>
          </li>
         )))}
       </ul>

     </Container>
   )
}

export default ServerList