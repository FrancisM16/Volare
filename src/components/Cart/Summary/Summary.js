import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { AuthContext } from '../../../context/AuthContext';

export const Summary = () => {
	const { totalPurchase, clear, createOrder } = useContext(CartContext);
	const { user } = useContext(AuthContext);

	return (
		<div className='border border-slate-200 bg-white rounded-lg shadow-sm p-8 space-y-4'>
			<h2 className='text-lg'>Resumen</h2>
			<div className='space-y-2'>
				<h3>Total: ${totalPurchase()}</h3>
				<div className='flex flex-col space-x-0 space-y-4 xl:space-x-2 xl:space-y-0 xl:flex-row'>
					<button
						onClick={clear}
						className='border rounded-md py-2 px-4 border-violet-900 hover:bg-violet-900 hover:text-white text-center'
					>
						Vaciar carrito
					</button>
					{user.logged ? (
						<button
							className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center'
							onClick={createOrder}
						>
							Terminar mi compra
						</button>
					) : (
						<Link
							className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center'
							to='/login'
						>
							Iniciar sesión
						</Link>
					)}
				</div>
				{user.logged ? null : (
					<p className='text-red-600 text-sm text-center xl:text-left'>
						Debes iniciar sesión para continuar
					</p>
				)}
			</div>
		</div>
	);
};
