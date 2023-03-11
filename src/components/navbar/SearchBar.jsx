import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
   padding: 10px 0 10px 0;
   display: flex;
   justify-content: flex-end;
`;

const Entrada = styled.input`
   border-radius: 8px;
   padding: .25rem 1rem;
   font-size: 15px;
   margin: 0 1rem;
   font-weight: bold;
   `;

const Boton = styled.button`
   border-radius: 8px;
   border: 2px solid #49c877 ;
   font-size: 15px;
   padding: .25rem 1rem;
   background: #141414;
   color: #49c877;
   font-weight: bold;
   cursor: pointer;
   transition: all .5s;

   &:hover {
      background: #49c877;
      color: #141414;
      border: 2px solid #141414;
      outline: 1px solid #49c877;
   }
`;

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleInputChange = (event) =>{
      const {value} = event.target;
      setCharacter(value);
   };
   return (
      <Container>
         <Entrada placeholder="Inserte ID del personaje " type='search' onChange = {handleInputChange} />
         <Boton onClick={() => props.onSearch(character)}>Agregar</Boton>
      </Container>
   );
}
