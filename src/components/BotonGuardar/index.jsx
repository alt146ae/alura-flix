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
  @media (min-width: 220px) and (max-width: 480px) {
    font-size: 1.2em;
    margin-top: 15px;
  }

`

const BotonGuardar = (props) => {
  return <BotonG>{props.children}</BotonG>
        
          
  }

export default BotonGuardar
