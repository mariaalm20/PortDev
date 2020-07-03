import styled from 'styled-components';

import {Props} from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-bottom: 8px;

  background-color: ${(props) => 
    props.isHome? ' #6633cc' : '#36393f'};
   
    cursor: pointer;
    position: relative;

  > img {
    width: 48px;
    heigth: 48px;
    border-radius: 50%;
  }

  &::before {
    width: 9px;
    height: 9px;

    position: absolute;
    left: -17px;
    top: calc(50% - 4.5%);
    
    background-color: #fff;
    border-radius: 50%;

    content: '';
  }

  transition: border-radius .2s, background-color .2s;

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? '#6633cc' : '#6e86d6'}
  }
`;

