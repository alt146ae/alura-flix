import styled from "styled-components"
import { Link } from "react-router-dom";



const Pie = styled.footer`
    background-color: #ff00007d;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    align-items: flex-end;
    background-image: "./assets/footer.jpg";
    width: 100%;
    @media (min-width: 220px) and (max-width: 780px) {
    justify-content: center;
    align-items: first baseline;
    height: 50px;
    display: block;
    width: 100lvw;
    
  } 

`
const ImgLogo = styled.img`
    width: 200px;
    @media (min-width: 220px) and (max-width: 780px) {
    display: none;
  } 
`
const Titulo = styled.h2`
    font-size: 1.6em;
    letter-spacing: 3px;
    justify-content: center;
    @media (min-width: 220px) and (max-width: 780px) {
    display: none;
  } 
`
const ContenedorBotones = styled.div`
   
   display: flex;
   justify-content: center;
      gap: 10px;
`

const ContenedorBotonHome = styled.div`
     display: none;
  @media (min-width: 220px) and (max-width: 780px) {
    display: flex;
    justify-content: center;
    height: 40px;
    align-items: center;
  }
          
`
const BotonHome = styled.button`
  background-color: black;
  color: #2271D1;
  padding: 10px 20px;
  border-radius: 25px;
  border: solid 2px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Alinea imagen y texto en el centro */
  margin-top:10px;
  

`
const ImagenHome = styled.img`
     padding-right: 10px; /* Espacio entre imagen y texto */
    width: 20px; /* Ajusta el tamaño de la imagen */
  
`
const ContenedorBotonNuevo = styled.div`
       display: none;
  @media (min-width: 220px) and (max-width: 780px) {
    display: flex;
    justify-content: center;
    height: 40px;
    align-items: center;
  }
`
const BotonNuevo = styled.button`
  background-color: transparent; /* Color de fondo por defecto */
  color: #2271D1;
  padding: 10px 20px;
  border-radius: 25px;
  border: solid 2px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Alinea imagen y texto en el centro */
  margin-top: 10px;
  width: 90%;
  height: 100%;

  @media (min-width: 220px) and (max-width: 780px) {
    background-image: url("/img/boton-mas.png");
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center; 
    color: transparent; 
  }
  
`

const ImagenNuevo = styled.img`
     padding-right: 10px; /* Espacio entre imagen y texto */
     width: 20px;
     width: 80%;
`

export const Footer = () => {
  return (

    <Pie>
      <Titulo>Desarrollado por Emanuel Cotez Morales. Alura 2024</Titulo>
      <ImgLogo src="img/logo.png" alt="logo de Legoflix" />

      <ContenedorBotones>
        <ContenedorBotonHome>
        <Link to="/">
          <BotonHome>
            <ImagenHome src="img/home.png" alt="Home" />HOME
          </BotonHome>
          </Link>
        </ContenedorBotonHome>
        <ContenedorBotonNuevo>
        <Link to="/nuevo">
          <BotonNuevo />
            
          
          </Link>
        </ContenedorBotonNuevo>
      </ContenedorBotones>

    </Pie>

  )
}

export default Footer