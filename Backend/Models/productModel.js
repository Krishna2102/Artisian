const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true},
    price: {type:String, required:true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Refers to User model
}, { timestamps: true });

// Corrected export statement
const Product = mongoose.model('Product', productSchema);
module.exports = Product; // Use 'module.exports' instead of 'module.export'