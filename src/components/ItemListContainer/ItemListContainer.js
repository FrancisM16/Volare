import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'
import { Circle } from '../Circle/Circle'

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
        <article className="h-full">
            {
                loading
                    ? <Spinner />
                    :
                    <div>
                        <Circle color="bg-pink-200" coordX="inset-x-1/4" coordY="inset-y-1/4" />
                        <Circle color="bg-purple-200" coordX="inset-x-2/4" coordY="inset-y-2/4" />
                        <ItemList items={productos} category={categoryId} />
                    </div>
            }
        </article>
    )
}