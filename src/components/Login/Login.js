import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import bags from '../../assets/bags.svg';

export const Login = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const { login, showModalError } = useContext(AuthContext);
	const { cart } = useContext(CartContext);
	const navigate = useNavigate();

	const onSubmit = async data => {
		try {
			await login(data);
			cart.length === 0 ? navigate('/') : navigate('/cart');
		} catch (e) {
			showModalError('Usuario no registrado');
			navigate('/login');
		}
	};

	return (
		<div className='flex w-full h-screen'>
			<div className='w-full flex items-center justify-center lg:w-1/2'>
				<div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
					<h2 className='text-xl'>Iniciar sesión</h2>
					<div className='mt-4'>
						<form className='space-y-6 ' onSubmit={handleSubmit(onSubmit)}>
							<label className='flex flex-col space-y-2'>
								<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
									Correo electrónico
								</span>
								<input
									type={'email'}
									placeholder='Ej. daniela@gmail.com'
									className='placeholder-slate-400 sm:text-sm focus:ring-1'
									{...register('email', { required: true })}
								/>
								{errors.email && (
									<div className='space-x-2 text-red-600'>
										<FontAwesomeIcon
											icon={solid('circle-exclamation')}
											size='xs'
										/>
										<span className='text-sm'>
											Correo electrónico es obligatorio
										</span>
									</div>
								)}
							</label>

							<label className='flex flex-col space-y-2'>
								<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
									Contraseña
								</span>
								<input
									type={'password'}
									placeholder='Ej. ********'
									className='placeholder-slate-400 sm:text-sm focus:ring-1'
									{...register('password', { required: true, minLength: 8 })}
								/>
								{errors.password && errors.password.type !== 'minLength' && (
									<div className='space-x-2 text-red-600'>
										<FontAwesomeIcon
											icon={solid('circle-exclamation')}
											size='xs'
										/>
										<span className='text-sm'>Contraseña es obligatoria</span>
									</div>
								)}
								{errors.password && errors.password.type === 'minLength' && (
									<div className='space-x-2 text-red-600'>
										<FontAwesomeIcon
											icon={solid('circle-exclamation')}
											size='xs'
										/>
										<span className='text-sm'>
											Se necesita mínimo 8 caracteres
										</span>
									</div>
								)}
							</label>

							<div className='grid justify-items-center space-x-0 space-y-6 md:flex md:items-center md:space-y-0 md:space-x-4'>
								<button
									className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black md:w-fit w-full'
									type='submit'
								>
									Iniciar sesión
								</button>
								<div className='text-center'>
									<Link to='/register' className=' hover:text-violet-900'>
										Registrarme
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className='hidden relative w-1/2 h-full lg:flex items-center justify-center bg-amber-50'>
				<div className='w-80 h-80 rounded-full bg-gradient-to-tr from-violet-300 to-orange-200 animate-[pulse_8s_ease-in-out_infinite]' />
				<img src={bags} alt='logo' className='absolute' />
			</div>
			<ToastContainer />
		</div>
	);
};
