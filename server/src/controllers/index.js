const getCharById = require(`../controllers/getCharById`);
const login = require (`../controllers/login`);
const {postFav, deleteFav} = require(`../controllers/handleFavorites`);


module.exports = {
    getCharById,
    login,
    postFav,
    deleteFav
}
