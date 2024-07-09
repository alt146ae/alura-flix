import { useState } from "react"
import styled from "styled-components"
import Videos from "../Videos/Videos"


const MainContainer = styled.div`
    background-color: black;
    padding-top: 15px;
    width: 100%;
    height: 435px;
    box-sizing: border-box;
    padding:32px;
    text-align: center;
    position: relative;
    
  
`

const EstiloCategorias = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 32px;
    width: 432px;
    height: 70px;
    margin-left: 35px;
`
const DivVideos = styled.div`
  
  display: flex;
  
  scrollbar-width: thin;
  scrollbar-color: #ff0000 #000000;
  overflow-y: auto;
  margin-left: 40px;
  gap: 2px;
`
    
  

const Categorias = (props) => {

    // console.log("props de categorias",props);
  const {colorPrimario, colorSecundario,categoria}= props.datos

  const   colorFondo = {
    backgroundColor: colorPrimario
  }

  const   colorTitulo = {
    color: colorSecundario
  }
  return (
    <MainContainer style={colorTitulo}>
    <EstiloCategorias style={colorFondo} >{categoria}</EstiloCategorias>
    <DivVideos>
    <Videos/>
    <Videos/>
    <Videos/>
    <Videos/>
    <Videos/>
    </DivVideos>
    </MainContainer>    

  )
}

export default Categorias


