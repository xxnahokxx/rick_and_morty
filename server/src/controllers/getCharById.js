const URL = "https://rickandmortyapi.com/api/character/";
const axios = require(`axios`);


const getCharById = async  (req, res) => {
    //  con async await==
    try {
        const { id } = req.params;
        const { data } = await axios.get(URL + id);
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}



// con promesas==

// const getCharById = (req, res) => {
//     const { id } = req.params;
//     axios.get(URL + id)
//         .then(response => {
//             try {
//                 const { id, name, status, species, origin, gender, image } = response.data;
//                 res.status(200).json({ id, name, status, species, origin, gender, image })
//             } catch (error) {
//                 res.status(404).send(`Not Found: ${error.message}`);
//             }
//         })
//         .catch(err => {
//             res.status(500).send(err.message);
//         })
// };

module.exports = getCharById;



// antigua version de conexion al controlador.

/* const axios = require("axios");


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

module.exports = getCharById */

