import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(init)

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

    useEffect(() => {
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
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}