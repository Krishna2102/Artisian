const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      description: { type: String },
      price: { type: Number, required: true },
      image: { type: String },
    },
  ],
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
