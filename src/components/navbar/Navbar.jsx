import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import estilos from "./navbar.module.css";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(20, 20, 20, .8);
  background-image: url('../public/baner.png');
  position: sticky;
  top: 0;

  div.navContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;


    @media (max-width: 1080px){
      max-width: 90%;
    }
  }

  div.destiny {
    display: flex;
    align-items: center;

  }

  h1.title {
    /* position: absolute; */
    margin: 0 20px;
    font-size: calc(1px + 1.5vw) ;
    font-weight: bold;
    color: #5fff96;
    font-family: 'Comic Neue';
    font-weight: bold;
    text-decoration: none;
    /* -webkit-text-stroke: 2px black; aunque no me es funcional en este momento es una buena forma de colocar borde a las letras. */
  }

  &:hover {
    background-color: rgb(20, 20, 20);
  }
  `;


export default function Navbar(props) {

  return (
    <Nav>
      <div className="navContent" >
        <NavLink to="/home" className={({ isActive }) => (isActive ? estilos.active : estilos.desactive)}>
          <h1 className='title'>Archivos Rick and Morty</h1>
        </NavLink>
        <div className="destiny">
          <NavLink to="/home" className={({ isActive }) => (isActive ? estilos.active : estilos.desactive)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? estilos.active : estilos.desactive)}>About</NavLink>
          <SearchBar onSearch={(el) => props.onSearch(el)} />
        </div>
      </div>
    </Nav>
  )
}
