import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"

export const Summary = () => {
    const { totalPurchase, clear } = useContext(CartContext)
    return (
        <div className="border border-slate-200 bg-white rounded-lg shadow-sm p-8 space-y-4">
            <h2 className="text-lg">Resumen</h2>
            <div className="space-y-2">
                <h3>Total: ${totalPurchase()}</h3>
                <div className="flex flex-col space-x-0 space-y-4 xl:space-x-2 xl:space-y-0 xl:flex-row font-default">

                    <button onClick={clear}
                        className="border rounded-md py-2 px-4 border-violet-900 hover:bg-violet-900 hover:text-white text-center">
                        Vaciar carrito
                    </button>

                    <Link className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center"
                        to="/checkout">Terminar mi compra
                    </Link>

                </div>
            </div>
        </div>
    )
}