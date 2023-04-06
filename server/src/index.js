const http = require("http");
const data = require("./utils/data")
const PORT = 3001;

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    console.log(request.url)
    try {
        const { url } = request;
        if(url.includes("/rickandmorty/character")){
            const id = url.split("/").at(-1)
            console.log(id)
            //data es la informacion que llega del documento data.js, y se va a buscar el id por medio de la siguiente linea:
            const character = data.filter((el)=> el.id == id)[0]
            // console.log(character)
            if(character){
                response.writeHead(200,{"Content-Type":"application/json"});
                response.end(JSON.stringify(character))
            } else {
                response.writeHead(404,{"Content-Type":"application/json"});
                response.end(JSON.stringify({error: `Character not found with id: ${id}`}))
            }
        }
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}).listen(PORT, () => {
    console.log(`server on port ${PORT}`);
});
