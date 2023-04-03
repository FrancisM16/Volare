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
        <div className='container mx-auto'>
            <div className='login'>
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control'
                        placeholder='Tu email'
                        name='email'
                    />
                    <input
                        value={values.password}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-3'
                        placeholder='Password'
                        name='password'
                    />
                    <div className='space-x-8'>
                        <button className='btn btn-primary' type='submit'>Login</button>
                        <Link to="/register">Registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}