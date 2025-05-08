import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10) // primero se encripta
        req.body.password = password //Se modifica en body
        const user = await User.create(req.body); //Guardamos

        user.password = undefined;

        res.status(201).json({ message: "Usuario creado", user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al crear usuario"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, phone, username, password } = req.body;
        const user = await User.findOne({
            $or: [
                { email }, { phone }, { username }
            ]
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const passwordMatch = bcrypt.compareSync(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        //Crear un token y mandarlo al usuario
        const payload = {
            userId: user.id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        })

        res.json({
            token,
        }) //El status default es 200

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al hacer login"
        })
    }
}

export { login, register }