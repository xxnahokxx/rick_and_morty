import { ADD_FAVORITE, DELETE_FAVORITE, LOG_OUT, LOG_IN, FILTER, ORDER } from "./types";

const initialState = {
    // hasta el momento lo que entiendo es que las propiedades que se indican en el state, serian las props globales, por ejemplo al integrar react-redux al proyecto, la propiedad myFavorites la utilizamos en las tarjetas para validar si esta en la lista y que se renderice el corazon en rojo al ya estar en favoritos.
    myFavorites: [],
    loginG: false,
    allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAVORITE:
            return {
                ...state, allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.allCharacters, payload]
            }

        case DELETE_FAVORITE:
            const filtered = state.allCharacters.filter((el) => el.id !== payload);
            return {
                ...state, myFavorites: filtered,
                allCharacters: filtered
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

        case FILTER:
            const filGender = [...state.allCharacters].filter((el) => el.gender === payload);
            if (payload === "All") {
                return {
                    ...state, myFavorites: state.allCharacters
                }
            } else {
                return {
                    ...state, myFavorites: filGender,
                };
            }

        case ORDER:
            const orderFavorite = [...state.myFavorites].sort((a, b) => {
                    if (a.id > b.id) {
                        return payload === "Ascendente" ? 1 : -1
                    } else if (a.id < b.id) {
                        return payload === "Descendente" ? 1 : -1
                    } else {
                        return 0
                    }
            });

            return {
                ...state,
                myFavorites: orderFavorite,
            }

        default:
            return { ...state }
    }

};

export default reducer;
