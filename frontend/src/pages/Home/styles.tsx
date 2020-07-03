import styled from 'styled-components';
import {Delete} from '@styled-icons/material'
import {Github} from '@styled-icons/boxicons-logos'


//UL = User List;
//CP = Content Projects;

export const Grid = styled.div`
   display: grid;

   grid-template-columns: 71px auto;
   grid-template-rows: 120px auto;

   grid-template-areas: 
    'UL CL'
    'UL CP';

    height: 100vh;
`;

export const Container = styled.div`
  grid-area: CP;

  display: flex;
  flex-direction: column;
  padding: 0 60px;
  background-color: #333646;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  list-style: none;
  margin-bottom: 20px;
`;

export const Li = styled.li`
  padding: 0;
  background: #f0f0f5;
  border-radius: 15px 15px 4px 4px;
  height: 600px;
  margin-top: 60px;

  &:hover {
    top: -4px;
    box-shadow: 0 4px 3px #999;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary-color);
  width: 101%;
  margin-top: -2px;
  padding: 10px 20px;
  border-radius: 15px 15px 0 0;
`;

export const ButtonDelete = styled.button`
  margin-left: 270px;
  width: 30px;
  height: 30px;
  border-radius: 15px;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const InfoUser = styled.div`
  margin-left: 15px;
`;

export const Name = styled.h1`
  font-size: 20px;
  color: #333;
  margin-top: 10px;
  margin-left: -10px;
`;

export const Address = styled.h2`
  font-size: 12px;
  color: #ffff;
  margin-top: 10px;
  margin-left: -10px;
`;

export const Row = styled.strong`
  display: flex;
  flex-direction: row;
`;

export const Description = styled.h1`
  font-size: 15px;
  color: #333;
  font-weight: normal;
  text-align: justify;
  margin: 20px 10px 0 10px;
  height: 100px;
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  border-top: 1px solid #eeee;
  border-bottom: 1px solid #eeee;
`;

export const GithubLink = styled.h2`
  font-size: 15px;
  color: #333;
  margin-top: 15px;
  margin-left: 10px;
`;

export const DeleteIcon = styled(Delete) `
 width: 30px;
 heigth: 30px;
 color: #333 
`

export const GithubIcon = styled(Github) `
 width: 20px;
 heigth: 20px;
 margin-top: 10px;
`