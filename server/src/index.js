var http = require("http");

const PORT = 3001;

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url === "/rickandmorty/character"){
        response.writeHead(200,{"Content-Type":""})
    }

}).listen(PORT, "localhost");
