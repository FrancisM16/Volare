import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailsContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const { itemId } = useParams();

	useEffect(() => {
		setLoading(true);

		const docRef = doc(db, 'products', itemId);

		getDoc(docRef)
			.then(doc => {
				if (!doc.exists()) {
					navigate('/');
				}

				setItem({
					id: doc.id,
					...doc.data(),
				});
			})
			.finally(() => setLoading(false));
	}, [itemId, navigate]);

	return (
		<article className='h-full'>
			{loading ? <Spinner /> : <ItemDetail item={item} />}
		</article>
	);
};
