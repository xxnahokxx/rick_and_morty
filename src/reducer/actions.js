import { ADD_FAVORITE, DELETE_FAVORITE, LOG_OUT, LOG_IN } from "./types";


export const addFavorite = (character) => {

    return {
        type: ADD_FAVORITE,
        payload: character,
    }
};

export const deleteFavorite = (id) => {

    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
};

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: false,
    }
};

export const logIn = () => {
    return {
        type: LOG_IN,
        payload: true,
    }
};
