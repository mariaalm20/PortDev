import React, { useState, useEffect} from "react";

import {
   Grid, 
   Container, 
  } from './styles'

import UserList from '../../components/UserList'
import Header from '../../components/HeaderHome'
import ProjectList from '../../components/ProjectList'

import InfiniteScroll from "react-infinite-scroll-component";
import api from '../../services/api'

interface Projects {
  id: number;
  image_url: string;
  description: string;
  city: string;
  uf: string;
  dev_id: number;
  name: string;
  user: string;
  avatar: string;
  techs: string;
  link: string;
}

const Home = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(0);


   async function loadProjects() {
    const response = await api.get("projects", {
      params: { page },
    });

    if (total > 0 && projects.length === total) {
      return;
    }

    setProjects([...projects, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
  }

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  

  return (
    <Grid>
      <Header />
      <UserList />
      <Container>

      <ProjectList />
  

      </Container>
    </Grid>
  )
}

export default Home