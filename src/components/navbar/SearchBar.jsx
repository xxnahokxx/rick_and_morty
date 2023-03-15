import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
   padding: 10px 0 10px 0;
   display: flex;
   justify-content: flex-end;
`;

const Entrada = styled.input`
   width: 150px;
   border-radius: 8px 0 0 8px;
   padding: 4px 0;
   text-align: center;
   border: 2px solid #48c976;
   background-color: #141414;
   outline: 2px solid #141414;
   color: #48c976;
   font-weight: bold;
   font-size: 15px;

   @media (max-width: 1080px){
      width: 100px;
   }
`;

const Boton = styled.button`
   border-radius: 0 8px 8px 0;
   margin-left: -2px;
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

export default function SearchBar({ onSearch }) {

   const [character, setCharacter] = useState("");

   const handleInputChange = (event) => {
      const { value } = event.target;
      setCharacter(value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setCharacter("");
   };

   return (
      <Container>
         <form action="" onSubmit={handleSubmit}>
            <Entrada placeholder="Insert Id... " type='search' onChange={handleInputChange} value={character} />
            <Boton onClick={() => onSearch(character)} type="submit">Add</Boton>
         </form>
      </Container>
   );
}
