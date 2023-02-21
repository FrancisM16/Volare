import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CartWidget = () => {
    return (
        <button className="py-4 px-8 relative border-transparent font-default">
            <FontAwesomeIcon icon={solid('cart-shopping')} size='lg'/>
            <span className="absolute inset-0 object-right-top ml-4">
                <div className="inline-flex px-1.5 py-0.5 rounded-full text-xs bg-violet-900 text-white">
                    4
                </div>
            </span>
        </button>
    )
}