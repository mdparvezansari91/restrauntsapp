
import { useState } from "react";



const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        setQuantity(prev => Math.max(prev - 1, 0)); // Prevent quantity from going below 1
    };

    const increment = () => {
        setQuantity(prev => prev + 1); // Increment the quantity
    };

    return (
        <div className="flex items-center space-x-4">
            <button 
                onClick={decrement} 
                disabled={quantity <= 0} 
                className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:opacity-50`}
            >
                -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button 
                onClick={increment} 
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                +
            </button>
        </div>
    );
}

export default Counter;