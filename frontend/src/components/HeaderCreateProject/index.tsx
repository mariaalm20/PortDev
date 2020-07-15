import React, {FormEvent} from 'react'

import {Container, Row, BackHome} from './styles'
import logo from "../../assets/logo.png"
import { useHistory } from "react-router-dom";


const Header: React.FC = () => {
  const history = useHistory();
  const devId = String(localStorage.getItem("devId"));


  async function handleProject(event: FormEvent) {
    event.preventDefault();
  
    try {
      const id = devId

      history.push(`/home/${id}`);
    } catch (err) {
      alert("Erro");
    }
  }



  return (
    <Container>
       <img src={logo} alt="PortDevLogo" />

      <Row>
          <BackHome onClick={handleProject}>
             {" "}
             Voltar para a Home
           </BackHome>
      </Row>

    </Container>
  )
}

export default Header