import './App.css'
import Cards from './components/card/Cards.jsx'
import Navbar from './components/navbar/Navbar'
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Favorites from './components/favorites/Favorites';
import { Grupo } from './components/assets/styledComponent/styledComponents';
import { connect } from 'react-redux';
import { logIn, logOut } from './reducer/actions';
import Cube from './components/cube/Cube';
import Cube2 from './components/cube2/Cube2';



const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75ec71f4-bb39-40af-a774-65115d46c8f8/ddf5bsm-dd191344-b1d3-42c3-9c0e-cba3282ea58c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZWM3MWY0LWJiMzktNDBhZi1hNzc0LTY1MTE1ZDQ2YzhmOFwvZGRmNWJzbS1kZDE5MTM0NC1iMWQzLTQyYzMtOWMwZS1jYmEzMjgyZWE1OGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zHnOOX1qoOoFskwKARsxVVewXWOFjUmriGLrWy4oZb0"); */
  background-color: rgb(20, 20, 20);
  background-size: cover;
  background-attachment: fixed;

  @media (max-height: 1000px) {
    min-height: 100vh;
  }

  `;

/* const RickS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `; */



function App({ loginG, logIn }) {


  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const userName = "johan.amaya@hotmail.com";
  const password = "123456";


  function login(userData) {
    if (userData?.password === password && userData?.userName === userName) {
      logIn()
      navigate("/home");
    }
  }

  useEffect(() => {
    if (!loginG) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginG]);


  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && characters.filter((el) => el.id === data.id).length === 0) {
          setCharacters([...characters, data]);
        } else if(characters.filter((el) => el.id === data.id).length !== 0){
          window.alert("Personaje ya seleccionado");
        }else {
          // console.log(data);
          // window.alert(data.error);
          window.alert(data);
        }
      });
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id))
    setCharacters(filtered);
  }

  const position = useLocation(); // excelente forma para saber la la ruta en la que uno esta.
  const { pathname } = position;

  const checkLogin = () => {
    if (pathname === "/") {
      return false;
    } else {
      return true;
    }
  };



  return (
    <Container className='App'>


      <Navbar onSearch={onSearch} checkLogin={checkLogin()} />

      <Cube checkLogin={checkLogin()} />
      <Cube2 checkLogin={checkLogin()} />

      <Routes>

        <Route path="/" element={
          <Form handleSubmit={login} />
        }>
        </Route>

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

        <Route path="/favorites" element={
          <Grupo>
            <Favorites />
          </Grupo>
        }></Route>

        <Route path="/detail/:detailId" element={
          <Detail />
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
      <Footer checkLogin={checkLogin()}></Footer>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    loginG: state.loginG
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    logIn: () => dispatch(logIn()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
