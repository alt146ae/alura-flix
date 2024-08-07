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
const BtEditar = styled.button`
    width: 150px;
    height: 33px;
    color: aliceblue;
    background-color: transparent;
    border: 1px solid gold;
    cursor: pointer;
    font-size: 1.5em;

` 

const ImagenBotonEditar = styled.img`
    margin-right: 10px;
    width: 15px;
`

export const BotonsEditar = ({onClick}) => {
  return (
    <BotonesCategoriaStyled>
    <BtEditar  onClick={onClick}>
    <ImagenBotonEditar src="/img/editar.png"/>
        EDITAR
    </BtEditar>
    </BotonesCategoriaStyled>
  )
}
export default BotonsEditar