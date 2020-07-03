import styled from 'styled-components'
import Dropdown from "react-bootstrap/Dropdown";

export const Container = styled.div`
   grid-area : CL;

   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 0 50px;
   background-color: #333646;

   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
   z-index: 2;

   > img {
    width: 220px;
    height: 75px;
  }  

  @media (max-width: 900px) {
    padding: 0 20px;
    width: 100%;
    img {
      width: 200px;
      height: 70px;
    }  
  }
`;

export const Row = styled.strong`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const CadasterProject = styled.button`
  width: 80%;
  max-width: 360px;
  height: 55px;
  background: var(--primary-color);
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  margin-top: 23px;
  margin-right: 40px;

  color: #fff;
  font-size: 15px;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 80%;
    font-size: 10px;
    margin-left : 50px;
    height: 40px;
  }
`;

export const ButtonSignOut = styled(Dropdown)`
  width: 80px;
  height: 80px;
  border-radius: 20px;


  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;


export const ImageSignOut = styled(Dropdown.Toggle)`
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const MenuSignOut = styled(Dropdown.Menu)`
  display: flex;
  width: 85px;
  height: 80px;
  border-radius: 4px;
  background: #ffff;
  align-items: center;
  justify-content: center;
`;

export const TextSignOut = styled(Dropdown.Item)`
  color: #333;
  font-size: 20px;
  text-decoration: none;
`;


