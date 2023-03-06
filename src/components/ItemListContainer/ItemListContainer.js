import { useEffect } from 'react'
import { useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList/ItemList'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        pedirDatos()
            .then((response) => {
                setProductos( response )
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <article className="container mx-auto mt-4 text-xl">
            <ItemList items={productos}/>
        </article>
    )

}