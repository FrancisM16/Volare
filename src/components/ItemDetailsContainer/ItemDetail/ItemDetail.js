import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ItemCount } from "./ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

export const ItemDetail = ({ item }) => {
    const { addItemCart, isInCart } = useContext(CartContext)
    const [amount, setAmount] = useState(1)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAdd = () => {
        const newItem = {
            ...item,
            amount
        }
        addItemCart(newItem)
    }

    return (
        <div className="container mx-auto space-y-6 p-4 md:py-6 font-default">
            <button onClick={handleVolver} className="hover:text-indigo-600 space-x-2">
                <FontAwesomeIcon icon={solid('chevron-left')} size='sm' />
                <span>Volver</span>
            </button>
            <div className="border border-slate-200 bg-white rounded-lg shadow-sm flex-none p-4 space-y-8 md:space-y-0 md:space-x-8 md:flex md:items-center">
                <img className="h-full w-full rounded-md md:object-scale-down md:h-1/5 md:w-1/5" src={item.pictureUrl} alt={item.title} />
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="text-xl text-indigo-900">${item.price}</p>
                    </div>
                    <p>{item.description}</p>
                    {
                        isInCart(item.id)
                            ? <div className="flex flex-col md:flex-row font-default">
                                <Link to="/cart" className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center">Finalizar compra</Link>
                            </div>
                            : <ItemCount
                                stock={item.stock}
                                amount={amount}
                                setAmount={setAmount}
                                handleAdd={handleAdd}
                            />
                    }
                </div>
            </div>
        </div>
    )
}