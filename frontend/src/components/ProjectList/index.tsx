import React, {useState, useEffect} from 'react'

import {
  Ul,
  Li,
  HeaderUser,
  ButtonDelete,
  DeleteIcon,
  Image,
  InfoUser,
  Name, 
  Address,
  GithubLink,
  GithubIcon,
  Row,
  Description,
  ImageProject,
  Content
} from './styles'

import api from '../../services/api'

interface Projects {
  id: number;
  image_url: string;
  description: string;
  city: string;
  uf: string;
  dev_id: string;
  name: string;
  user: string;
  avatar: string;
  techs: string;
  link: string;
}

interface Props {
  canDelete?: boolean
}

const ProjectList = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  const devId = String(localStorage.getItem("devId"));

 useEffect(() => {
   api.get('projects').then((response) => {
    setProjects(response.data)
    console.log(response.data)
   })
 }, [])

  async function handleDelProject(id: number) {
    await api.delete(`projects/${id}`, {
      headers: {
        Authorization: devId,
      },
    });
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <Content>
        <Ul>
          {projects.map((project) => (
            <Li key={project.id}>
              <HeaderUser>
                { project.dev_id === devId && (
                   <ButtonDelete onClick={() => handleDelProject(project.id)}>
                   <DeleteIcon />
                 </ButtonDelete>
                )}
                <Image src={project.avatar} />

                <InfoUser>
                  <Name>{project.user}</Name>
                  <Address>
                    {project.city} - {project.uf}
                  </Address>
                </InfoUser>
              </HeaderUser>

              <Row>
                <GithubIcon/>
                <a href={project.link} style={{ textDecoration: "none" }}>
                  <GithubLink>Ver no github</GithubLink>
                </a>
              </Row>

              <Description>{project.description}</Description>

              <ImageProject src={project.image_url} />
            </Li>
          ))}
        </Ul>
    </Content>
  )
}

export default ProjectList