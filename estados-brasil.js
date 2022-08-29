//Criando API e consumindo no front

const http = require("http");
const estados = require("./database/estados.json");

const server = http.createServer((request, response) => {

    response.setHeader("Access-Control-Allow-Origin", "*");

    response.write(JSON.stringify(estados));

    return response.end();

});

server.listen(7000, () => console.log("Servidor rodando, coisa linda!"));

