import { Item } from "./Item/Item"

export const ItemList = ({ items, category }) => {
    return (
        <div className="container mx-auto py-6">
            {
                category
                    ? 
                    <div className="space-y-2">
                        <h2 className="capitalize text-xl">{category}</h2>
                        <hr />
                    </div>
                    : ""
            }
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 my-8">
                {items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>
        </div>
    )
}