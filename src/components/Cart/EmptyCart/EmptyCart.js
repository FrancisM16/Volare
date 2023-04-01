import empty from "../../../assets/empty.svg";
import { Link } from "react-router-dom";

export const EmptyCart = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid justify-items-center space-y-10">
                <img src={empty} alt="empty" />
                <div className="grid justify-items-center space-y-4">
                    <h2>No tienes productos agregados</h2>
                    <Link to="/" className="border rounded-md py-2 px-4 text-white bg-violet-900 hover:bg-black text-center">
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}