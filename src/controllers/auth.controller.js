import User from '../models/user.model.js'

export const register = async (req, res) => { 
	//req.body seran los datos que el cliente envie
	const { email, password, username } = req.body;

	try {
		const newUser = new User({
			username,
			email,
			password
		})
		const userSaved = await newUser.save();
		console.log(userSaved);
	} catch (error) {
		console.error(error);
	}

	res.send('Registrando...')
};
export const login = (req, res) => {};