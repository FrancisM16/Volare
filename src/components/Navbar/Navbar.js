import logo from "../../assets/logo.svg";

export const Navbar = () => {
    return (
        <nav>
            <a href="#">
                <img src={logo} alt="logo" />
                <span> Volare</span>
            </a>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Ropa</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Calzados</a></li>
            </ul>
        </nav>
    )
}