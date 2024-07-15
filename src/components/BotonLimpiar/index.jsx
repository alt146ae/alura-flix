import styled from "styled-components"

const BotonL = styled.button`
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
  @media (min-width: 220px) and (max-width: 480px) {
    font-size: 1.2em;
    margin-top: 15px;
  }
  




`

const BotonLimpiar = (props) => {
  return (
    <BotonL type="button" onClick={props.onClick}>
      {props.children}
      </BotonL>
  )
}

export default BotonLimpiar