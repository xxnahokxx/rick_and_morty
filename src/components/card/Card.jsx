import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../reducer/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { FavOff, FavOn } from "../assets/styledComponent/styledComponents";


const ContentCard = styled.div`
   height: 287px;
`;

const Tarjeta = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 200px;
   max-height: 337px;
   border-radius: 10px;
   background-image: url("https://e0.pxfuel.com/wallpapers/710/423/desktop-wallpaper-rick-and-morty-rick-and-morty-space.jpg");
   margin: 15px;
   transition: all .5s;
   overflow: hidden;
   border: 2px solid black;
   box-shadow:  0px 10px 10px black;

   div.des {
      color: white;
   }
   @media (max-width: 720px) {
      .des {
         height: 60px;
         display: flex;
         color: #ffffff;
         flex-wrap: wrap;
         justify-content: flex-start;
         h2 {
            color: white;
            padding: 0;
         }
      }
   }

   &:hover {
      /* width: 405px; */
      div.des {
         height: 60px;
         display: flex;
         color: #ffffff;
         flex-wrap: wrap;
         justify-content: flex-start;
         h2 {
            color: white;
            padding: 0;
         }
      }
      h2.nombre {
         color: white;
      }
   }
   `;

const Head = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   `;

const Body = styled.div`
   height: 0px; // la forma que encontre para animar la aparicion de la informacion es con volver 0 px el tamaño del alto del div contenedor y no permitir que se desborde el contenido.
   /* overflow: hidden; */
   order: 30;
   position: relative;
   background-color: #0a025a85;
   transition: all .5s;

   @media (max-width: 720px) {
      height: 60px;
   }

`;

const Nombre = styled.h2`
   font-size: 15px;
   margin: 0 20px;
   color: grey;
   transition: all .5s;
`;

const Boton = styled.a`
   width: 15px;
   height: 15px;
   order: 2;
   margin: 5px 5px;
   line-height: auto;
   padding: 3px;
   background: #840f71;
   color: white;;
   border-radius: 5px;
   align-content: center;
   font-weight: bold;
   font-size: 10px;
   transition: all .5s;

   &:hover {
      background: #ffe4fc;
      color: #840f71;
      cursor: pointer;
   }
`;

const Descripcion = styled.h2`
   height: 15px;
   margin: 5px 0 0 10px;
   line-height: normal;
   transition: all .5s;
   font-size: 15px;
   color: transparent;
   text-align: left;
`;

const Image = styled.img`
   border-radius: 30%;
   border: 4px solid #a71697;
   width: 80%;
   margin: auto;
`


function Card({ name, species, gender, image, onClose, id, addFavorite, deleteFavorite, myFavorites }) {

   // este estado es mas que nada para poder actualizar la visualizacion del corazon que indica si esta o no en favoritos.
   const [isFav, setIsFav] = useState(false);

   // el useEffect lo principal que hace es validar si alguno de las cards que se estan renderizando en el momento esta en el arreglo de favoritos, de ser asi le actualiza el estado a isFav a true seteandole el valor.
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);

   // con handleFavorite se le da la indicacion, la funcionalidad al boton de favoritos para que cambie su estado de verdadero a falso y en viseversa.
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         deleteFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({ name, species, gender, image, onClose, id, addFavorite, deleteFavorite });
      }
   }
   return (

      <ContentCard>
         <Tarjeta>
            <Head>
               {/* de manera condicional se le dice a la app que renderice el boton de cerrar la card solo si no es favorito. */}
               {isFav ? null : <Boton onClick={onClose}>X</Boton>}
               {/* se esta haciendo un renderizado condicional del boton, en caso de que este o no en favoritos se muestra en rojo o en blanco. */}
               {
                  isFav ? (
                     <FavOn onClick={handleFavorite}><span className="material-symbols-rounded" styled={{FILL: 1}}>
                     favorite
                     </span></FavOn>
                  ) : (
                     <FavOff onClick={handleFavorite}><span className="material-symbols-rounded">
                     favorite
                     </span></FavOff>
                  )
               }
               <Nombre className="nombre">{name}</Nombre>
            </Head>
            <Body className="des">
               <Descripcion>Species: {species}</Descripcion>
               <Descripcion>Gender: {gender}</Descripcion>
            </Body>
            <Link to={`/detail/${id}`}>
               <Image src={image} alt="" />
            </Link>
         </Tarjeta>
      </ContentCard>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      },
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);
