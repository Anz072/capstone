import styled from "styled-components";
import {
  GoogleSignInButton,
  InvertedButton,
  BaseButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 290px;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 40px;
  z-index: 5;
  overflow: none;


  ${GoogleSignInButton},
  ${InvertedButton},
  ${BaseButton}{
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  
`;
