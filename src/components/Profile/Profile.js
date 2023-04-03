import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import { Orders } from "./Orders/Orders"

export const Profile = () => {
    const { logout, userInfo } = useContext(AuthContext)

    return (
        <article className="h-full container mx-auto">
            <div>
                <h2 className="text-lg"> Perfil</h2>
                <h2>{userInfo.name} {userInfo.address}</h2>
                <Link onClick={logout} to="/">Cerrar sesión</Link>
            </div>

            <Orders />
        </article>

    )
}