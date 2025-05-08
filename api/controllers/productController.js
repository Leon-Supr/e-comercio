import Product from "../models/Product.js"

const productList = async (req, res) => { }
const createProduct = async (req, res) => {
    try {
        const product = await Product.create({
            ...req.body,
            user: req.userId //Esto llega desde el middleware de isAuthenticated
        })

        return res.json({
            product
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