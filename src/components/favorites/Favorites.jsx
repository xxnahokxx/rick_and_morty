import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";


function Favorites ({myFavorites}) {
    return(
        <div>
            {myFavorites.map(({ name, species, gender, image, id }) => <Card name={name} id={id} species ={species} gender={gender} image={image} />)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps,null)(Favorites);
