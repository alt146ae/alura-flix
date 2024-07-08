import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerBotones = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 1.4em;
    gap: 20px; 
    
    `
const BotonHome = styled.button`
    height: 64px;
    width: 281px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border-radius:20px;
    letter-spacing: 4px;
    text-decoration: none;
        overflow: hidden;
        color: white;
        border: 3px solid white;
    transition: 0.2s;
    background-color: black;
    &:hover {
        box-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Cambia el color de fondo al pasar el mouse */
        color: yellow; /* Cambia el color del texto al pasar el mouse */
        transform: scale(1.05); /* Aumenta ligeramente el tamaño del botón */
    }
`
const BotonNuevoVideo = styled.button`
   height: 64px;
   width: 281px;
   cursor: pointer;
   letter-spacing: 4px;
   border-radius:20px;
   border: 3px solid white;
    background-color: black;
    color: white;
    &:hover {
        box-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Cambia el color de fondo al pasar el mouse */
        color: yellow; /* Cambia el color del texto al pasar el mouse */
        transform: scale(1.05); /* Aumenta ligeramente el tamaño del botón */
    }
`

const BotonesHeader = () => {
    return (
        <ContainerBotones>
            <Link to="/">
            <BotonHome>
                HOME
            </BotonHome>
            </Link>
            <Link to="/nuevo">
            <BotonNuevoVideo>
                NUEVO VIDEO
            </BotonNuevoVideo>
            </Link>
        </ContainerBotones>
    )
}

export default BotonesHeader