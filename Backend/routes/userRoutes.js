const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/usermiddleware');
const {addProduct,liked, getall,deleteProduct,updateProduct,removeFromWishlist, addToCart,removeFromCart,getAllProducts} = require('../Controllers/auth');

// Define routes here...
router.post('/add', authenticateUser, addProduct);

// ✅ Like (Add to Wishlist)
router.post('/wishlist/add', authenticateUser, liked);

router.get('/getall', authenticateUser, getAllProducts);


// ✅ Get all Liked products (GET)
router.get('/getallliked', authenticateUser, getall);

// ✅ Delete a product (DELETE)
router.delete('/delete/:productId', authenticateUser, deleteProduct);

// ✅ Update a product (PUT)
router.put('/update/:productId', authenticateUser, updateProduct);

// ✅ Remove from Wishlist (DELETE)
router.delete('/wishlist/remove/:productId', authenticateUser, removeFromWishlist);

// ✅ Add to Cart (POST)
router.post('/cart/add', authenticateUser, addToCart);

// ✅ Remove from Cart (DELETE)
router.delete('/cart/remove/:productId', authenticateUser, removeFromCart);



module.exports = router; // ✅ Ensure you're exporting the router properly
