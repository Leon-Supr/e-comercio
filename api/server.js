// Crea y lanza el servidor

import http from 'http' // Ya viene en node
import api from './api.js';

const server = http.createServer(api); //Crea el server con la api

server.on('listening', () => {
    console.log("Server is running");
}) //Cuando ocurra el evento listening, se ejecutará el callback

server.listen(8080); //Ya creado, en qué puerto escucha?

