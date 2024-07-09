import { useState } from "react"
import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import BotonLimpiar from "../BotonLimpiar"
import BotonGuardar from "../BotonGuardar"
import CampoDescripcion from "../Descripcion"


const Formulario = styled.form`
  
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 80%;
`

const TituloFormulario = styled.label`
    color: white;
    font-size: 3.5em;
    padding: 10px;
    border-top: yellow 5px solid;
    border-bottom: yellow 5px solid;
    `

const CampoFila = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 45px;
`


const Etiqueta = styled.label`
  color: white;
  font-size: 1.8em;
  margin: 15px; 
`

const Descripcion = styled.textarea`
    width: 773px;
    height: 220px;
    color: white;
    font-size: 1.8em;
    background-color: black;
    border: grey 3px solid;
`
const BotonesDiv = styled.div`
    display: flex;
    gap: 25px;
`


const FormularioNuevo = (props) => {

  const [titulo, actualizarTitulo] = useState("")
  const [imagen, actualizarImagen] = useState("")
  const [video, actualizarVideo] = useState("")
  const [categoria,actualizarCategoria] = useState ("")
  const [descripcion,actualizarDescripcion] = useState ("")

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log("Manejar Envio");
    let DatosAEnviar = {
      titulo: titulo,
      imagen: imagen,
      video: video,
      categoria: categoria,
      descripcion: descripcion
    }
    console.log(DatosAEnviar);

  }



  return (
    <Formulario onSubmit={manejarEnvio}>
      <TituloFormulario htmlFor="titulo">Crear Tarjeta</TituloFormulario>
      <CampoFila>
        <CampoTexto
          titulo="Titulo"
          placeholder="ingrese el título"
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <ListaOpciones 
        valor={categoria} 
        actualizarCategoria={actualizarCategoria}
        //////////
        categorias={props.categoria}
        /////////
        />
      </CampoFila>
      <CampoFila>
        <CampoTexto
          titulo="Imagen"
          placeholder="el enlace es obligatorio"
          valor={imagen}
          actualizarValor={actualizarImagen}
        />
        <CampoTexto 
          titulo="Video"
          placeholder="ingrese el enlace del video" 
          valor={video}
          actualizarValor={actualizarVideo}
          />

      </CampoFila>
      <CampoDescripcion
        titulo="Descripcion"
        placeholder="Escribe una breve Descripcion del video"
        valor={descripcion}
        actualizarValor ={actualizarDescripcion}
          />
      <BotonesDiv>
        <BotonGuardar type="submit"> Guardar</BotonGuardar>
        <BotonLimpiar type="reset"> Limpiar </BotonLimpiar>
      </BotonesDiv>
    </Formulario>
  )
}

export default FormularioNuevo
