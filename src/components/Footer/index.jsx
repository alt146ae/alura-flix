import styled from "styled-components"



const Pie = styled.footer`
    background-color: #ff00007d;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    align-items: flex-end;
    background-image: "./assets/footer.jpg";
    width: 100%;
    @media (min-width: 320px) and (max-width: 480px) {
    img {
      display: none;
    }
  }  

    
`
const Titulo = styled.h2`
    font-size: 1.6em;
    letter-spacing: 3px;
    justify-content: center;
    @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  } 
`
const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BotonHome = styled.button`
  display: none;
  background-color: black;
  color: #2271D1;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  border: solid 2px ;
  cursor: pointer;
  width: 167px;
  margin: 10px;
  

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
` 
const ImagenHome = styled.img`
     display: none;
     margin-right: 100px;
     width: 15px; 
     @media (min-width: 320px) and (max-width: 480px) {
    background-color: blue;
      display: block;
    
  }
   
`

export const Footer = () => {
  return (
   
   <Pie>
    <Titulo>Desarrollado por Emanuel Cotez Morales. Alura 2024</Titulo>        
    <img src="img/logo.png" alt="logo de Legoflix" />
    
    
    <ContenedorBotones>
        <BotonHome>
        <ImagenHome  src="/img/home.png"/>
        HOME </BotonHome>
    </ContenedorBotones>

    </Pie>

  )
}

export default Footer