import Product from "../models/Product.js"

const productList = async (req, res) => { }
const createProduct = async (req, res) => {
    try {
        const { files } = req;

        const photos = files ? files.map(file => file.path) : [];

        const product = await Product.create({
            ...req.body,
            photos,
            user: req.userId //Esto llega desde el middleware de isAuthenticated
        })

        return res.json({
            product,
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error al registrar producto, mi loco"
        })
    }
}

const productDetail = async (req, res) => { }
const updateProduct = async (req, res) => { }
const deleteProduct = async (req, res) => { }

export {
    productList,
    createProduct,
    productDetail,
    updateProduct,
    deleteProduct
}