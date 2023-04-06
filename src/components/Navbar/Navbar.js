import { useContext, useState } from 'react';

import { CartWidget } from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import { AuthContext } from '../../context/AuthContext';
import category from '../../data/category.json';
import './Navbar.css';

export const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const { user } = useContext(AuthContext);

	const handleClick = () => {
		setMenu(!menu);
	};

	const handleCloseMenu = () => {
		setMenu(false);
	};

	return (
		<nav className={`w-full z-[1] top-0 sticky`}>
			<div className='items-center justify-between bg-violet-100 px-0 py-4 md:px-8 md:flex'>
				<div className='flex items-center justify-between px-4 md:px-0'>
					<NavLink
						to='/'
						className='flex items-center'
						onClick={handleCloseMenu}
					>
						<img src={logo} alt='logo' />
						<span className='hidden md:block md:ml-2 md:text-xl'>Volare</span>
					</NavLink>
					<button onClick={handleClick} className='md:hidden'>
						{menu ? (
							<FontAwesomeIcon icon={solid('xmark')} size='lg' />
						) : (
							<FontAwesomeIcon icon={solid('bars')} size='lg' />
						)}
					</button>
				</div>
				<ul
					className={`absolute bg-violet-50 md:bg-transparent w-full z-[-1] py-8 space-y-4 duration-500 ease-in
                                md:space-y-0 md:py-0 md:z-0 md:w-fit md:static md:flex md:items-center md:transition-none
                                ${menu ? 'top-16' : 'top-[-400px]'}`}
				>
					<li className='ml-8'>
						<NavLink
							onClick={handleCloseMenu}
							to='/'
							className={({ isActive }) =>
								isActive ? 'link-active' : 'link-inactive'
							}
						>
							Inicio
						</NavLink>
					</li>
					{category.map(data => (
						<li className='ml-8' key={data.id}>
							<NavLink
								onClick={handleCloseMenu}
								className={({ isActive }) =>
									isActive ? 'link-active' : 'link-inactive'
								}
								to={`/category/${data.type}`}
							>
								{data.name}
							</NavLink>
						</li>
					))}
					<CartWidget handleCloseMenu={handleCloseMenu} />
					{user.logged ? (
						<Link
							className='flex items-center space-x-2 text-black hover:text-violet-900 text-center px-8 md:px-0'
							to='/profile'
							onClick={handleCloseMenu}
						>
							<img src={avatar} alt='avatar' className='h-8 w-8' />
							<p>Mi perfil</p>
						</Link>
					) : (
						<Link
							className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center'
							to='/login'
							onClick={handleCloseMenu}
						>
							Iniciar sesión
						</Link>
					)}
				</ul>
			</div>
		</nav>
	);
};
