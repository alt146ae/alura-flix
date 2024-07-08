import styled from "styled-components"

const BotonG = styled.button`
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

const BotonGuardar = (props) => {
  return <BotonG>{props.children}</BotonG>
        
          
  }

export default BotonGuardar
