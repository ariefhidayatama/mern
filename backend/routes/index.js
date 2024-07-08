// const express = require('express')
import express from "express";
import registerController from "../controllers/RegisterController.js";
import loginController from "../controllers/LoginController.js";
import userController from "../controllers/UserController.js";
import { validateLogin, validateRegister } from "../utils/validators/auth.js";
import verifyToken from "../middlewares/auth.js";
import { validateUser } from "../utils/validators/user.js";

//init express router
const router = express.Router();

//define route for register
router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);
router.get('/admin/users', verifyToken, userController.findUsers);
router.post('/admin/users', verifyToken, validateUser, userController.createUser);
router.get('/admin/users/:id', verifyToken, userController.findUserById);
router.put('/admin/users/:id', verifyToken, validateUser, userController.updateUser);
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

export default router;

//export router
// module.exports = router