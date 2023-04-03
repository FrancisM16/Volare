import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'

export const LoggedInRoutes = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.logged) {
            navigate("/");
        }
    }, [navigate, user.logged]);

    return <Outlet />
}
