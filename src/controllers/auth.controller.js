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
export const login = async (req, res) => { 
	//req.body seran los datos que el cliente envie
	const { email, password } = req.body;

	try {
		const userFound = await User.findOne({email});
		if(!userFound) {
			// Si el usuario no se encontro en la base de datos
			return res.status(400).json({message: "User not found"});
		};

		/* - Compara la contraseña ingresada por el usuario con la contraseña encriptada almacenada en la base de datos.
		- Utiliza la función bcrypt.compare() para verificar si coinciden. */
		const isMatch = await bcrypt.compare(password, userFound.password);
		if(!isMatch) {
			return res.status(400).json({ message: "Incorrect password"});
		}



		const token = await createAccessToken({id: userFound.id})
		res.cookie('token', token);
		res.json({
			id: userFound.id,
			username: userFound.username,
			email: userFound.email,
			createdAt: userFound.createdAt,
			updatedAt: userFound.updatedAt
		});


		// res.send('Registrando...')
	} catch (error) {
		res.status(500).json({message: error.message});
	}


};
export const logout = (req, res) => {
	res.cookie('token', "", {
		expires: new Date(0)
	});
	res.sendStatus(200);
};	