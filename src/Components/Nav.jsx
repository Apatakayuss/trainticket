import React from 'react'
import styled from 'styled-components'
import BTN from '../Components/UI/Button'

const Nav = () => {
  return (
    <Universal>
        <NavContainer>
        <Left>
            Logo
        </Left>
        <Middle>
            <UL>
                <LI><a href="">Text</a></LI>
                <LI><a href="">Text</a></LI>
                <LI><a href="">Text</a></LI>
                <LI><a href="">Text</a></LI>
            </UL>
        </Middle>
        <Right>
            <BTN var='base'>
                Book Now
            </BTN>
           
        </Right>
    </NavContainer>
    </Universal>

  )
}

export default Nav
const Universal = styled.div`
background-color: antiquewhite;
`
const NavContainer = styled.div`
width: 90%;
height: 80px;
display: flex;
justify-content: space-between;
margin: auto;
align-items: center;
background-color: lavender;
`
const Left = styled.div``
const Middle = styled.div``
const Right = styled.div``
const UL = styled.ul`
    display: flex;
    gap: 50px;
    font-size: 16px;
    font-weight: 600;
`
const LI = styled.li`
    list-style-type: none;
    &::after{
        content: '';
        width: 100%;
        position: absolute;
        bottom: 4px;
        background-color: yellow;
        height: 2px solid;
    }
`