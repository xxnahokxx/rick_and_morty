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
  transition: all 1s;

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
    @media (max-width: 720px){
      justify-content: center;
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
    /* font-size: calc(1px + 1.5vw) ; */
    font-size: 20px;
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

const Img = styled.img`
    width: 40px;
    height: 40px;
  `;

const ConLogo = styled.div`
    /* width: 30px; */
    display: flex ;
    overflow: hidden;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      height: 0px;
      overflow: hidden;
      transition: all 1s;
    }

    &:hover {
      div {
        height: 30px;
      }
    }
    @media (max-width: 576px){
      div {
        height: 30px;
      }
    }
  `;

const Titulo = styled.h1`
  position: relative;
  overflow: hidden;
`;


export default function Navbar(props) {

  const log = props.checkLogin

  if (log) {
    return (
      <Nav>
        <div className="navContent" >
          <NavLink to="/home" className={({ isActive }) => (isActive ? estilos.active : estilos.desactive)}>
            <ConLogo>
              <Img src="https://i.redd.it/2e99wgj1lei31.jpg" alt="" />
              <div className="">
                <Titulo className='title'>Rick & Morty files</Titulo>
              </div>
            </ConLogo>
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
}
