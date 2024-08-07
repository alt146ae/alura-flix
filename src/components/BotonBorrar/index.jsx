import React from 'react'
import styled from 'styled-components'

const BotonesCategoriaStyled = styled.div`
    margin-top: 10px;
    width: 380px;
    height: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
`
const BtBorrar = styled.button`
    width: 150px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    cursor: pointer;
    font-size: 1.5em;

`

const ImagenBotonBorrar = styled.img`
    margin-right: 10px;
    width: 15px;
`
const BotonBorrar = ({ onClick }) => {
  return (
    <BotonesCategoriaStyled>
        <BtBorrar onClick={onClick}>
            <ImagenBotonBorrar src="/img/eliminar.png"/>
            BORRAR
        </BtBorrar>
    </BotonesCategoriaStyled>
  )
}

export default BotonBorrar