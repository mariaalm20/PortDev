import React, {FormEvent} from 'react'

import {Container, Row, CadasterProject, ButtonSignOut, ImageSignOut, Image, MenuSignOut, TextSignOut} from './styles'
import logo from "../../assets/logo.png"
import { useHistory } from "react-router-dom";


const Header: React.FC = () => {
  const history = useHistory();
  const devAvatar = String(localStorage.getItem("devAvatar"));
  const devId = String(localStorage.getItem("devId"));


  async function handleProject(event: FormEvent) {
    event.preventDefault();

    try {
      localStorage.setItem("devId", devId);

      history.push(`/projects`);
    } catch (err) {
      alert("Falha no Login, tente novamente");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }


  return (
    <Container>
       <img src={logo} alt="PortDevLogo" />

      <Row>
          <CadasterProject onClick={handleProject}>
             {" "}
             Cadastrar novo projeto
           </CadasterProject>

        <ButtonSignOut>
          <ImageSignOut variant="success" id="dropdown-basic">
            <Image src={devAvatar} /> 
          </ImageSignOut>

          <MenuSignOut>
            <button onClick={handleLogout}>
              <TextSignOut>Sair</TextSignOut>
          </button> 
          </MenuSignOut>
        </ButtonSignOut>
      </Row>

    </Container>
  )
}

export default Header