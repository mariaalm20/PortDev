import React from 'react'

import {Container} from './styles'
import logo from "../../assets/logo.png"


const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="PortDevLogo" />
    </Container>
  )
}

export default Header