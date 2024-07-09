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
  margin-bottom: -10px;
  height: 500px;  
`

//////////////////////Registrar video///////////
    const registarVideos = (Video) =>   {
      console.log("Nuevo video", Video);
    }

///Lista de Categorias ////

const Home = (props) => {

  const categorias = [
    {
      categoria: "DC",
      colorPrimario: "#229ee6",
      colorSecundario: "#f7f7f7"
    },
    {
      categoria: "MARVEL",
      colorPrimario: "#12a14b",
      colorSecundario: "#5115df"
    },
    {
      categoria: "ARCHITECTURE",
      colorPrimario: "#dd911e",
      colorSecundario: "#77e67c"
    },
    {
      categoria: "HARRY POTTER",
      colorPrimario: "#e60a0a",
      colorSecundario: "#c2e622"
    },
  ]


  

  return (
    <FondoLego>
      <GlobalStyles />
      <AppContainer>
        <MainContainer>
          <Banner texto="LEGO DC"
            backgroundImage={banner}
            videoUrl="https://www.youtube.com/embed/4lEbSsxryBk?si=1lnMUPzqR5_DZzhP" />
        </MainContainer>
        {
          categorias.map((categoria) => <Categorias datos={categoria} key={categorias.categoria} >
          
          
          </Categorias>
          
          
          )
        }
        
        
      </AppContainer>
    </FondoLego>
  )
}




export default Home


