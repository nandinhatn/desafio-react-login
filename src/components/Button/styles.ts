import styled from "styled-components";

export const ButtonContainer = styled.button`
    background: #A908DD;
    border-radius: 22px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: 0;
    margin: 20px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  &:disabled {
    background-color:black;
    opacity: 0.1;
  }
 
`