// Define rutas y lógica

import express from "express";

const api = new express();

api.get('/', (req, res) => { // .get(ruta, handler)
    res.json({
        message: "API is running"
    })
}) 

export default api