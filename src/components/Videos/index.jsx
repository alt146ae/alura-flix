import styled from "styled-components";
import React from 'react';
import BotonBorrar from "../BotonBorrar";
import BotonsEditar from "../BotonEditar";
import axios from 'axios';

const VideoyBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivVid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const VideoWrapper = styled.div`
  align-items: center;
`;

const BotonesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 430px;
`;

const VideosEstilizado = styled.iframe`
  width: 430px;
  height: 260px;
  border: none;
  border-radius: 10px;
  border: solid 3px;
  border-color: ${(props) => props.colorSecundario};
`;

const Videos = ({ videoUrl, titulo, colorSecundario, id, onDelete }) => {
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
          <VideosEstilizado
            src={videoUrl.replace("watch?v=", "embed/")}
            title={titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            colorSecundario={colorSecundario}
            allowFullScreen
          />
          <BotonesContainer>
            <BotonBorrar onClick={eliminarVideo} />
            <BotonsEditar />
          </BotonesContainer>
        </VideoWrapper>
      </DivVid>
    </VideoyBoton>
  );
};

export default Videos;
