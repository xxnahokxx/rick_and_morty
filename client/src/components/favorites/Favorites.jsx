import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../reducer/actions";
import style from "./favorites.module.css";


function Favorites({ myFavorites }) {
    const dispatch = useDispatch();
    // const cambio = (event) => { dispatch(filterCards(event.target.value)) };
    return (
        <>
            <select key="or" className={style.filtro1} name="order" onChange={(e) => { dispatch(orderCards(e.target.value)) }} >
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select key="fill" className={style.filtro2} name="filter" onChange={(event) => { dispatch(filterCards(event.target.value)) }}>
                <option key="1a" value="All">All</option>
                <option key="2a" value="Male">Male</option>
                <option key="3a" value="Female">Female</option>
                <option key="4a" value="unknown">unknown</option>
                <option key="5a" value="Genderless">Genderless</option>
            </select>
            <div>
                {myFavorites.map(({ name, species, gender, image, id }) => <Card name={name} id={id} species={species} gender={gender} image={image} key={id} />)}
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps, null)(Favorites);
