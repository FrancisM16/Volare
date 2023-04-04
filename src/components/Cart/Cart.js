import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Summary } from "./Summary/Summary";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { ToastContainer } from 'react-toastify';
import './Cart.css'

export const Cart = () => {
    const { cart, removeItemCart } = useContext(CartContext)
    console.log(cart)

    if (cart.length === 0) {
        return (<EmptyCart />)
    }

    return (
        <div className="container mx-auto space-y-6 p-4 md:py-6">
            <h2 className="text-xl">Tu compra</h2>
            <div className="lg:flex lg:items-start space-x-0 space-y-4 md:space-x-0 lg:space-x-4 lg:space-y-0 xl:space-x-8">
                <div className="relative overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left">
                        <thead className="text-xs uppercase bg-gray-100">
                            <tr>
                                <th className="px-6 py-3">Producto</th>
                                <th className="px-6 py-3">Precio unitario</th>
                                <th className="px-6 py-3">Cantidad</th>
                                <th className="px-6 py-3">Precio total</th>
                                <th className="px-6 py-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {
                                cart.map((prod) => (
                                    <tr className="bg-white border-b" key={prod.id} >
                                        <td className="flex items-center space-x-6 px-6 py-3">
                                            <img className="rounded-full h-12 w-12  object-cover" src={prod.pictureUrl} alt={prod.title} />
                                            <p>{prod.title}</p>
                                        </td>
                                        <td className="px-6 py-3">${prod.price} </td>
                                        <td className="px-6 py-3">{prod.amount}</td>
                                        <td className="px-6 py-3">${prod.price * prod.amount}</td>
                                        <td className="px-6 py-3">
                                            <button onClick={() => removeItemCart(prod)}>
                                                <FontAwesomeIcon icon={solid('trash')} size='lg' className="trash" />
                                            </button>
                                            <ToastContainer />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Summary />

            </div>
        </div>
    )
}