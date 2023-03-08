import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((response) => {
                if (!categoryId) {
                    setProductos(response)
                } else {
                    setProductos(response.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <article className="container mx-auto mt-4 text-xl">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </article>
    )
}