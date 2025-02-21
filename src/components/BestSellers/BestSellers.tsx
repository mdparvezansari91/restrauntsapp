import {restaurantMenu} from "@/app/lib/data";
import Image from "next/image";
import style from "./BestSellers.module.css"



const BestSellers = ()=>{
    const bestSellingItems = restaurantMenu.filter(item=>item.isBestSeller)

    return (
        <>
       <>
            <div className="p-10 bg-slate-400">
                <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
                <div className={`${style.scrollablecontainer}`}>
                <ul className="list-disc pl-5 flex gap-10 ">
                    {bestSellingItems.map((item) => (
                        <li key={item.id} className="text-lg">
                            <div className="w-[200px] h-[200px] relative">
                            <Image
                            fill
                            className="border rounded object-cover p-1"
                            src={item.image}
                            alt={item.name}
                            />
                            </div>
                            <div className="font-bold">{item.name}</div>
                            <div className="text-gray-700">${item.price.toFixed(2)}</div>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </>
        </>
    )
}

export default BestSellers;