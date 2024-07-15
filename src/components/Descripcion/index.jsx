import { useState  } from "react"

import styled from "styled-components"

const Etiqueta = styled.label`
  color: white;
  font-size: 1.8em;
  margin: 15px; 
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.3em;
  }
`

const Descripcion = styled.textarea`
    width: 773px;
    height: 220px;
    color: white;
    font-size: 1.8em;
    background-color: black;
    border: grey 3px solid;
    @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.3em;
    width: 97%;
  }
`
const DivDecipcion = styled.div`
    display: flex;
    flex-direction: column;
    
`

const CampoDescripcion = (props) => {

    const manejarCambio =  (e) => {
        // console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value)
      }
    

  return (
    <DivDecipcion>
      <Etiqueta htmlFor="Descripcion">{props.titulo}</Etiqueta>
      <Descripcion 
      type="text" id="descripcion" name="titulo_video" 
      placeholder={props.placeholder}
      required 
      value={props.valor}
      onChange={manejarCambio}

      />
      </DivDecipcion>
  )
}

export default CampoDescripcion