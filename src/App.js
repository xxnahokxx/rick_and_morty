import './App.css'
import Cards from './components/card/Cards.jsx'
import Navbar from './components/navbar/Navbar'
import styled from "styled-components";
import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';



const Container = styled.div`
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75ec71f4-bb39-40af-a774-65115d46c8f8/ddf5bsm-dd191344-b1d3-42c3-9c0e-cba3282ea58c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZWM3MWY0LWJiMzktNDBhZi1hNzc0LTY1MTE1ZDQ2YzhmOFwvZGRmNWJzbS1kZDE5MTM0NC1iMWQzLTQyYzMtOWMwZS1jYmEzMjgyZWE1OGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zHnOOX1qoOoFskwKARsxVVewXWOFjUmriGLrWy4oZb0");
  background-color: #2b041f;
  height:100vh;
  background-size: cover;
  background-attachment: fixed;

  @media (max-height: 1000px) {
    height:100vh  ;

  }

  `;

/* const RickS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `; */

const Grupo = styled.div`
  display: flex;
  justify-content: center;

  > div {
    max-width: 1200px ;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-auto-rows: minmax(100px, auto); */
    justify-items: center;
    flex-wrap: wrap;

    @media (max-width:1200px){
      grid-template-columns: repeat(3, 1fr);
      max-width: 992px ;
    }
    @media (max-width:992px){
      grid-template-columns: repeat(2, 1fr);
      max-width: 768px ;
    }
    @media (max-width:576px){
      grid-template-columns: repeat(1, 1fr);
      max-width: 768px ;
    }

  }
  `;

function App() {
  const [characters, setCharacters] = useState([]);
  /*  const example = {
     name: 'Morty Smith',
     species: 'Human',
     gender: 'Male',
     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   }; */

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && characters.filter((el) => el.id === data.id).length === 0) {
          setCharacters([...characters, data]);
        } else {
          window.alert('No hay personajes con ese ID o ya existe.');
        }
      });
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id))
    setCharacters(filtered);
  }
  return (
    <Container className='App'>

      <Navbar onSearch={onSearch} />

      <Routes>

        <Route path="/home" element={
          <Grupo>
            <Cards
              characters={characters}
              onClose={onClose}
            />
          </Grupo>
        }></Route>

        <Route path="/about" element={
            <About />
        }></Route>

        <Route path="/detail/:detailId" element={
            <Detail  />
        }></Route>

        <Route path='*' element={
          <Grupo>
            <Cards
              characters={characters}
              onClose={onClose}
            />
          </Grupo>
        }></Route>

      </Routes>

    </Container>
  )
}

export default App
