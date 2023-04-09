import React from "react";
import styled from "styled-components";
import icon from "../assets/img/logo.png"

const Container = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 1000px;
    height: 600px;
    color: #fff;
    margin: 0 auto;
    background: rgb(97, 63, 96);
    background-image: url("https://cdn.dribbble.com/users/518045/screenshots/8226223/media/6f8c1ad7283595ffc225f59ffbf19e1f.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 3px solid rgb(219, 190, 110) ;
    outline: 3px solid rgb(10, 4, 4);
    border-radius: 80px;
    overflow: hidden;
    animation: selection 2s linear normal;

    h1 {
        position: sticky;
        background-color: rgb(0, 0, 0, .8);
        top: 90%;
        text-shadow: 0 0 3px rgb(0, 0, 0) ;
    }


    @keyframes selection {
      from{
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;

const Logo = styled.img`
    width: 300px;
    height: 100px;
    position: relative;
    top: 80px;
    margin: 0 auto;
    z-index: 3;
    animation: selection 2s linear normal;

    @keyframes selection {
      from{
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`

export default function About(props) {
    console.log();
    return (
        <>
            <Logo className="" src={icon} alt="icon" />
            <Container>
                <h1>bienvenidos a mi primer Single Page Application (SPA)</h1>
            </Container>
        </>
    );
}
