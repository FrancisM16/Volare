import { Item } from "./Item/Item"

export const ItemList = ({ items }) => {
    return (
        <div className="container mx-auto py-6">
            <h2 className="px-4 text-xl md:px-0">Productos</h2>
            <div className="grid gap-8 px-4 my-8 md:p-0 md:grid-cols-2 lg:grid-cols-4">
                {items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>
        </div>
    )
}