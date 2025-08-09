import './Header.css'
import { Link } from "react-router-dom";
const HeaderComponent= () =>{
    return (
        <div>
            <ul className='navbar'>
                <li>
                    {/* <a href="/">Home</a>  */}
                    <Link to={"/"}>Home</Link>              
               </li>
                <li>
                    {/* <a href="/about-us">About Us</a> */}
                    <Link to={"/about-us"}>AboutUs</Link>
                </li>
                <li>
                    {/* <a href="/contact-us">Contact us</a> */}
                    <Link to={"/contact-us"}>ContentUs</Link>
                </li>
                <li>
                    {/* <a href="/enquery">Enequery</a> */}
                    <Link to={"/enquery"}>Enequery</Link>
                </li>
            </ul>
        </div>
    )
}
export default HeaderComponent;