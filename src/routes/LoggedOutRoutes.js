import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const LoggedOutRoutes = () => {
    const { user } = useContext(AuthContext)
    return(
        user.logged ? <Navigate to="/" replace/> : <Outlet/>
    )
}
