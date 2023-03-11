import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    width: 100%;
    color: #fff;
`;

export default function About (props) {
    console.log();
    return (
        <Container>
            <h1>bienvenidos a mi primer Single Page Application (SPA)</h1>
        </Container>
    );
}
