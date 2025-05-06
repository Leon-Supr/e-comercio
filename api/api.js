// Define rutas y lógica

import express from "express";

import authRouter from "./routes/authRouter.js";

const api = new express();
api.use(express.json());

api.get('/', (req, res) => { // .get(ruta, handler)
    res.json({
        message: "API is running"
    })
})

// Registrar todas las rutas que habíamos planteado
api.use('/api/auth', authRouter) //Agrupar rutas con mismo prefijo

export default api 