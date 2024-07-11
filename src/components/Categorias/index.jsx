import { useEffect,useState } from "react"
import styled from "styled-components"
import Videos from "../Videos"
import { api } from "../../api/api"


const MainContainer = styled.div`
    background-color: black;
    padding-top: 15px;
    width: 100%;
    height: 535px;
    box-sizing: border-box;
    padding:32px;
    text-align: center;
    position: relative;
`

const EstiloCategorias = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    font-size: 32px;
    width: 432px;
    height: 70px;
    margin-left: 35px;
`
const DivVideos = styled.div`
  
  height: 350px;
  display: flex;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.scrollbarColor} #000000; 
  overflow-y: auto;
  margin-left: 40px;
  gap: 2px;
`

const Categorias = ({ datos,videos }) => {

   // console.log("props de categorias",props);
  //const{colorPrimario, colorSecundario, nombre} = datos

  // const colorFondo = {
  //   backgroundColor: colorPrimario
  // }

  // const colorTitulo = {
  //   color: colorSecundario
  // }

  const [categoriaData, setCategoriaData] = useState(null);

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
    <EstiloCategorias style={colorFondo} >{datos.categoriaL}</EstiloCategorias>
    <DivVideos scrollbarColor={categoriaData.colorPrimario}>
    {videos.map((video) => (
    <Videos
          key={videos.id}
            videoUrl={videos.video}
            titulo={videos.titulo}
            colorSecundario={categoriaData.colorSecundario}          
              />      
    ))}
    </DivVideos>
    
    
    </MainContainer>    

  )
}

export default Categorias


