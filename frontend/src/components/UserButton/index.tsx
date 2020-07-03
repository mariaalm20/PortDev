import React from 'react'

import {Button} from './styles'
import image from '../../assets/foto.jpg'
import Dropdown from "react-bootstrap/Dropdown"
import { useHistory } from "react-router-dom"

export interface Props {
  avatar: string;
  selected?: boolean;
  isHome?:boolean;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  avatar
}) => {
  
  const history = useHistory()

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return(
    <Button
     isHome = {isHome}
     className = {selected ? 'active' : ''}
     avatar = {avatar}
    >
      {isHome ? ( <img src = {image} alt = 'Profile'/>
       ) : (<img src = {avatar} alt = "Users"/>)}
    </Button>
  )
} 

export default ServerButton