// Define rutas y lógica
import 'dotenv/config'; // Ahora sí lee mi .env
import express from "express";

import authRouter from "./routes/authRouter.js";
import profileRouter from "./routes/profileRouter.js";
import productRouter from "./routes/productRouter.js";
import cors from "cors";

const api = express();

//Cargar middlewares de configuración
api.use(cors());

api.use(express.json());

api.get('/', (req, res) => { // .get(ruta, handler)
    res.json({
        message: "API is running"
    })
})

// Registrar todas las rutas que habíamos planteado
api.use('/api/auth', authRouter) //Agrupar rutas con mismo prefijo
api.use('/api/profile', profileRouter)
api.use('/api/products', productRouter)

export default api 