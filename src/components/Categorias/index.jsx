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
    background-color: white;
    border-radius: 25px;
    font-size: 32px;
    width: 432px;
    height: 70px;
    color: brown;
    margin-left: 35px;
    
`


const Categorias = (props) => {
  return (
    <MainContainer>
    <EstiloCategorias>{props.categoria}</EstiloCategorias>
    </MainContainer>    

  )
}

export default Categorias


