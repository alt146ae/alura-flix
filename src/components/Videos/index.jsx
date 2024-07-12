import styled from "styled-components";
import React, { useState } from 'react';
import BotonBorrar from "../BotonBorrar";
import BotonsEditar from "../BotonEditar";
import axios from 'axios';
import ModalZoom from "../ModalZoom";




const VideoyBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivVid = styled.div`
  display: flex;
  justify-content: center;
  
`;

const VideoWrapper = styled.div`
  align-items: center;
  
`;

const BotonesContainer = styled.div`
  
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 350px;
`;

const BotonImagen = styled.button`
  width: 350px;
  height: 260px;
  background-image: url(${(props) => props.imagen});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: solid 10px ${(props) => props.colorSecundario}; /* Color del borde */
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;

const Videos = ({ titulo, video, imagen, id, onDelete, onClickVideo, colorSecundario ,categoria,descripcion}) => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  
  const eliminarVideo = async () => {
    try {
      await axios.delete(`http://localhost:3000/videos/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Error al eliminar video', error);
    }
  };

  

  return (
    <VideoyBoton>
      <DivVid>
        <VideoWrapper>
        <BotonImagen imagen={imagen} colorSecundario={colorSecundario} onClick={() => onClickVideo({ video, titulo,categoria,descripcion})}>
            <span style={{ color: 'white', 
              position: 'absolute', 
              bottom: '10px', left: '10px', 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
               }}>

            </span>
          </BotonImagen>
          <BotonesContainer>
            <BotonBorrar onClick={eliminarVideo} />
            <BotonsEditar onClick={Toggle}/>
          </BotonesContainer>
        </VideoWrapper>
      </DivVid>
      {modal && <ModalZoom onClose={Toggle} />} {/* Renderiza el modal */}
    </VideoyBoton>
  );
};

export default Videos;
