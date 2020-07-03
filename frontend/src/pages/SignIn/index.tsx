import React, { useState, FormEvent} from 'react'
import Header from '../../components/HeaderSignIn'

import {Grid, Container, Title, Input, Button, Chevron, InputIcon, InputWrapper} from './styles'
import api from '../../services/api'
import { useHistory } from "react-router-dom";


const SignIn = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post("/dev", { user });
      console.log(response.data);

      localStorage.setItem("devName", response.data.name);
      localStorage.setItem("devId", response.data.id);
      localStorage.setItem("devAvatar", response.data.avatar);

      const { id } = response.data;

      history.push(`/home/${id}`);
    } catch (err) {
      alert("Falha no Login, tente novamente");
    }
  }

  return (
    <Grid>
      <Header />
      <Container>
        <Title>
        Cadastre seu projeto e desperte interesse nas empresas!
        </Title>
        <form onSubmit = {handleLogin}>
          <InputWrapper>
          <Input 
            placeholder="username do github"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
            <InputIcon />
          </InputWrapper>
          <Button type = "submit">
            <span>
             <Chevron/>
            </span>
            <strong>Entrar</strong>
          </Button>
        </form>
      </Container>
    </Grid>
  )
}

export default SignIn