const http = require("http");
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
});
