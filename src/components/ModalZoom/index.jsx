import { useState, useEffect } from "react"
import axios from "axios";
import React from 'react'
import styled from 'styled-components';
import Swal from "sweetalert2"


const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    
    @media (min-width: 220px) and (max-width: 780px) {
    position: fixed;
    
    width :100lvw;
    font-size: 1.5em;
    padding: 1px;
    }
`;


const ModalContainer = styled.div`
  position: relative;
  top: 45%;
  left: 25%;;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 90%;
  background-color: rgba(18, 32, 116, 0.815);
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 5px red;
  z-index: 2;
  padding: 5px;
  @media (min-width: 1025px) and (max-width: 1700px) {
    height: 74dvh;
    min-width: 90vw;
    top: 47%;
    left: 45%;
    
  }
  
  @media (min-width: 781px) and (max-width: 1024px) {
    height: 70dvh;
    
    min-width: 80vw;
    top: 21%;
    left: 35%;
    }
  @media (min-width: 220px) and (max-width: 780px) {
    height: 85lvh;
    width :80lvw;
    font-size: 1.3em;
    padding: 1px;
    top: 40%;
    left: 40%;
    }
  
`;

const ModalContent = styled.div`
  
  padding: 10px;
  border-radius: 10px;
  position: relative;
  
  @media (min-width: 1025px) and (max-width: 1700px) {
    font-size: .7em;
    height: 77dvh;
  }
  
  @media (min-width: 781px) and (max-width: 1024px) {
    font-size: .8em;
    height: 70dvh;
    
  }
  
  @media (min-width: 220px) and (max-width: 780px) {
    height: 85lvh;
    width :70lvw;
    font-size: .3em;
    padding: 10px;
    }
`;

const BotonCerrar = styled.button`
  position: fixed;
  top: 10px;
  right: 50px;
 border: none;
  background-color: transparent;
  width: 45px;
  cursor: pointer;
  @media (min-width: 220px) and (max-width: 780px) {
    top: 5px;
    right: 1px;
    
    }
`
const ImagenBotonCerrar = styled.img`
    margin-right: 10px;
    width: 45px;
    @media (min-width: 220px) and (max-width: 780px) {
    width: 8lvw;
    
    }
`

const Titulo = styled.h1`
  font-size: 4.5em;
  color: white;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`


const Formulario = styled.form`
 display: flex;
 flex-direction: column;
 gap: 10px;
 
 @media (min-width: 481px) and (max-width: 1024px) {
    height: 65dvh;
 }
 @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    height: 80lvh;
    
    }
 
 
`
const LabelTitulo = styled.label`
  font-size: 1.8em;
  color: white;
`
const InputTitulo = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 600px;
    height: 50px;
    margin-bottom: 10px;
    @media (min-width: 1025px) and (max-width: 1700px) {
   width : 80dvw;
   
  }
    @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    
    }

`

const LabelCategoria = styled.label`
  font-size: 1.8em;
  color: white;
  
`

const SelectCategoria = styled.select`
  font-size: 1.8em;
  width: 600px;
  height: 50px;
  border: solid 7px #257a10;
  @media (min-width: 1025px) and (max-width: 1700px) {
   width : 80dvw;
   
  }
  @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    
    }
`
const LabelImagen = styled.label`
  font-size: 1.8em;
  color: white;
  font-size: 1.6em;
`
const InputImagen = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 600px;
    height: 50px;
    margin-bottom: 10px;
    @media (min-width: 1025px) and (max-width: 1700px) {
   width : 80dvw;
   
  }
    @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    
    }
`
const LabelVideo = styled.label`
  font-size: 1.8em;
  color: white;
`
const InputVideo = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 600px;
    height: 50px;
    margin-bottom: 10px;
    @media (min-width: 1025px) and (max-width: 1700px) {
   width : 80dvw;
   
  }
    @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    
    }
`
const LabelDescripcion = styled.label`
  font-size: 1.8em;
  color: white;
`
const InputDescripcion = styled.textarea`
    font-size: 1.6em;
    text-align: justify;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 600px;
    height: 150px;
    white-space: break-word;
    resize: none;
    margin-bottom: 10px;
    overflow: auto;
    margin-bottom: 10px;
    overflow-x: auto;
    @media (min-width: 1025px) and (max-width: 1700px) {
   width : 80dvw;
   
  }
    @media (min-width: 220px) and (max-width: 780px) {
    width: 70lvw;
    height: 25lvh;
    
    }

`
const BotonesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 220px) and (max-width: 780px) {
    
    gap: 15px;
    
    
    }
