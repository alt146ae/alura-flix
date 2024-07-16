import { useState } from "react"
import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import BotonLimpiar from "../BotonLimpiar"
import BotonGuardar from "../BotonGuardar"
import CampoDescripcion from "../Descripcion"
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2"

const Formulario = styled.form`
  
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
  max-width: 80%;
  @media (min-width: 220px) and (max-width: 780px){
      font-size: .4em;
      width: 100lvw;
      display: flex;
      flex-direction: column;
      gap: 5px;
      
    }
`

const TituloFormulario = styled.label`
    
    color: white;
    font-size: 3.5em;
    padding: 10px;
    border-top: yellow 5px solid;
    border-bottom: yellow 5px solid;
    @media (min-width: 220px) and (max-width: 780px) {
      font-size: 1.8em;
      text-align: center;
      padding: 7px;
    }
    `

const CampoFila = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 45px;
  @media (min-width: 220px) and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`

const BotonesDiv = styled.div`

    display: flex;
    gap: 25px;
    @media (min-width: 220px) and (max-width: 780px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
  }
`


const FormularioNuevo = (props) => {

  const [titulo, actualizarTitulo] = useState("")
  const [imagen, actualizarImagen] = useState("")
  const [video, actualizarVideo] = useState("")
  const [categoria,actualizarCategoria] = useState ("")
  const [descripcion,actualizarDescripcion] = useState ("")
  const {registrarVideo}= props

  const manejarEnvio = (e) => {
    e.preventDefault()
    
    if (!imagen.startsWith("https://")) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La URL de la imagen debe comenzar con 'https://'",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    const validExtensions = [".jpeg", ".jpg", ".png", ".bmp", ".gif"];
    const hasValidExtension = validExtensions.some((ext) =>
      imagen.toLowerCase().endsWith(ext)
    );

    if (!hasValidExtension) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La URL de la imagen debe terminar con .jpeg, .jpg, .png, .bmp o .gif",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    
    if (!video.startsWith("https://")) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La URL del video debe comenzar con 'https://'",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }


   const datosAEnviar = {
      id: uuidv4(),
      titulo: titulo,
      imagen: imagen,
      video: video,
      categoria: categoria,
      descripcion: descripcion
    }
    //console.log(DatosAEnviar);
//    registrarVideo.log(DatosAEnviar);
  

  

// Simulación de una API POST utilizando Axios
axios.post('https://669347aac6be000fa07a88fe.mockapi.io/videos', datosAEnviar)
.then(response => {
  console.log('Datos enviados:', response.data);
  // Aquí podrías realizar otras acciones después de enviar los datos
  if (registrarVideo) {
    registrarVideo(datosAEnviar); // Actualiza el estado en el componente padre si es necesario
  }
  manejarReset();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Video agredado correctamente",
    showConfirmButton: false,
    timer: 1500
  });
  

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
    <Formulario onSubmit={manejarEnvio}>
      <TituloFormulario htmlFor="titulo">Crear Tarjeta</TituloFormulario>
      <CampoFila>
        <CampoTexto
          titulo="Titulo"
          placeholder="Ingrese el título"
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <ListaOpciones 
        valor={categoria} 
        actualizarCategoria={actualizarCategoria}
        categorias={props.categoria}
        
        />
      </CampoFila>
      <CampoFila>
        <CampoTexto
          titulo="Imagen"
          placeholder="El enlace es obligatorio"
          valor={imagen}
          actualizarValor={actualizarImagen}
          
        />
        <CampoTexto 
          titulo="Video"
          placeholder="Ingrese el enlace del video" 
          valor={video}
          actualizarValor={actualizarVideo}
          />

      </CampoFila>
      <CampoDescripcion
        titulo="Descripcion"
        placeholder="Escribe una breve descripcion del video"
        valor={descripcion}
        actualizarValor ={actualizarDescripcion}
          />
      <BotonesDiv>
        <BotonGuardar type="submit"> Guardar</BotonGuardar>
        <BotonLimpiar onClick={manejarReset}> Limpiar </BotonLimpiar>
      </BotonesDiv>
    </Formulario>
  )
}

export default FormularioNuevo
