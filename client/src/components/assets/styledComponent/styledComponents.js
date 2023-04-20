import styled from "styled-components";


export const Grupo = styled.div`
display: flex;
justify-content: center;

> div {
  margin-top: 90px;
  max-width: 1200px ;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-auto-rows: minmax(100px, auto); */
  justify-items: center;
  flex-wrap: wrap;

  @media (max-width:1200px){
    grid-template-columns: repeat(3, 1fr);
    max-width: 992px ;
  }
  @media (max-width:992px){
    grid-template-columns: repeat(2, 1fr);
    max-width: 768px ;
  }
  @media (max-width:576px){
    grid-template-columns: repeat(1, 1fr);
    max-width: 768px ;
  }

}
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgb(61, 56, 35, .5);
  background-image: url('../public/baner.png');
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 1s;

  div.navContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;


    @media (max-width: 1080px){
      justify-content: center;
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

    .search-and-button {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      flex-wrap: wrap;
      button {
        margin: 0 auto;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column ;
    }

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

export const Img = styled.img`
    width: 40px;
    height: 40px;
  `;

export const ConLogo = styled.div`
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

export const Titulo = styled.h1`
  position: relative;
  overflow: hidden;
`;

export const FavOn = styled.a`
  color: rgb(243, 32, 220);
  margin: 5px 0 0 5px;
`

export const FavOff = styled.a`
  color: rgb(255, 33, 201) /* white */;
  margin: 5px 0 0 5px;
`

export const Formulario = styled.form`
    margin: auto;
    padding-top: 50px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://cdn.dribbble.com/userupload/2839151/file/original-b1b7fd13edb07bfdb434463c7339aef0.png?compress=1&resize=752x");
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 30% 80% 20% 60% / 40% 80%;
    border: 1px solid transparent;
    width: 600px;
    height: 400px;

    div {
        width: 350px;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        /* flex-direction: column; */
        padding: 5px;
        p {
            margin: 0;
            width: 350px;
            color: #48c976;
            font-size: large;
            font-weight: bold;
            text-align: right;
            text-shadow: 0 0 3px rgb(0, 0, 0) ;
            /* -webkit-text-stroke: 1px #141414; */
        }
    }
    img {
        padding: 20px 0;
        width: 400px;
        height: 100px;
        background-image: url("../img/logo.png");
    }
    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const Label = styled.label`
    color: #48c976;
    font-size: large;

    font-weight: bold;
    padding: 10px 0;
    margin: 0 10px 0 0;
    -webkit-text-stroke: 1px #141414;
`;

export const Boton = styled.button`
    /* margin-top: 5px; */
    width: 100px;
    border-radius: 8px;
    border: 2px solid #49c877 ;
    font-size: 15px;
    padding: .25rem 1rem;
    background: #141414;
    color: #49c877;
    font-weight: bold;
    transition: all .5s;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        background: #49c877;
        color: #141414;
        border: 2px solid #141414;
        outline: 1px solid #49c877;
    }
`;

export const Input = styled.input`
    width: 200px;
    border-radius: 7px;
    padding: 5px 0;
    text-align: center;
    border: 2px solid #48c976;
    background-color: #141414;
    outline: 2px solid #141414;
    color: #48c976;
    font-weight: bold;
`;


export const Session = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(61, 56, 35, .5);
  animation: selection 2s linear normal;
  z-index: 3000;

  @keyframes selection {
      from{
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;


