const express = require('express');
const router = express.Router();
const { authenticateUser } = require('../middlewares/usermiddleware');
const { addProduct, deleteProduct, editProduct, getProduct, getAll, likedProduct, removefromLike, addtoCart, removefromCart, allLiked, allCart } = require('../Controllers/auth');

router.post('/add', authenticateUser, addProduct);
router.post('/delete/:id', authenticateUser, deleteProduct);
router.put('/edit/:id', authenticateUser, editProduct);
router.get('/product',getAll);
router.get('/product/:id', getProduct);

// Likes
router.get('/like', authenticateUser, allLiked);
router.post('/like/:id', authenticateUser, likedProduct);
router.delete('/like/:id', authenticateUser, removefromLike);

// cart
router.get('/cart', authenticateUser, allCart);
router.post('/cart/:id', authenticateUser, addtoCart);
router.delete('/cart/:id', authenticateUser, removefromCart);




module.exports = router;
