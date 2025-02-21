import Link from "next/link";
import style from "./Navar.module.css"
const Navbar = ()=>{
    
    return (
        <>
        <div className={`${style.container}`}>
            <div className={`${style.logo}`}>
                <p>Logo</p>
            </div>
            <div>
                <ul className={`${style.menu}`}>
                    <li><Link href={`/`}>Home</Link></li>
                    <li><Link href={`/menu`}>Menu</Link></li>
                    <li>Contact</li>
                    <li>Blogs</li>

                </ul>
            </div>
            <div className={`${style.auth}`}>
                <p>Login</p>
                <p>Registration</p>
            </div>
        </div>
        </>
    )
}

export default Navbar;