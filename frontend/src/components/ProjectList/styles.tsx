import styled from "styled-components";
import {Delete} from '@styled-icons/material'
import {Github} from '@styled-icons/boxicons-logos'

export const Content = styled.div`
  padding: 0 20px;
`

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  list-style: none;
  margin-bottom: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 30px;
    padding: 0 30px;
    align-items: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    width: 30px;
    align-items: center;
  }
  
`;

export const Li = styled.li`
  padding: 0;
  background: #f0f0f5;
  border-radius: 15px 15px 4px 4px;
  height: 510px;
  margin-top: 60px;

  width: 280px;

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
  width: 100%;
  margin-top: -2px;
  padding: 10px 20px;
  border-radius: 15px 15px 0 0;
`;

export const ButtonDelete = styled.button`
  margin-left: 220px;
  width: 20px;
  height: 20px;
  border-radius: 15px;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  font-size: 15px;
  color: #333;
  margin-top: 10px;
`;

export const Address = styled.h2`
  font-size: 10px;
  color: #ffff;
  margin-top: 10px;
`;

export const Row = styled.strong`
  display: flex;
  flex-direction: row;
  margin-left: 80px;
`;

export const Description = styled.h1`
  font-size: 14px;
  color: #333;
  font-weight: normal;
  line-width: 1.6;
  text-align: center;
  margin: 20px 10px 0 10px;
  height: 100px;
`;

export const ImageProject = styled.img`
  width: 100%;
  height: 170px;
  margin-top: 30px;
`;

export const GithubLink = styled.h2`
  font-size: 15px;
  color: #333;
  margin-top: 15px;
  margin-left: 10px;
`;

export const DeleteIcon = styled(Delete) `
 width: 15px;
 heigth: 15px;
 color: #333 
`

export const GithubIcon = styled(Github) `
 width: 20px;
 heigth: 20px;
 margin-top: 10px;
`