`
const BotonGuardar = styled.button`
  width: 181px;
  height: 54px;
  font-size: 1.7em;
  border: solid 7px #257a10;
  background-color: #04AA6D;
  border-radius: 25px;
  color: blue;
`
const BotonLimpiar = styled.button`
  width: 181px;
  height: 54px;
  font-size: 1.7em;
  background-color: #ff9800;
  border: solid 7px #257a10;
  border-radius: 25px;
  color: white;
`



const ModalZoom = ({ onClose,video, categorias,onUpdate }) => {

  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("")
  const [videoUrl, actualizarVideo] = useState("")
  const [categoria, actualizarCategoria] = useState("")
  const [descripcion, actualizarDescripcion] = useState("")

  useEffect(() => {
    if (video) {
      actualizarTitulo(video.titulo || "");
      actualizarImagen(video.imagen || "");
      actualizarVideo(video.video || "");
      actualizarCategoria(video.categoria || "");
      actualizarDescripcion(video.descripcion || "");
    }
  }, [video]);


  const manejarEnvio = async (e) => {
    e.preventDefault()


    const datosAEnviar = {
      id: video.id,
      titulo,
      imagen,
      video: videoUrl,
      categoria,
      descripcion
    };

    try {
      const { status } = await axios.put(`https://669347aac6be000fa07a88fe.mockapi.io/videos/${video.id}`, datosAEnviar);
      if (status !== 200) {
        alert("Hubo un error al intentar editar el video");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Video actualizado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
        onUpdate(datosAEnviar); // Llama a la función onUpdate para recargar los datos en el componente padre
        onClose();
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert("Ocurrió un error al intentar actualizar el video.");
    }
  };


  const manejarReset = () => {

    actualizarTitulo("");
    actualizarImagen("");
    actualizarVideo("");
    actualizarCategoria("");
    actualizarDescripcion("");
  };



  return (
    <Overlay>
    <ModalContainer >
      <ModalContent >


       
        <Formulario onSubmit={manejarEnvio}>
        <Titulo> EDITAR CARD: </Titulo>
          <LabelTitulo>Título</LabelTitulo>
          <InputTitulo
            value={titulo}
            onChange={(e) => actualizarTitulo(e.target.value)}
            required
          />
          <LabelCategoria>Categoria</LabelCategoria>
          <SelectCategoria
            value={categoria}
            onChange={(e) => actualizarCategoria(e.target.value)}
            required
          >
            {categorias.map((cat) => (
              <option key={cat.categoriaL} value={cat.categoriaL}>
                {cat.categoriaL}
              </option>
            ))}
          </SelectCategoria>
          <LabelImagen>Imagen</LabelImagen>
          <InputImagen 
           value={imagen}
           onChange={(e) => actualizarImagen(e.target.value)}
           required
          />
          <LabelVideo>Video</LabelVideo>
          <InputVideo 
          value={videoUrl}
          onChange={(e) => actualizarVideo(e.target.value)}
          required
          />
          <LabelDescripcion>Descripcion</LabelDescripcion>
          <InputDescripcion 
          value={descripcion}
          onChange={(e) => actualizarDescripcion(e.target.value)}
          required
          />

          <BotonesContainer>
            <BotonGuardar type="submit">Guardar</BotonGuardar>
            <BotonLimpiar type="button" onClick={manejarReset}>
              Limpiar</BotonLimpiar>
          </BotonesContainer>

          <BotonCerrar onClick={onClose} >
            <ImagenBotonCerrar src="img/cerrar.png" />
          </BotonCerrar>
        </Formulario>


      </ModalContent>
    </ModalContainer>
    </Overlay>
  )
}

export default ModalZoom
