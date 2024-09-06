import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css";

function CartWidget() {
    return(
        <div className="relative">
            <FaShoppingCart className="size-11" />
            <span className="absolute top-0 right-0 bg-orange-200 text-white text-xs py-2 px-6 rounded-full badge">4</span>
        </div>
    );
};

export default CartWidget;