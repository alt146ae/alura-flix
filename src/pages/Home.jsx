import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"

import Banner from "../components/Banner"
import banner from "../assets/banner.jpg"
import Categorias from "../components/Categorias"




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
  margin-bottom: -20px;
  height: 500px;
  

`
const Home = () => {
  return (
    <FondoLego>
      <GlobalStyles />
      <AppContainer>
        <MainContainer>
          <Banner texto="LEGO DC"
            backgroundImage={banner}
            videoUrl="https://www.youtube.com/embed/4lEbSsxryBk?si=1lnMUPzqR5_DZzhP" />

        </MainContainer>
        <Categorias categoria="DC" />
        <Categorias categoria="MARVEL" />
        <Categorias categoria="ARCHITECTURE" />
        <Categorias categoria="HARRY POTTER" />
      </AppContainer>



    </FondoLego>
  )
}




export default Home


