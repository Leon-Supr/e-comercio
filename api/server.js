import http from 'http' // Ya viene en node

const server = http.createServer();

server.on('listening', () => {
    console.log("Server running");
}) //Cuando ocurra el evento listening, se ejecutará el callback

server.listen(8080); //Ya creado, en qué puerto escucha?

