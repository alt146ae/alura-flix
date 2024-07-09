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
`

const Cabecera = (props) => {
  return (
   
    <Header>
      <GlobalStyles/>
        <img src="img/logo.png" alt="logo de Legoflix" />
        <iframe src="https://giphy.com/embed/HWLAKKWhzTFrXiBBFf" width="150" height="150" frameBorder="0"> </iframe>
             
        <BotonesHeader/>
    </Header>
    
  )
}

export default Cabecera