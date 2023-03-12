import { Item } from "./Item/Item"

export const ItemList = ({ items, category }) => {
    return (
        <div className="container mx-auto py-6">
            {
                category
                    ?
                    <div className="space-y-2 px-4 md:px-0">
                        <h2 className="capitalize text-xl">{category}</h2>
                        <hr />
                    </div>
                    : ""
            }
            <div className="grid gap-8 px-4 my-8 md:p-0 md:grid-cols-2 lg:grid-cols-4">
                {items.map((producto) => <Item key={producto.id} item={producto} />)}
            </div>
        </div>
    )
}