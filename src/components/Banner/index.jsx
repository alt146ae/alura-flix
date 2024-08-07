import styled from "styled-components";

const ImagenBanner = styled.figure`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
 min-height: 30vh;
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

  @media (min-width: 1025px) and (max-width: 1700px) {

    justify-content: space-evenly;
    width: 100dvw;    
  }
  
  @media (min-width: 781px) and (max-width: 1024px) {
    
    justify-content: space-evenly;
    min-width: 100vw;    
  }
  @media (min-width: 220px) and (max-width: 780px) {
    
    flex-direction: column;
    align-items: flex-start;    
  }
  
`;

const ContenedorTexto = styled.div`
  
  margin-left: 100px;
  width: 800px;
  height: 450px;
  z-index: 2;
  color: #fff; 

  @media (min-width: 1025px) and (max-width: 1700px) {
    min-width: 40vw;
    margin-left: 1vw
  }
  @media (min-width: 781px) and (max-width: 1024px) {
      
      min-width: 40vw;
      margin-left: 1vw;
    }
  @media (min-width: 220px) and (max-width: 780px) {
    margin-left: 0;
    align-items: flex-start;
    width: 340px;
    height: auto;
    margin-bottom: 10px;
    
  }
`;

const Categoria = styled.h1`
  
  max-width: 400px;
  padding: 80px;
  text-align: center;
  background-color: black;
  border-radius: 25px;
  font-size: 4em;
  height: auto;
  color: brown;
  padding: 0 70px;
  margin: auto;
  z-index: 2;

  @media (min-width: 1025px) and (max-width: 1700px) {
    display: flex;
    justify-content: space-evenly;
    font-size: 3em;
    min-width: 10vw;
    max-width: 20vw;
  }
  @media (min-width: 781px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    font-size: 3em;
    min-width: 10vw;
    max-width: 20vw;
    
    
  }
  @media (min-width: 220px) and (max-width: 780px) {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    font-size: 1.5em;
    width: 150px;
    margin-top: 8px;
    
    
  }
`;

const Titulo = styled.h2`
  font-weight: 400;
  font-size: 2em;
  max-width: 500px;
  margin-top: 1PX;
  z-index: 2;
  color: green;
  margin-top: 25px;
  @media (min-width: 220px) and (max-width: 780px) {
    font-size: 1.2em;
    margin-top: 10px;
  }
`;

const Descripcion = styled.p`
  
  width: 820px;
  max-height: 280px;
  font-size: 1.8em;
  font-weight: 800;
  font-family: AppleGaramondLight;
  color: black;
  overflow-x: auto;
  @media (min-width: 1025px) and (max-width: 1700px) {
    
    width: 50vw;
    font-size: 1.8em;
    text-align: left;
    
  }
  @media (min-width: 781px) and (max-width: 1024px) {
    
    width: 42vw;
    
  }
  @media (min-width: 220px) and (max-width: 780px) {
    
    width: 340px;
    height: 100px;
    font-size: 1.1em;
    margin-left: -10px;
    
  }
`;

const IframeEstilizado = styled.iframe`
  width: 747px;
  height: 335px;
  border: none;
  border-radius: 10px;
  margin-right: 200px;
  margin-left: auto;
  margin-right: 50px;
  z-index: 2;
  &:hover {
    width: 700px;
    height: 500px;
  }
  @media (min-width: 1025px) and (max-width: 1700px) {
    pointer-events: none;
    width: 75vw;
    margin-left: 14vh;
  }
  @media (min-width: 781px) and (max-width: 1024px) {
    
    width: 90vw;
    min-height: 30vh;
    max-height: 40vh;
    
    pointer-events: none;

  }
  
  @media (min-width: 220px) and (max-width: 780px) {
        margin-left: 15px;
    width: 300px;
    height: 180px;
    &:hover {
      width: 301px;
      height: 201px;
  }
    
  }
`;

const convertToEmbedUrl = (url) => {
  if (!url) return '';
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url; // Devuelve el URL original si no hay coincidencia
};

export const Banner = ({ backgroundImage, videoUrl, title ,category,description}) => {
  const embedUrl = convertToEmbedUrl(videoUrl);
  return (
    <ImagenBanner $backgroundImage={backgroundImage}>
      <ContenedorPrincipal>
        <ContenedorTexto>
          <Categoria>{category|| 'LEGO'}</Categoria>
          <Titulo>{title || 'LEGOFLIX'}</Titulo>
          <Descripcion>
          {description || 'Descripción'}
          </Descripcion>
        </ContenedorTexto>
        {embedUrl && (
          <IframeEstilizado
            src={embedUrl}
            title="Lego DC"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </ContenedorPrincipal>
    </ImagenBanner>
  );
};

export default Banner;
