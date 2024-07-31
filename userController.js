const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Registro de usuario
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create(username, email, hashedPassword);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user' });
  }
};

// Inicio de sesión
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.contrasena);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error logging in' });
  }
};

// Obtener perfil de usuario
const getUserProfile = (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json({ user });
};

// Actualizar información del usuario
const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const userId = req.user.id;

  try {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    await User.update(userId, username, email, hashedPassword);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
};

// Desactivar perfil de usuario
const deactivateUser = async (req, res) => {
  const userId = req.user.id;

  try {
    await User.deactivate(userId);
    res.json({ message: 'User deactivated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deactivating user' });
  }
};

const someAdminAction = async (req, res) => {
  res.json({ message: 'Admin action executed successfully' });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
  deactivateUser,
  someAdminAction,
};

