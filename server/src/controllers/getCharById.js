const axios = require("axios");


const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const {id,name, gender, species, origin, image, status } = response.data
            res.writeHead(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify({id,name, gender, species, origin, image, status }));
        })
        .catch((err) => {
            res.writeHead(500, {"Content-Type":"text/plain"})
            res.end(JSON.stringify(err.message))
            // res.writeHead(500, {"Content-Type":"application/json"})
            // res.end(JSON.stringify({error: `Character not found with id: ${id}`}))
        })
}

module.exports = getCharById

