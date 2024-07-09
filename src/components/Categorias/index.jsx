import styled from "styled-components"

const MainContainer = styled.div`
    background-color: black;
    padding-top: 15px;
    width: 100%;
    height: 435px;
    
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


const Categorias = (props) => {

  const {colorPrimario, colorSecundario,categoria}= props.datos

  const   colorFondo = {
    backgroundColor: colorPrimario
  }

  const   colorTitulo = {
    color: colorSecundario
  }
  return (
    <MainContainer style={colorTitulo}>
    <EstiloCategorias style={colorFondo} >{categoria}</EstiloCategorias>
    </MainContainer>    

  )
}

export default Categorias


