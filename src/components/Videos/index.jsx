import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import { api } from "../../api/api"
import BotonBorrar from "../BotonBorrar";

const VideoyBoton = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;

`

const DivVid = styled.div`
   display: flex;
  
  justify-content: center;
  gap: 20px; 
`

const VideoWrapper = styled.div`
  
  
  align-items: center;
`
const VideosEstilizado = styled.iframe`
 width: 430px;
  height: 260px;
  border: none;
  border-radius: 10px;
  border: solid 2px;
  border-color: ${(props) => props.colorSecundario};
  
`


const Videos = ({ colorPrimario }) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const fetchVideos = async () => {
          try {
            const response = await api.get('/');
            setVideos(response.data);
          } catch (error) {
            console.error('Error fetching videos', error);
          }
        };
    
        fetchVideos();
      }, []);

    
    return (
      <VideoyBoton>
      <DivVid>
        {videos.map((video) => (
          <VideoWrapper key={video.id}>
            <VideosEstilizado
              src={video.video.replace("watch?v=", "embed/")}
              title={video.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              borderColor={colorPrimario}
              allowFullScreen
            />
            <BotonBorrar />
            
          </VideoWrapper>
        ))}
      </DivVid>
    </VideoyBoton>
  );
}

export default Videos
