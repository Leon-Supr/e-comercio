import { Schema, model } from "mongoose";

const productSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    photos: [{
        type: String,
    }],
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User', //En qué modelo buscar un registro con ese id
    }
});

export default model('Product', productSchema);