const express = require(`express`);
const server = express();
const PORT = 3001;
const {conn} = require("./DB_connection")
const router = require(`./routes/index`);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());
server.use("/rickandmorty", router)

conn.sync({ force: true }).then(
    server.listen(PORT, () => {
        console.log(`Server raised in port ${PORT}`);
    })
);


module.exports = express;


































/* const http = require("http");
// const data = require("./utils/data")
const getCharById = require("./controllers/getCharById")
const PORT = 3001;

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    console.log(request.url)
    try {
        const { url } = request;
        if (url.includes("/rickandmorty/character")) {
            const id = url.split("/").at(-1);
            console.log(id);
            //data es la informacion que llega del documento data.js, y se va a buscar el id por medio de la siguiente linea:
            getCharById(response, id);
        }
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}).listen(PORT, () => {
    console.log(`server on port ${PORT}`);
}); */
