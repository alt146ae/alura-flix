import styled from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import FormularioNuevo from "../components/Formulario"



const Container = styled.div`
  background-color: #000000;
  padding: 15px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100%;
`


const Titulo = styled.h1`
    
    color: white;
    text-align: center;
    font-size: 4em;
    letter-spacing: 10px;
`
const Subitutlo = styled.h2`
    color: white;
    text-align: center;
    font-size: 2em;
`

const Formulario = styled.div`
  
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 80%;
  
`
const TituloFormulario = styled.label`
    color: white;
    font-size: 3.5em;
    padding: 10px;
    border-top: yellow 5px solid;
    border-bottom: yellow 5px solid;
    `
const CampoFila = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 45px;
`

const Columna = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Etiqueta = styled.label`
  color: white;
  font-size: 1.8em;
  margin: 15px;
  
  
`
const Input = styled.input`
  padding: 10px;
  background-color: black;
  border: grey 3px solid;
  border-radius: 15px;
  font-size: 1.8em;
  color: white;
  
`

const SelectCategoria = styled.select`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.8em;
  background-color: white;
`



const Descripcion = styled.textarea`
    width: 773px;
    height: 220px;
    color: white;
    font-size: 1.8em;
    background-color: black;
    border: grey 3px solid;
`
const ContainerBotones = styled.div`
    display: flex;
    gap: 25px;

`

const BotonGuardar = styled.button`
  padding: 10px;
  width: 180px;
  border: blue 4px solid;
  border-radius: 20px;
  background-color: #000000;
  color: white;
  font-size: 2em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
const BotonLimpiar = styled.button`
  padding: 10px;
  width: 180px;
  border: white 4px solid;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-size: 2em;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const NuevoVideo = () => {
  return (
    <Container>
      <Titulo> NUEVO   VIDEO </Titulo>
      <Subitutlo> Complete el formulario para crear una nueva tarjeta de video. </Subitutlo>
    <FormularioNuevo/>
           
      
    </Container>
    
    

  )
}

export default NuevoVideo