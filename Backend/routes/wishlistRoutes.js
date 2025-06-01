const express = require("express");
const router = express.Router();
const {liked, getall} = require('../Controllers/auth');

// Add item to wishlist
router.post('/liked',liked);


// Get user's wishlist
router.get("wishlist/:userId",getall);

// Remove item from wishlist
router.delete("/remove", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter((item) => item.productId !== productId);
    await wishlist.save();

    res.status(200).json({ message: "Product removed from wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
