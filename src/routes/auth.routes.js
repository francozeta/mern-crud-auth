import { Router } from "express";
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controller.js'
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

// Creamos rutas
router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile)
router.get('/verify',  verifyToken)

/* 3:22:29 */



export default router;