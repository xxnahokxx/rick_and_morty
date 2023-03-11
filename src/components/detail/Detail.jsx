import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    justify-content: center;
    margin-top: 40px;
    text-align: center;
    color: #5fff96;
    -webkit-text-stroke: 1px black;

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
`;

export default function Detail(props) {
    // console.log(useParams());
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

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
    }, [])

    return (
        <Container>
                <h1>Name: {character.name}</h1>
            <div className="">
            <img src={character.image} alt="" />
            <div className="">
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin?.name}</p>
            </div>
            </div>
        </Container>
    );
}
