import { useEffect, useState } from "react";
import styled from "styled-components";
import Videos from "../Videos";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  background-color: black;
  padding-top: 15px;
  width: 100%;
  height: 535px;
  box-sizing: border-box;
  padding: 32px;
  text-align: center;
  position: relative;
`;

const EstiloCategorias = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-size: 32px;
  width: 432px;
  height: 70px;
  margin-left: 35px;
`;

const DivVideos = styled.div`
  height: 350px;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollBarColor} #ffffff; /* Firefox */

  overflow-y: auto;
  margin-left: 40px;
  gap: 50px;
`;

const NoVideosMessage = styled.p`
  color: #fff;
  font-size: 5em  ;
`;

const Categorias = ({ datos, videos, onClickVideo }) => {
  const [categoriaData, setCategoriaData] = useState(null);
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const navigate = useNavigate();

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

  const handleClickVideo = (videoData) => {
    onClickVideo(videoData); // Llamada a la función para cambiar el video en el componente padre
    window.scrollTo(0, 0);
    navigate("/"); // Redirigir a la página de inicio
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
      <EstiloCategorias style={colorFondo}>{datos.categoriaL}</EstiloCategorias>
      <DivVideos scrollBarColor={categoriaData?.colorPrimario}>
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <Videos
            key={video.id}
            titulo={video.titulo}
            video={video.video}
            imagen={video.imagen}
            categoria={video.categoria}
            descripcion={video.descripcion}
            id={video.id}
            onDelete={() => handleDeleteVideo(video.id)}
            onClickVideo={handleClickVideo}
            colorSecundario={categoriaData?.colorSecundario}
          />
        ))
      ) :(
        <NoVideosMessage>No hay videos disponibles</NoVideosMessage>
      )        }
      </DivVideos>
    </MainContainer>
  );
};

export default Categorias;
