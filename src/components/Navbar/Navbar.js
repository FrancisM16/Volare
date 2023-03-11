import logo from "../../assets/logo.svg";
import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import './Navbar.css'

export const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
        toggle
            ? document.body.style.overflow = 'unset'
            : document.body.style.overflow = 'hidden'
    }

    return (
        <nav className={`w-full font-default md:sticky z-[1] top-0 ${toggle ? '' : 'sticky'}`}>
            <div className="md:flex items-center justify-between bg-violet-100 px-0 md:px-8 py-4">
                <div className="flex items-center justify-between px-4 md:px-0">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} alt="logo" />
                        <span className="hidden md:block md:ml-2 md:text-xl">Volare</span>
                    </NavLink>
                    <button onClick={handleClick} className="md:hidden">
                        {
                            toggle
                                ? <FontAwesomeIcon icon={solid('xmark')} size='lg' />
                                : <FontAwesomeIcon icon={solid('bars')} size='lg' />
                        }
                    </button>
                </div>
                <ul className={`md:flex md:items-center absolute md:static backdrop-blur-lg md:backdrop-blur-0 w-full h-full z-[-1] py-8 space-y-4 md:space-y-0 md:py-0 md:z-0 md:w-fit duration-500 ease-in ${toggle ? 'left-0 ' : 'left-[-728px]'}`}>
                    <li className="ml-8"><NavLink onClick={handleClick} to="/" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Inicio</NavLink></li>
                    <li className="ml-8"><NavLink onClick={handleClick} to="/category/clothe" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Ropa</NavLink></li>
                    <li className="ml-8"><NavLink onClick={handleClick} to="/category/accesory" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Accesorios</NavLink></li>
                    <li className="ml-8"><NavLink onClick={handleClick} to="/category/footwear" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Calzados</NavLink></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}