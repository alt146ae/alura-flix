import styled from "styled-components";
import React from 'react';
import BotonBorrar from "../BotonBorrar";
import BotonsEditar from "../BotonEditar";
import axios from 'axios';
import Swal from "sweetalert2";

const VideoyBoton = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px; // Ajusta este margen si es necesario
  @media (min-width: 220px) and (max-width: 480px) {
    font-size: 1.3em;
    width: 80lvw;
    
  }
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

const Videos = ({ titulo, video, imagen, id, onDelete, onClickVideo, colorSecundario, categoria, descripcion, onEditVideo }) => {
  const eliminarVideo = async () => {
    const result = await Swal.fire({
      title: "¿Deseas borrar el video?",
      text: "No se podrá revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, bórralo!"
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://669347aac6be000fa07a88fe.mockapi.io/videos/${id}`);
        onDelete(id);
        Swal.fire({
          title: "Borrado!",
          text: "Tu video ha sido borrado.",
          icon: "success"
        });
      } catch (error) {
        console.error('Error al eliminar video', error);
        Swal.fire({
          title: "Error",
          text: "Hubo un error al intentar borrar el video.",
          icon: "error"
        });
      }
    }
  };

  const handleClickVideo = () => {
    onClickVideo({ video, titulo, categoria, descripcion });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <VideoyBoton>
      <DivVid>
        <VideoWrapper>
          <BotonImagen 
            imagen={imagen} 
            colorSecundario={colorSecundario} 
            onClick={handleClickVideo}
          >
            <span style={{ color: 'white', position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              {/* Aquí puedes poner el texto que quieras mostrar en la imagen */}
              
            </span>
          </BotonImagen>
          <BotonesContainer>
            <BotonBorrar onClick={eliminarVideo} />
            <BotonsEditar onClick={onEditVideo} />
          </BotonesContainer>
        </VideoWrapper>
      </DivVid>
    </VideoyBoton>
  );
};

export default Videos;