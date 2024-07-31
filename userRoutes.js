// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUser, deactivateUser, someAdminAction } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');
const isAdmin = require('../middlewares/isAdmin');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUser);
router.delete('/profile', authenticateToken, deactivateUser);

// Rutas administrativas
router.post('/admin/some-action', authenticateToken, isAdmin, someAdminAction);

module.exports = router;
