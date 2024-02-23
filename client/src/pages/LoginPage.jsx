import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';


function LoginPage() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const { signin, errors: signinErrors, isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const onSubmit = handleSubmit(data => {
		signin(data);
	})

	useEffect(() => {
		if (isAuthenticated) navigate('/tasks');
	}, [isAuthenticated]);

	return (
		<div className='flex h-[calc(100vh-100px)] items-center justify-center'>
			<div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
			{signinErrors.map((error, i) => (
					<div className='bg-red-500 p-2 text-white my-2 rounded-md' key={i}>
						<FontAwesomeIcon icon={faCircleExclamation}/> {error}
					</div>
				))}
				<h1 className='text-2xl font-bold '>Login</h1>
				<form onSubmit={onSubmit}>
					<input type="email" {...register('email', {required: true})} 
						className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-2'
						placeholder='Email'
					/>
					{errors.email && (
						<p className='text-red-500'>Email is required</p>
					)}
					<input type="password" {...register('password', {required: true})} 
						className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
						placeholder='Password'
					/>
					{errors.password && (
						<p className='text-red-500'>Password is required</p>
					)}
					<button type='submit' className='bg-slate-600 p-2 w-full rounded-md mb-3' >
						Register
					</button>
				</form>
				<p className='flex gap-x-2 justify-between'>
					Don´t have an account? <Link to={'/register'} className='text-sky-500'>Sign Up</Link>
				</p>
			</div>
		</div>
	)
}

export default LoginPage;
