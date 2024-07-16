import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import Banner from "../components/Banner";
import banner from "../assets/banner.jpg";
import Categorias from "../components/Categorias";
import axios from 'axios';
import ModalZoom from '../components/ModalZoom';

const FondoLego = styled.div`
  background: linear-gradient(175deg, #6e1806, #8a3f2c, #a56451, #be897a, #d5afa4);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  
  overflow-x: hidden;
  

`

const MainContainer = styled.main`
  display: flex;
  height: 500px;  
  @media (min-width: 781px) and (max-width: 1024px) {
    width: 100vw;
  max-width: 100%;
  }
  @media (min-width: 220px) and (max-width: 780px) {
    
    justify-content: space-between;
    max-width: 100lvw;
    height: 450px;
  }
  
`;

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [videosByCategory, setVideosByCategory] = useState({});
  const [selectedVideo, setSelectedVideo] = useState({ url: '', title: '', category: '', description: '' });
  const [editVideo, setEditVideo] = useState(null);
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  const fetchData = async () => {
    try {
      const videosResponse = await axios.get('https://669347aac6be000fa07a88fe.mockapi.io/videos');
      const categoriasResponse = await axios.get('https://669347aac6be000fa07a88fe.mockapi.io/categoriaList');

      setVideos(videosResponse.data);
      setCategorias(categoriasResponse.data);

      const videosByCategory = categoriasResponse.data.reduce((acc, categoria) => {
        acc[categoria.categoriaL] = videosResponse.data.filter(video => video.categoria === categoria.categoriaL);
        return acc;
      }, {});

      setVideosByCategory(videosByCategory);
    } catch (error) {
      console.error('Error fetching data', error);
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectVideo = (video) => {
    setSelectedVideo({ url: video.video, title: video.titulo, category: video.categoria, description: video.descripcion });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditVideo = (video) => {
    setEditVideo(video);
    Toggle(); 
  };

  return (
    <FondoLego>
      <GlobalStyles />
      <AppContainer>
        <MainContainer>
          <Banner
            texto="LEGO DC"
            backgroundImage={banner}
            videoUrl={selectedVideo.url}
            title={selectedVideo.title}
            category={selectedVideo.category}
            description={selectedVideo.description}
          />
        </MainContainer>
        {categorias.map((categoria) => (
          <Categorias
            key={categoria.categoriaL}
            datos={categoria}
            videos={videosByCategory[categoria.categoriaL] || []}
            onClickVideo={handleSelectVideo}
            onEditVideo={handleEditVideo}
          />
        ))}
        {modal && (
          <ModalZoom
            onClose={Toggle}
            video={editVideo}
            categorias={categorias}
            onUpdate={fetchData} // Pasa la función de actualización
          />
        )}
      </AppContainer>
    </FondoLego>
  );
};

export default Home;
