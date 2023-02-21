
import logo from "../../assets/logo.svg";
import { CartWidget } from "./CartWidget/CartWidget";

export const Navbar = () => {
    return (
        <nav className="shadow w-full font-default">
            <div className="md:flex items-center justify-between bg-violet-100 px-8 py-4">
                <a className="md:flex items-center" href="#">
                    <img src={logo} alt="logo" />
                    <span className="ml-2 text-xl">Volare</span>
                </a>
                <ul className="md:flex items-center">
                    <li className="ml-8"><a href="#">Inicio</a></li>
                    <li className="ml-8"><a href="#">Ropa</a></li>
                    <li className="ml-8"><a href="#">Accesorios</a></li>
                    <li className="ml-8"><a href="#">Calzados</a></li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    )
}