import Image from "next/image";
import Style from "./HeroSection.module.css"
import Link from "next/link";
const HeroSection = ()=>{
    return(
        <div className={`${Style.container}`}>
            <div className={`${Style.text}`}>
                <h1 className={`${""}`}>Be the Quickest in your food Delivery</h1>
                <p>we are always ready to fill your belly with delicious food and with quick delivery</p>
                <div className={`${Style.text}`}>
                    <button><Link href={"#"}>Find Restraunt</Link></button>
                    <button><Link href={"#"}>Order Food</Link></button>
                </div>
            </div>
            <div>
                <Image
                width={800}
                height={800}
                src={"/images/burgerImage.jpg"}
                alt="Burger"
                />
            </div>
        </div>
    )
}

export default HeroSection;