import { useState, useEffect } from "react"
import axios from "axios";
import React from 'react'
import styled from 'styled-components';


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
`;


const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;;
  transform: translate(-50%, -50%);
  width: 874px;
  height: 1000px;
  background-color: rgba(18, 32, 116, 0.815);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: solid 5px red;
  z-index: 2;
`;




const ModalContent = styled.div`
  
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

const BotonCerrar = styled.button`
  position: fixed;
  top: 10px;
  right: 50px;
 border: none;
  background-color: transparent;
  width: 45px;
  cursor: pointer;
  
`
const ImagenBotonCerrar = styled.img`
    margin-right: 10px;
    width: 45px;
`

const Titulo = styled.h1`
  font-size: 5em;
  color: white;
  text-align: center;
`


const Formulario = styled.form`
 display: flex;
 flex-direction: column;
 gap: 10px;
`
const LabelTitulo = styled.label`
  font-size: 1.8em;
  color: white;
`
const InputTitulo = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 573px;
    height: 50px;
    margin-bottom: 10px;
`

const LabelCategoria = styled.label`
  font-size: 1.8em;
  color: white;
`

const SelectCategoria = styled.select`
  font-size: 1.8em;
  width: 573px;
  height: 50px;
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
    width: 573px;
    height: 50px;
    margin-bottom: 10px;
`
const LabelVideo = styled.label`
  font-size: 1.8em;
  color: white;
`
const InputVideo = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 573px;
    height: 50px;
    margin-bottom: 10px;
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
    width: 573px;
    height: 150px;
    white-space: break-word;
    resize: none;
    margin-bottom: 10px;
    overflow: auto;
    margin-bottom: 10px;
    overflow-x: auto;

`
const BotonesContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
        alert("Elemento actualizado exitosamente");
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
