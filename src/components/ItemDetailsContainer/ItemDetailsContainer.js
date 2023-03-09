import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../helpers/pedirDatos"
import { Spinner } from "../Spinner/Spinner"
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
        <article className="h-full">
            {
                loading
                    ? <Spinner/>
                    : <ItemDetail item={item}/>
            }
        </article>
    )

}