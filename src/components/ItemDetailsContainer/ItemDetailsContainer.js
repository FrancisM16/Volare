import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db,"products",itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id, ...doc.data()
                })
            })
            .finally(() => setLoading(false))

    }, [itemId])

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