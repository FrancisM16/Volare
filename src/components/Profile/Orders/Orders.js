import { useContext, useState, useEffect } from "react"
import { Spinner } from '../../Spinner/Spinner'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../../firebase/config"
import { AuthContext } from "../../../context/AuthContext";

export const Orders = () => {
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        setLoading(true)
        const ordersQuery = query(collection(db, "orders"), where("cliente.uid", "==", user.uid))
        getDocs(ordersQuery)
            .then((orderCollection) => {
                const userOrders = orderCollection.docs.map((order) => {
                    console.log(order)
                    return { id: order.id, ...order.data() }
                }).sort((item1, item2) => {
                    if (item1.fecha > item2.fecha) return -1
                    else if (item1.fecha < item2.fecha) return 1
                    return 0
                })
                setOrders(userOrders)
            })
            .finally(() => {
                setLoading(false)
            })
    }
        , [user.uid])

    if (orders.length === 0) {
        return (
            <p>Aún no has comprado</p>
        )
    }

    return (
        <div>
            {
                loading
                    ? <Spinner />
                    :
                    <div className="relative overflow-x-auto rounded-lg border border-slate-200">
                        <table className="w-full text-left">
                            <thead className="text-xs uppercase bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3">N° orden</th>
                                    <th className="px-6 py-3">Fecha</th>
                                    <th className="px-6 py-3">Precio total</th>
                                    <th className="px-6 py-3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                {
                                    orders.map((order) => {
                                        const date = new Date(order.fecha.seconds * 1000)
                                        return (
                                            <tr className="bg-white border-b" key={order.id} >
                                                <td className="px-6 py-3">{order.id} </td>
                                                <td className="px-6 py-3">{date.toLocaleString()}</td>
                                                <td className="px-6 py-3">${order.total}</td>
                                                <td><button>Ver más</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>

    )
}