import { useState } from "react"
import styled from "styled-components"
import BotonesHeader from "../BotonesHeader"
import GlobalStyles from "../GlobalStyles"

const Header = styled.header`
    
    padding: 40px 50px;
    display: flex;
    justify-content: space-between;
    background-color: #861a1aac;

    align-items: center;
    img{
        width: 250px;
        
    }
    @media (min-width: 781px) and (max-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    padding: 20px 15px;
    
    
  } 
    @media (min-width: 220px) and (max-width: 780px) {
    display: none;
  }
  

`

const Cabecera = (props) => {
  return (
   
    <Header>
      <GlobalStyles/>
        <img src="img/logo.png" alt="logo de Legoflix" width="70" height="70"/>
        <iframe src="https://giphy.com/embed/HWLAKKWhzTFrXiBBFf" width="100" height="120" frameBorder="0"> </iframe>
             
        <BotonesHeader/>
    </Header>
    
  )
}

export default Cabecera