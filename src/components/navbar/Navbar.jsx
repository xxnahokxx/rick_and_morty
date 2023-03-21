import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import estilos from "./navbar.module.css";
import {Nav, ConLogo, Titulo, Img} from "../assets/styledComponent/styledComponents.js"



const NavLinkMe = ({to, children, ...props}) => {
    return (
      <NavLink {...props} to={to} className={({ isActive }) => (isActive ? estilos.active : estilos.desactive)}>
        {children}
      </NavLink>
    );
};


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
            <NavLinkMe to="/home">Home</NavLinkMe>
            <NavLinkMe to="/about">About</NavLinkMe>
            <NavLinkMe to="/favorites">Favorites</NavLinkMe>
            <SearchBar onSearch={(el) => props.onSearch(el)} />
          </div>
        </div>
      </Nav>
    )

  }
}
