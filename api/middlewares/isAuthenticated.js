import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    // Que tenga token la petición
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({
            message: "Missing token"
        })
    }

    //El token es original y válido
    try {
        const result = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = result.userId;
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" })
    }

    //Extraer del token el userId
}

export default isAuthenticated;