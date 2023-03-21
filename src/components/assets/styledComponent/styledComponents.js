import styled from "styled-components";


export const Grupo = styled.div`
display: flex;
justify-content: center;

> div {
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
  color: rgb(72, 201, 118);
  margin: 5px 0 0 5px;
`

export const FavOff = styled.a`
  color: white;
  margin: 5px 0 0 5px;
`
