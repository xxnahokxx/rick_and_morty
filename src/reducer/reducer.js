import { ADD_FAVORITE, DELETE_FAVORITE, LOG_OUT, LOG_IN } from "./types";

const initialState = {
    // hasta el momento lo que entiendo es que las propiedades que se indican en el state, serian las props globales, por ejemplo al integrar react-redux al proyecto, la propiedad myFavorites la utilizamos en las tarjetas para validar si esta en la lista y que se renderice el corazon en rojo al ya estar en favoritos.
    myFavorites: [],
    loginG: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAVORITE:
            return {
                ...state, myFavorites: [...state.myFavorites, payload]
            }

        case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter((el) => el.id !== payload);
            return {
                ...state, myFavorites: filtered
            }

        case LOG_OUT:
            const logOut = false;
            return {
                ...state, loginG: logOut
            }

        case LOG_IN:
            const logIn = true;
            return {
                ...state, loginG: logIn
            }


        default:
            return { ...state }
    }

};

export default reducer;
