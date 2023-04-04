import { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Spinner } from '../components/Spinner/Spinner'

export const LoggedOutRoutes = () => {
    const { user, isNavigationReady } = useContext(AuthContext)
    const navigate = useNavigate()

    if (user.logged && isNavigationReady) {
        navigate("/");
    }

    if (!isNavigationReady){
        return(<Spinner/>)
    }

    return <Outlet />
}
