import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import './Navbar.css'

export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu)
    }

    const handleCloseMenu = () => {
        setMenu(false)
    }

    return (
        <nav className={`w-full font-default z-[1] top-0 sticky`}>
            <div className="items-center justify-between bg-violet-100 px-0 py-4 md:px-8 md:flex">
                <div className="flex items-center justify-between px-4 md:px-0">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} alt="logo" />
                        <span className="hidden md:block md:ml-2 md:text-xl">Volare</span>
                    </NavLink>
                    <button onClick={handleClick} className="md:hidden">
                        {
                            menu
                                ? <FontAwesomeIcon icon={solid('xmark')} size='lg' />
                                : <FontAwesomeIcon icon={solid('bars')} size='lg' />
                        }
                    </button>
                </div>
                <ul className={`absolute bg-violet-50 md:bg-transparent w-full z-[-1] py-8 space-y-4 
                                md:space-y-0 md:py-0 md:z-0 md:w-fit md:static md:flex md:items-center duration-500 ease-in 
                                ${menu ? 'top-16 ' : 'top-[-400px]'}`}>
                    <li className="ml-8">
                        <NavLink onClick={handleCloseMenu} to="/" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Inicio</NavLink>
                    </li>
                    <li className="ml-8">
                        <NavLink onClick={handleCloseMenu} to="/category/clothe" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Ropa</NavLink>
                    </li>
                    <li className="ml-8">
                        <NavLink onClick={handleCloseMenu} to="/category/accesory" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Accesorios</NavLink>
                    </li>
                    <li className="ml-8">
                        <NavLink onClick={handleCloseMenu} to="/category/footwear" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Calzados</NavLink>
                    </li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}