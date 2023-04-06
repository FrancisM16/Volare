import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import avatar from '../../assets/avatar.svg';
import { Tabs } from './Tabs/Tabs';
import { Link } from 'react-router-dom';

export const Profile = () => {
	const { logout, userInfo } = useContext(AuthContext);

	return (
		<article className='flex-col h-full'>
			<div className='w-full h-1/6 flex items-center justify-center bg-amber-100'>
				<div className='relative'>
					<img
						src={avatar}
						alt='avatar'
						className='flex self-end transform translate-y-2/4 border-8 border-white rounded-full'
					/>
					<div className='h-4 w-4 bg-green-500 rounded-full absolute bottom-0 right-0 ring ring-white ring-offset-2 ring-offset-white'></div>
				</div>
			</div>
			<div className='flex-col justify-center pt-28 pb-8 md:pt-24 lg:pt-32 xl:pt-24 text-center'>
				<h2 className='text-xl text-violet-900'>{userInfo.name} </h2>
				<div className='p-2'>
					<Link onClick={logout} to='/' className=' hover:text-violet-900'>
						Cerrar sesión
					</Link>
				</div>
			</div>
			<Tabs />
		</article>
	);
};
