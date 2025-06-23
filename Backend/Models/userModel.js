const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date },
    gender: { type: String },
    password: { type: String, required: true },
    token: { type: String },
    image: { type: String},
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

// Corrected export statement
const User = mongoose.model('User', userSchema);
module.exports = User; // Use 'module.exports' instead of 'module.export'