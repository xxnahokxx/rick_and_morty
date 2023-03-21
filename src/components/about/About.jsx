import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    width: 100%;
    color: #fff;

    h1 {
        text-shadow: 0 0 3px rgb(0, 0, 0) ;
    }
`;

export default function About (props) {
    console.log();
    return (
        <Container>
            <h1>bienvenidos a mi primer Single Page Application (SPA)</h1>
        </Container>
    );
}
