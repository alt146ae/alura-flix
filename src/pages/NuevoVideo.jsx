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
  @media (min-width: 320px) and (max-width: 480px) {
    height: 130vh;
    width :100vw;
    font-size: 1.5em;
    padding: 1px;
    }
`


const Titulo = styled.h1`
    
    color: white;
    text-align: center;
    font-size: 4em;
    letter-spacing: 10px;
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.5em  ;
    }

`
const Subitutlo = styled.h2`

    color: white;
    text-align: center;
    font-size: 2em;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 1.2em  ;
      width: 90vw;
      
    }
`


export const NuevoVideo = (props) => {
  console.log("props de nuevo",props)
  return (
    
    <Container>
      
      <Titulo> NUEVO  VIDEO :
      
      </Titulo>
      
      <Subitutlo> Complete el formulario para crear una nueva tarjeta de video. </Subitutlo>
      
    <FormularioNuevo/>
         
      
    </Container>
    
    

  )
}

export default NuevoVideo