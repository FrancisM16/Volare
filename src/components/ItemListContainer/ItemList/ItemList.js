import { Item } from "./Item/Item"

export const ItemList = ({ items }) => {
    return (
        <div>
            <h2>Productos</h2>
            <hr />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
                {items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>
        </div>
    )
}