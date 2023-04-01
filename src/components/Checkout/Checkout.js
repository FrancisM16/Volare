import { useContext, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import { Link, Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

export const Checkout = () => {
    const { cart, totalPurchase, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        name: "",
        email: "",
        address: ""
    })

    const handleSubmit = (e) => {

        e.preventDefault()

        if (values.name.length < 3) {
            alert("Nombre invalido")
            return
        }


        if (values.email.length < 3) {
            alert("Email invalido")
            return
        }


        if (values.address.length < 3) {
            alert("Dirección invalida")
            return
        }

        const order = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, title: prod.title, price: prod.price, stock: prod.stock })),
            total: totalPurchase(),
            fecha: new Date()
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                clear()
            })
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    if (orderId) {
        return (
            <div className="container mx-auto space-y-6 py-4 font-default">
                <div>
                    <h2 className='text-xl'>Tu orden se registró con éxito!</h2>
                    <p>Guarda tu número de orden: {orderId}</p>
                </div>
                <div>

                <Link className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center" to="/">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container mx-auto">
            <form className="space-y-6 py-4 px-4 md:px-0" onSubmit={handleSubmit}>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Nombre
                    </span>
                    <input type={"text"}
                        onChange={handleInputChange}
                        value={values.nombre}
                        placeholder="Ej. Daniela Gonzales"
                        name="name" className="placeholder-slate-400 sm:text-sm focus:ring-1" />
                </label>

                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type={"email"}
                        onChange={handleInputChange}
                        value={values.email}
                        placeholder="Ej. daniela@gmail.com"
                        name="email" className="placeholder-slate-400 sm:text-sm focus:ring-1" />
                </label>

                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Dirección
                    </span>
                    <input type={"text"}
                        onChange={handleInputChange}
                        value={values.direccion}
                        placeholder="Ej. Av. República de Panamá 153"
                        name="address" className="placeholder-slate-400 sm:text-sm focus:ring-1" />
                </label>
                <button className='border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center'
                    type='submit'>Enviar</button>
            </form>
        </div>
    )
}