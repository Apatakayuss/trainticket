import React from 'react'
import styled from 'styled-components'

const Button = ({ variant, children, onClick }) => {
    let BTN = BaseButton;
  
    if (variant === 'primary') {
      BTN = PrimaryButton;
    } else if (variant === 'secondary') {
      BTN = SecondaryButton;
    }
  
    return <BTN onClick={onClick}>
        {children}
        </BTN>;
  };

export default Button
const BaseButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; 
  &:hover {
    background-color: #0056b3; 
  }
`
const PrimaryButton = styled(BaseButton)`
    background-color: #007bff;
    color: #fff;
`;


const SecondaryButton = styled(BaseButton)`
    background-color: #ccc;
    color: #333;
`;