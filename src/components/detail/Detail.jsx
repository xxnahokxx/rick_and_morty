import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    justify-content: center;
    margin-top: 40px;
    text-align: center;
    color: #5fff96;

    h1 {
        text-align: left;
        display: inline-block;
        font-size: 2.5rem;
    }

    > div {
        margin: auto;
        max-width: 700px;
        display: flex;
        justify-content: center;
        border: solid 4px;
        outline: solid 5px #141414;
        border-radius: 20px;
        overflow: hidden;
        background-color: #141414 ;
        padding: 10px 0;

        div {
            padding: 0 20px;
        }
    }

    p {
        font-size: 30px;
        font-weight: bold;
    }
    img {
        object-fit: cover;
        border-radius: 10px;
    }
    @media (max-width: 720px) {
        h1{
            font-size: 25px;
            text-align: center;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `;

const Button = styled.button`
    margin: 40px 0 0 0;
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

export default function Detail(props) {
    // console.log(useParams());
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const volver = () => navigate(-1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId])

    return (
        <Container>
            <div>
                <div className="card">
            <h1>Name: {character.name}</h1>
                    <img src={character.image} alt="" />
                    <div className="">
                        <p>Status: {character.status}</p>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin?.name}</p>
                    </div>
                </div>
            </div>
            <Button onClick={volver}>volver</Button>
        </Container>
    );
}
