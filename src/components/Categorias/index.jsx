import { useEffect, useState } from "react";
import styled from "styled-components";
import Videos from "../Videos";
import { api } from "../../api/api";

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
  scrollbar-color: ${(props) => props.scrollbarColor} #000000;
  overflow-y: auto;
  margin-left: 40px;
  gap: 25px;
`;

const Categorias = ({ datos, videos }) => {
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
    setFilteredVideos(filteredVideos.filter(video => video.id !== id));
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
      <DivVideos scrollbarColor={categoriaData.colorPrimario}>
        {filteredVideos.map((video) => (
          <Videos
            key={video.id}
            videoUrl={video.video}
            titulo={video.titulo}
            colorSecundario={categoriaData.colorSecundario}
            id={video.id}
            onDelete={handleDeleteVideo}
          />
        ))}
      </DivVideos>
    </MainContainer>
  );
};

export default Categorias;
