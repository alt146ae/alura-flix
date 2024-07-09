import styled from "styled-components"

const Columna = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Etiqueta = styled.label`
  color: white;
  font-size: 1.8em;
  margin: 15px; 
`

const SelectCategoria = styled.select`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.8em;
  background-color: white;
  outline-color: red;
`


const ListaOpciones = (props) => {

  const categorias = [
    "DC",
    "MARVEL",
    "ARCHITECTURE",
    "HARRY POTTER"
  ]
  
  const manejarCambio = (e) => {
    console.log("cambio",e.target.value);
    props.actualizarCategoria(e.target.value)
  }
  

console.log(props);

  return (
    <Columna>
      <Etiqueta htmlFor="titulo">Categoria</Etiqueta>
      <SelectCategoria
        value={props.valor} 
        onChange={manejarCambio}
        id="categoria"
        name="categoria"
        required>
        <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
        {categorias.map((equipo, index) =>
          <option key={index} 
                  value={equipo}>{equipo}</option>
        )}
      </SelectCategoria>
    </Columna>
  )
}

export default ListaOpciones
