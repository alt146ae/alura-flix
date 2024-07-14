import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from 'axios';

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

  const [categoriaList, setCategoriaList] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get('https://aluraflixapi-sigma.vercel.app/categoriaList');
        setCategoriaList(response.data);
      } catch (error) {
        console.error('Error fetching categorias', error);
      }
    };

    fetchCategorias();
  }, []);



  const manejarCambio = (e) => {
   props.actualizarCategoria(e.target.value)
  }
  



  return (
    <Columna>
      <Etiqueta htmlFor="titulo">Categoria</Etiqueta>
      <SelectCategoria
        value={props.valor} 
        onChange={manejarCambio}
        id="categoria"
        name="categoria"
        required>
        <option value="" disabled defaultValue="" hidden>Seleccionar Categoria

        </option>
        {categoriaList.map((category, index) => (
          <option key={index} value={category.categoriaL}>
            {category.categoriaL}
          </option>
        ))}
      </SelectCategoria>
    </Columna>
  )
}

export default ListaOpciones
