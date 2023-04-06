import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './ItemCount.css';

export const ItemCount = ({ stock, amount, setAmount, handleAdd }) => {
	const handleClickMinus = () => {
		amount > 1 && setAmount(amount - 1);
	};

	const handleClickPlus = () => {
		amount < stock && setAmount(amount + 1);
	};

	if (stock === 0) {
		return <p className='text-violet-900'>No hay stock disponible</p>;
	}

	return (
		<div className='container mx-auto'>
			<div className='flex flex-col mt-4 space-y-4 md:space-y-0 md:space-x-8 md:items-center md:flex-row'>
				<div className='flex items-center border rounded-md border-slate-500 w-fit'>
					<button
						onClick={handleClickMinus}
						className={`p-2 border rounded-l-md border-r-slate-500 bg-slate-100 
                        ${amount === 1 ? 'disabled' : 'hover:bg-slate-200'}`}
						disabled={amount === 1}
					>
						<FontAwesomeIcon icon={solid('minus')} size='lg' />
					</button>

					<p className='flex justify-center w-12'>{amount}</p>

					<button
						onClick={handleClickPlus}
						className={`p-2 border rounded-r-md border-l-slate-500 bg-slate-100 
                        ${
													amount === stock ? 'disabled' : 'hover:bg-slate-200'
												}`}
						disabled={amount === stock}
					>
						<FontAwesomeIcon icon={solid('plus')} size='lg' />
					</button>
				</div>
				<button
					onClick={handleAdd}
					className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black md:w-fit w-full'
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};
