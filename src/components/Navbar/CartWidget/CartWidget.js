import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const CartWidget = () => {
    return (
        <button class="py-4 px-8 relative border-transparent">
            <FontAwesomeIcon icon={solid('cart-shopping')} size='lg'/>
            <span class="absolute inset-0 object-right-top ml-4">
                <div class="inline-flex px-1.5 py-0.5 rounded-full text-xs bg-violet-900 text-white">
                    4
                </div>
            </span>
        </button>
    )
}