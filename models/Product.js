const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    info: {
        type:String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    countInStock: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required:true,
    },
    category: {
        type: String,
        required:true
    }
})

const Product = mongoose.model("product", productSchema);

module.exports = Product

