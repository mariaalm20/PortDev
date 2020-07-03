import styled from "styled-components";
import { ChevronRight } from "@styled-icons/boxicons-regular";
import backgroundHome from '../../assets/right.png'
import {Github} from '@styled-icons/boxicons-logos'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: auto 300px;
  grid-template-rows: 140px auto;

  grid-template-areas:
    "SL SL"
    "SU SU";

  height: 100vh;
`;

export const Container = styled.div`
  grid-area: SU;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 120px;
  background-color: #36393f;

  background: url(${backgroundHome}) no-repeat 0px ;
`;

export const Title = styled.h1`
  margin-top: 75px;
  font-size: 40px;
  color: var(--title-color);

  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 360px;
  height: 64px;
  background: var(--title-color);
  border-radius: 8px;
  text-decoration: none;

  padding: 0 10px 0 57px;

  font-size: 18px;

  display: flex;
  align-items: center;
 
  margin-top: 60px;
  margin-bottom: 15px;

  position: relative;

  ~ svg {
    position: relative;
    top: -59px;
    left: 14px;
    transition: 180ms  ease-in-out;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 360px;
  height: 64px;
  background: var(--primary-color);
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  align-items: center;
  overflow: hidden;

  margin-top: 30px;
  margin-bottom: 50px;

  cursor: pointer;

  > span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  > strong {
    flex: 1;
    text-align: center;
    color: var(--title-color);
    font-size: 20px;
  }
`;

export const Chevron = styled(ChevronRight)`
  color: #eee;
  width: 30x;
  height: 30px;
`;

export const  InputWrapper = styled.div`
  width: 100%;
` 

export const  InputIcon = styled(Github)`
  width: 24px;
  height: 24px;
  color: #8a8c90;
` 