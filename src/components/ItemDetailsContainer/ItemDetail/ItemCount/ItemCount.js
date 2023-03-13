import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";

export const ItemCount = () => {
    const [stock, setStock] = useState(10)
    const [counter, setCounter] = useState(1)
    const [cart, setCart] = useState(0)

    const handleClickMinus = () => {
        counter > 1 && setCounter(counter - 1)
    }

    const handleClickPlus = () => {
        counter < stock && setCounter(counter + 1)
    }

    const onAdd = () => {
        if (stock - counter >= 0) {
            setCart(cart + counter)
            setStock(stock - counter)
            setCounter(1)
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex items-center space-x-4">
                <p> Stock : {stock}</p>
                <p> Cart : {cart}</p>
            </div>
            <div className="flex flex-col mt-4 space-y-4 md:space-y-0 md:space-x-8 md:items-center md:flex-row font-default">
                <div className="flex items-center border rounded-md border-slate-500 w-fit">
                    <button onClick={handleClickMinus} className="p-2 border rounded-l-md border-r-slate-500 bg-slate-100 hover:bg-slate-200">
                        <FontAwesomeIcon icon={solid('minus')} size='lg' />
                    </button>
                    <p className="px-8">{counter}</p>
                    <button onClick={handleClickPlus} className="p-2 border rounded-r-md border-l-slate-500 bg-slate-100 hover:bg-slate-200">
                        <FontAwesomeIcon icon={solid('plus')} size='lg' />
                    </button>
                </div>
                <button onClick={onAdd} className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black md:w-fit w-full">Agregar al carrito</button>
            </div>
        </div>
    )
}