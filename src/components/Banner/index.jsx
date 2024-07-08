import styled from "styled-components"

const ImagenBanner = styled.figure`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-height: 550px;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.$backgroundImage})`};
    
    background-size: cover;
    
    
    z-index: 1;
  }  
`

const ContenedorPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  z-index: 2;
`;

const ContenedorTexto = styled.div`
  display: flex;
  margin-left: 150px;
  width: 700px;
  height: 400px;
  flex-direction: column;
  
  z-index: 2;
  color: #fff; /* Asegúrate de que el texto y el botón sean visibles sobre la imagen */
  
`;

const Categoria = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 25px;
    font-size: 4em;
    width: 300px;
    height: 72px;
    color: brown;
    padding: 0 15px;
    z-index: 2;
`

const Titulo = styled.h2`
    font-weight: 400;
    font-size: 2em;
    max-width: 300px;
        z-index: 2;
    color: green;
    
    
  
`

const Descripcion = styled.p`
    font-size: 1.8em;
    font-weight: 800;
    font-family: AppleGaramondLight;
    color: black;
  
`


const IframeEstilizado = styled.iframe`
  width: 647px;
  height: 335px;
  border: none;
  border-radius: 10px;
  margin-right: 200px;
  z-index: 2;
  &:hover {
    width: 700px;
    height: 400px;
  }
  
`;

export const Banner = ({ texto, backgroundImage, videoUrl }) => {
  return (
    <ImagenBanner $backgroundImage={backgroundImage} >
      <ContenedorPrincipal>
        <ContenedorTexto>
          <Categoria>{texto}</Categoria>
          <Titulo>
            SET 76086 AÑO 2006
          </Titulo>
          <Descripcion>
            Dos Caras está destruyéndolo todo a su paso con su asombrosa excavadora.
            Sube a la cabina de la batimoto con Batman y acelera para detenerlo.
            Tienes que llegar rápido, antes de que atrape a los oficiales de la policía de Ciudad Gótica en la pala gigante.


          </Descripcion>

        </ContenedorTexto>
        <IframeEstilizado
          src={videoUrl}
          title="Lego DC"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
        </IframeEstilizado>
      </ContenedorPrincipal>
    </ImagenBanner>


  )
}

export default Banner
