import styled from "styled-components"



const Pie = styled.footer`
    background-color: #ff00007d;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    align-items: flex-end;
    background-image: "./assets/footer.jpg";
    width: 100%;
    
`
const Titulo = styled.h2`
    font-size: 1.6em;
    letter-spacing: 3px;
    justify-content: center;
    
`

export const Footer = () => {
  return (
   
   <Pie>
    <Titulo>Desarrollado por Emanuel Cotez Morales. Alura 2024</Titulo>        
    <img src="img/logo.png" alt="logo de Legoflix" />
        
    
    
    </Pie>
    
  )
}

export default Footer