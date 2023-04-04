import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"
import { CartContext } from '../../context/CartContext'

export const Login = () => {
    const { login } = useContext(AuthContext)
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
        cart.length === 0 ? navigate("/") : navigate("/cart")
    }

    return (
        <div className="container mx-auto">
            <div className="py-4 px-4 md:px-0 space-y-8">
                <h2 className="text-xl">Iniciar sesión</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input
                            type={"email"}
                            onChange={handleInputChange}
                            value={values.email}
                            placeholder="Ej. daniela@gmail.com"
                            name="email"
                            className="placeholder-slate-400 sm:text-sm focus:ring-1"
                        />
                    </label>

                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Contraseña
                        </span>
                        <input
                            type={"password"}
                            onChange={handleInputChange}
                            value={values.password}
                            placeholder="Ej. ********"
                            name="password"
                            className="placeholder-slate-400 sm:text-sm focus:ring-1"
                        />
                    </label>

                    <div className='space-x-8'>
                        <button className='btn btn-primary' type='submit'>Login</button>
                        <Link to="/register">Registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}