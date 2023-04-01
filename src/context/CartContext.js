import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

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

    return (
        <CartContext.Provider value={{
            cart,
            addItemCart,
            removeItemCart,
            isInCart,
            totalCant,
            totalPurchase,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}