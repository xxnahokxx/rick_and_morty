import { ADD_FAVORITE, DELETE_FAVORITE, LOG_OUT, LOG_IN, FILTER, ORDER } from "./types";
import axios from "axios";
const endpoint = "http://localhost:3001/rickandmorty/fav";


export const addFavorite = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character); //
            return dispatch({
                type: ADD_FAVORITE,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}


// con promesas ===
// export const addFavorite = (character) => {

//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAVORITE,
//                 payload: data,
//             });
//         });
//     };

//     // return {
//     //     type: ADD_FAVORITE,
//     //     payload: character,
//     // }
// };


export const deleteFavorite = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endpoint}/${id}`);
            return dispatch({
                type: DELETE_FAVORITE,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}


// con promesas ===
// export const deleteFavorite = (id) => {

//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: DELETE_FAVORITE,
//                 payload: data,
//             });
//         });
//     };


//     // return {
//     //     type: DELETE_FAVORITE,
//     //     payload: id,
//     // }
// };

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

export const filterCards = (status) => {
    return {
        type: FILTER,
        payload: status,
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
};
