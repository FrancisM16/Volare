import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ItemCount } from "./ItemCount/ItemCount"

export const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container mx-auto py-6 space-y-6 font-default">
            <div className="space-x-2 hover:text-indigo-600">
                <FontAwesomeIcon icon={solid('chevron-left')} size='sm' />
                <button onClick={handleVolver} className="btn btn-primary">Volver</button>
            </div>
            <div className="flex items-center border border-slate-200 bg-white rounded-lg shadow-sm font-default">
                <img className="object-scale-down h-1/5 w-1/5 m-4" src={item.pictureUrl} alt={item.title} />
                <div>
                    <h2 className="text-2xl pb-4 font-semibold">{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Precio: ${item.price}</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}