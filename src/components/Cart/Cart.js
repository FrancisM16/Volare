import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css'

export const Cart = () => {
    const { cart, totalPurchase, clear, removeItemCart } = useContext(CartContext)
    return (
        <div className="container mx-auto space-y-6 p-4 md:py-6 font-default">
            <h2 className="text-xl">Tu compra</h2>
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
                                        <button onClick={() => removeItemCart(prod.id)}>
                                            <FontAwesomeIcon icon={solid('trash')} size='lg' className="trash"/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h3>Total: ${totalPurchase()}</h3>
            <div className="flex flex-col md:flex-row font-default">
                <button onClick={clear} className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center">Vaciar carrito</button>
            </div>
        </div>
    )
}