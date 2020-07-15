import styled from 'styled-components'
import Dropdown from "react-bootstrap/Dropdown";

export const Container = styled.div`
   grid-area : SL;

   display: flex;
   justify-content: space-between;

   padding: 25px 120px;
   background-color: #333646;

   box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
   z-index: 2;

   > img {
    width: 220px;
    height: 75px;
  }  

  @media (max-width: 900px) {
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
    margin-right: -5000px;
  }
`;

export const BackHome = styled.button`
  width: 100%;
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
    margin-right: 100px;
    height: 40px;
  }
`;




