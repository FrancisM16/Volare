import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../firebase/config"
import swal from "sweetalert";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init)
    const { user, userInfo } = useContext(AuthContext)

    const addItemCart = (item) => {
        setCart([...cart, item])
    }

    const removeItemCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalCant = () => {
        return cart.reduce((acc, prod) => acc + prod.amount, 0)
    }

    const totalPurchase = () => {
        return cart.reduce((acc, prod) => acc + prod.amount * prod.price, 0)
    }

    const clear = () => {
        setCart([])
    }

    const createOrder = () => {
        const order = {
            cliente: {...userInfo, uid: user.uid},
            items: cart.map((prod) => ({ id: prod.id, title: prod.title, price: prod.price, stock: prod.stock })),
            total: totalPurchase(),
            fecha: new Date()
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, order)
        .then((doc) => {
            swal({
				icon: 'success',
				title: 'Compra exitosa',
				text: `N° de orden: ${ doc.id }`,
			})
            clear()
        })
    }

    useEffect(() => {
        console.log("CartContext")
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addItemCart,
            removeItemCart,
            isInCart,
            totalCant,
            totalPurchase,
            createOrder,
            // getOrders,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}