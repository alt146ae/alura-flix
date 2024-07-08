import { useState  } from "react"

import styled from "styled-components"

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
`

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
  outline-color: red;
  
`


const CampoTexto = (props) => {
  
  //  const [valor, setValor]  = useState ("")
  
  const manejarCambio =  (e) => {
    // console.log("Cambio", e.target.value);
    props.actualizarValor(e.target.value)
  }

  return (
    
    <Columna>
      <Etiqueta htmlFor="titulo">{props.titulo}</Etiqueta>
      <Input type="text" id="imagen" name="titulo_video"  
      placeholder={props.placeholder} 
      required
      value={props.valor}
      onChange ={manejarCambio}
      />
    
    
    </Columna>
   
  )
}

export default CampoTexto