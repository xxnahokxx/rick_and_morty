const { request } = require("express");

let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    res.json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter(el => el.id !== Number(id));
    console.log(myFavorites);
    res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}
