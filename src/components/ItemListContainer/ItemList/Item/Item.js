import { Link } from "react-router-dom"

export const Item = ({ item }) => {
    return (
        <div className="border border-slate-200 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-indigo-50 sm:hover:scale-0 md:hover:scale-105 font-default">
            <div className="px-4 pt-4">
                <img className="rounded-md" src={item.pictureUrl} alt={item.title} />
            </div>
            <div className="p-4 text-base">
                <h4>{item.title}</h4>
                <p>Marca: {item.brand}</p>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-2xl text-indigo-900">${item.price}</p>
                    <Link to={`/detail/${item.id}`} className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black">Ver más</Link>
                </div>
            </div>
        </div>
    )
}
