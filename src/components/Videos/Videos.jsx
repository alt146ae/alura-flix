import styled from "styled-components"

const VideosEstilizado = styled.iframe`


  width: 430px;
  height: 260px;
  border: none;
  border-radius: 10px;
  margin-right: 50px;
  z-index: 2;
  
`





const Videos = () => {
    return (
        <VideosEstilizado
            src="https://www.youtube.com/embed/ifcxPne-4d8?si=n_mu9wvAIPD6la4G"
            title="Lego DC 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen >
        </VideosEstilizado>
    )
}

export default Videos
