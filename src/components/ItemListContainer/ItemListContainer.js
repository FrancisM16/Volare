import { useEffect, useState } from 'react';

import { ItemList } from './ItemList/ItemList';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { Circle } from '../Circle/Circle';
import { collection, getDocs, query, where } from 'firebase/firestore';
import categories from '../../data/category.json';
import { db } from '../../firebase/config';

export const ItemListContainer = () => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const { categoryId } = useParams();

	useEffect(() => {
		if (!categories.some(category => category.type === categoryId)) {
			navigate('/');
		}

		setLoading(true);

		const productsRef = collection(db, 'products');
		const queryItem = categoryId
			? query(productsRef, where('category', '==', categoryId))
			: productsRef;

		getDocs(queryItem)
			.then(res => {
				const docs = res.docs.map(doc => {
					return { id: doc.id, ...doc.data() };
				});
				setProductos(docs);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId, navigate]);

	return (
		<article className='h-full'>
			{loading ? (
				<Spinner />
			) : (
				<div>
					<Circle
						color='bg-pink-200'
						coordX='inset-x-1/4'
						coordY='inset-y-1/4'
					/>
					<Circle
						color='bg-purple-200'
						coordX='inset-x-2/4'
						coordY='inset-y-2/4'
					/>
					<ItemList items={productos} category={categoryId} />
				</div>
			)}
		</article>
	);
};
