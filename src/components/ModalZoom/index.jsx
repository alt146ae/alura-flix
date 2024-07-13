import { useState, useEffect } from "react"
import axios from "axios";
import React from 'react'
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;;
  transform: translate(-50%, -50%);
  width: 874px;
  height: 940px;
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
const InputDescripcion = styled.input`
    font-size: 1.6em;
    border-radius: 25px;
    border: solid 7px #257a10;
    width: 573px;
    height: 100px;
    overflow-y: auto;
    margin-bottom: 10px;
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



const ModalZoom = ({ onClose,video, categorias }) => {

  const [titulo, actualizarTitulo] = useState("");
  const [imagen, actualizarImagen] = useState("")
  const [videoUrl, actualizarVideo] = useState("")
  const [categoria, actualizarCategoria] = useState("")
  const [descripcion, actualizarDescripcion] = useState("")

  useEffect(() => {
    if (video) {
      actualizarTitulo(video.titulo);
      actualizarImagen(video.imagen);
      actualizarVideo(video.video);
      actualizarCategoria(video.categoria);
      actualizarDescripcion(video.descripcion);
    }
  }, [video]);


  const manejarEnvio = (e) => {
    e.preventDefault()


    const datosAEnviar = {
      id: video.id,
      titulo,
      imagen,
      video: videoUrl,
      categoria,
      descripcion
    };

    axios.put(`http://localhost:3000/videos/${video.id}`, datosAEnviar)
      .then(response => {
        console.log('Datos enviados:', response.data);
        // Aquí podrías realizar otras acciones después de enviar los datos
        manejarReset();
        alert("Elemento actualizado exitosamente");
        onClose(); // Cierra el modal después de guardar
      })
      .catch(error => {
        console.error('Error al enviar datos:', error);
      });
  };


  const manejarReset = () => {

    actualizarTitulo("");
    actualizarImagen("");
    actualizarVideo("");
    actualizarCategoria("");
    actualizarDescripcion("");
  };



  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>


        <Titulo> EDITAR CARD: </Titulo>
        <Formulario onSubmit={manejarEnvio}>
          <LabelTitulo>Título</LabelTitulo>
          <InputTitulo
            value={titulo}
            onChange={(e) => actualizarTitulo(e.target.value)}
          />
          <LabelCategoria>Categoria</LabelCategoria>
          <SelectCategoria
            value={categoria}
            onChange={(e) => actualizarCategoria(e.target.value)}
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
          />
          <LabelVideo>Video</LabelVideo>
          <InputVideo 
          value={videoUrl}
          onChange={(e) => actualizarVideo(e.target.value)}
          />
          <LabelDescripcion>Descripcion</LabelDescripcion>
          <InputDescripcion 
          value={descripcion}
          onChange={(e) => actualizarDescripcion(e.target.value)}
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
  )
}

export default ModalZoom
