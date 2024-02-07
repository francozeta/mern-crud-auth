import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => { 
	//req.body seran los datos que el cliente envie
	const { email, password, username } = req.body;

	try {

		const passwordHash = await bcrypt.hash(password, 10) // Crea una serie de caracteres aleatorios, este metodo nos ofrecera encriptar la contraseña
		const newUser = new User({
			username,
			email,
			password: passwordHash
		})


		const userSaved = await newUser.save();
		const token = await createAccessToken({id: userSaved.id})
		res.cookie('token', token);
		res.json({
			id: userSaved.id,
			username: userSaved.username,
			email: userSaved.email,
			createdAt: userSaved.createdAt,
			updatedAt: userSaved.updatedAt
		});


		// res.send('Registrando...')
	} catch (error) {
		res.status(500).json({message: error.message});
	}


};
export const login = (req, res) => {};