import styled from "styled-components"
import { BrowserRouter as Router } from "react-router-dom"
import FormularioNuevo from "../components/Formulario"
import Swal from "sweetalert2"


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


export const NuevoVideo = (props) => {
  console.log("props de nuevo",props)
  return (
    
    <Container>
      
      <Titulo> NUEVO  VIDEO 
      
      </Titulo>
      
      <Subitutlo> Complete el formulario para crear una nueva tarjeta de video. </Subitutlo>
      
    <FormularioNuevo 
   
    />
         
      
    </Container>
    
    

  )
}

export default NuevoVideo