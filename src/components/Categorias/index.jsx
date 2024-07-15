import { useEffect, useState } from "react";
import styled from "styled-components";
import Videos from "../Videos";
import { api } from "../../api/api";

const MainContainer = styled.div`
  background-color: black;
  padding-top: 15px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 1.3em;
    width: 100vw;
  }
`;

const EstiloCategorias = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-size: 32px;
  width: 432px;
  height: 70px;
  // Elimina el margen si no es necesario
  @media (min-width: 320px) and (max-width: 480px) {
    width: 50vw;
    margin-left: 15px;
  }
`;

const DivVideos = styled.div`
  margin-left: 20px;
  
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollBarColor} #ffffff; 
  overflow-y: auto;
  gap: 50px;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    margin-left: 15px;
  }
`;

const NoVideosMessage = styled.p`
  color: #fff;
  font-size: 5em  ;
`;

const Categorias = ({ datos, videos, onClickVideo, onEditVideo }) => {
  const [categoriaData, setCategoriaData] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(videos);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await api.get('/categoriaList');
        const categoria = response.data.find((cat) => cat.categoriaL === datos.categoriaL);
        setCategoriaData(categoria);
      } catch (error) {
        console.error('Error fetching categorias', error);
      }
    };

    fetchCategorias();
  }, [datos.categoriaL]);

  useEffect(() => {
    setFilteredVideos(videos);
  }, [videos]);

  const handleDeleteVideo = (id) => {
    setFilteredVideos(filteredVideos.filter((video) => video.id !== id));
  };

  if (!categoriaData) {
    return null; // O un spinner de carga
  }

  const colorFondo = {
    backgroundColor: categoriaData.colorPrimario
  };

  const colorTitulo = {
    color: categoriaData.colorSecundario
  };

  return (
    <MainContainer style={colorTitulo}>
      {filteredVideos.length > 0 && (
        <EstiloCategorias style={colorFondo}>{datos.categoriaL}</EstiloCategorias>
      )}
      <DivVideos scrollBarColor={categoriaData?.colorPrimario}>
        {filteredVideos.map((video) => (
          <Videos
            key={video.id}
            titulo={video.titulo}
            video={video.video}
            imagen={video.imagen}
            categoria={video.categoria}
            descripcion={video.descripcion}
            id={video.id}
            onDelete={handleDeleteVideo}
            onClickVideo={onClickVideo}
            onEditVideo={() => onEditVideo(video)} 
            colorSecundario={categoriaData?.colorSecundario}
          />
        ))}
      </DivVideos>
    </MainContainer>
  );
};

export default Categorias;
