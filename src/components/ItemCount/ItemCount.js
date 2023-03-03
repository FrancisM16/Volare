import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

export const ItemCount = () => {
    let [stock, setStock] = useState(10)
    let [counter, setCounter] = useState(1)
    let [cart, setCart] = useState(0)

    const handleClickMinus = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleClickPlus = () => {
        counter < stock && setCounter(counter + 1)
    }

    const onAdd = () => {
        if (stock - counter >= 0){
            setCart(cart + counter)
            setStock(stock - counter)
            setCounter(1)
        }
    }

    return (
        <div className="container mx-auto flex items-center space-x-8 mt-4 font-default">
            <div className="flex items-center border rounded-md border-slate-500">
                <button onClick={handleClickMinus} className="p-2 border rounded-l-md border-r-slate-500 bg-slate-100 hover:bg-slate-200">
                    <FontAwesomeIcon icon={solid('minus')} size='lg'/>
                </button>
                <p className="px-8">{counter}</p>
                <button onClick={handleClickPlus} className="p-2 border rounded-r-md border-l-slate-500 bg-slate-100 hover:bg-slate-200">
                    <FontAwesomeIcon icon={solid('plus')} size='lg'/>
                </button>
            </div>
            <button onClick={onAdd} className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black">Agregar al carrito</button>
            <p> Stock : {stock}</p>
            <p> Cart : {cart}</p>
        </div>
    )
}