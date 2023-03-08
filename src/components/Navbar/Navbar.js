
import logo from "../../assets/logo.svg";
import { CartWidget } from "./CartWidget/CartWidget";
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="shadow w-full font-default">
            <div className="md:flex items-center justify-between bg-violet-100 px-8 py-4">
                <NavLink to="/" className="md:flex items-center">
                    <img src={logo} alt="logo" />
                    <span className="ml-2 text-xl">Volare</span>
                </NavLink>
                <ul className="md:flex items-center">
                    <li className="ml-8"><NavLink to="/" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Inicio</NavLink></li>
                    <li className="ml-8"><NavLink to="/category/clothe" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Ropa</NavLink></li>
                    <li className="ml-8"><NavLink to="/category/accesory" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Accesorios</NavLink></li>
                    <li className="ml-8"><NavLink to="/category/footwear" className={({ isActive }) => isActive ? "link-active" : "link-inactive"}>Calzados</NavLink></li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
    )
}