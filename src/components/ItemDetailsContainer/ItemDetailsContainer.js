import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import { ItemDetail } from "./ItemDetail/ItemDetail"

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirProductoPorId( Number(itemId) )
            .then((response) => {
                setItem(response)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <article className="container mx-auto mt-4">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </article>
    )

}