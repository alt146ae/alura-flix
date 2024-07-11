import { useState } from "react"
import styled from "styled-components"
import Videos from "../Videos"



const MainContainer = styled.div`
    background-color: black;
    padding-top: 15px;
    width: 100%;
    height: 535px;
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
  
  height: 350px;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollbarColor} #000000; 
  overflow-y: auto;
  margin-left: 40px;
  gap: 2px;
`

const Categorias = ({ datos,videos }) => {

    // console.log("props de categorias",props);
  const{colorPrimario, colorSecundario, nombre} = datos

  const colorFondo = {
    backgroundColor: colorPrimario
  }

  const colorTitulo = {
    color: colorSecundario
  }


  return (
    <MainContainer style={colorTitulo}>
    <EstiloCategorias style={colorFondo} >{nombre}</EstiloCategorias>
    <DivVideos scrollbarColor={colorPrimario}>
      
    <Videos
          key={videos.id}
            videoUrl={videos.video}
            titulo={videos.titulo}
            
            colorSecundario={colorSecundario}            
              />      
    </DivVideos>
    
    
    </MainContainer>    

  )
}

export default Categorias


