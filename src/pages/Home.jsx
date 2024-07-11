import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"
import Banner from "../components/Banner"
import banner from "../assets/banner.jpg"
import Categorias from "../components/Categorias"
import { api } from "../api/api"





const FondoLego = styled.div`
  background: linear-gradient(175deg, #6e1806, #8a3f2c, #a56451, #be897a, #d5afa4);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  margin-bottom: -10px;
  height: 500px;  
`

///Lista de Categorias ////

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await api.get('/videos');
        setVideos(videosResponse.data);

        const categoriasResponse = await api.get('/categoriaList');
        setCategorias(categoriasResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);


  const getVideosByCategory = (category) => {
    return videos.filter(video => video.categoria === category);
  };

  

  return (
    <FondoLego>
      <GlobalStyles />
      <AppContainer>
        <MainContainer>
          <Banner texto="LEGO DC"
            backgroundImage={banner}
            videoUrl="https://www.youtube.com/embed/4lEbSsxryBk?si=1lnMUPzqR5_DZzhP" />
        </MainContainer>
        {categorias.map((categoria) => (
          <Categorias
            key={categoria.categoriaL}
            datos={categoria}
            videos={getVideosByCategory(categoria.categoriaL)}
          />
        ))}
      </AppContainer>
    </FondoLego>
  )
}




export default Home


