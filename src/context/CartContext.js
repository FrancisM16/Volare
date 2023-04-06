import { createContext, useContext, useEffect, useState } from 'react';

import { AuthContext } from './AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';
import swal from 'sweetalert2';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(init);
	const { user, userInfo } = useContext(AuthContext);

	const addItemCart = item => {
		setCart([...cart, item]);
	};

	const removeItemCart = item => {
		setCart(cart.filter(prod => prod.id !== item.id));
		showModalRemoveCart(item);
	};

	const isInCart = id => {
		return cart.some(prod => prod.id === id);
	};

	const totalCant = () => {
		return cart.reduce((acc, prod) => acc + prod.amount, 0);
	};

	const totalPurchase = () => {
		return cart.reduce((acc, prod) => acc + prod.amount * prod.price, 0);
	};

	const clear = () => {
		setCart([]);
	};

	const showModalAddCart = item => {
		const amountText =
			item.amount === 1
				? 'Agregaste 1 unidad'
				: `Agregaste ${item.amount} unidades`;

		toast.success(`${amountText}`, {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const showModalRemoveCart = item => {
		const amountText =
			item.amount === 1
				? 'Eliminaste 1 unidad'
				: `Eliminaste ${item.amount} unidades`;

		toast.error(`${amountText}`, {
			position: 'top-right',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const createOrder = () => {
		swal
			.fire({
				title: 'Confirmar compra',
				text: '¿Deseas pagar $' + totalPurchase() + ' por tus productos?',
				icon: 'question',
				showCancelButton: true,
				showCloseButton: true,
				confirmButtonColor: '#4C1D95',
				cancelButtonText: 'No, cancelar',
				confirmButtonText: 'Sí, pagar',
				allowOutsideClick: false,
			})
			.then(result => {
				if (result.isConfirmed) {
					const order = {
						cliente: { ...userInfo, uid: user.uid },
						items: cart.map(prod => ({
							id: prod.id,
							title: prod.title,
							price: prod.price,
							stock: prod.stock,
						})),
						total: totalPurchase(),
						fecha: new Date(),
					};

					const orderRef = collection(db, 'orders');

					addDoc(orderRef, order).then(doc => {
						swal.fire({
							title: '¡Compra exitosa!',
							text: `N° de orden: ${doc.id}`,
							icon: 'success',
							confirmButtonColor: '#4C1D95',
						});
						clear();
					});
				}
			});
	};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				addItemCart,
				removeItemCart,
				isInCart,
				totalCant,
				totalPurchase,
				createOrder,
				showModalAddCart,
				clear,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
