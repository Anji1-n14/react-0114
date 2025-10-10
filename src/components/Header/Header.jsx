import {use, useContext} from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
 
 import {Appctx} from '../../App.jsx';


const HeaderComponent= () =>{
//     const ctx = useContext(Appctx);
// console.log(ctx);
const data = useSelector((state)=>state); 
console.log(data);
    return (
        <div className='header-wrapper'>
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
                {/* <li>
                    <Link to={"/articles"}>ArticleDetails</Link>
                </li> */}
                <li>
                    <Link to={"/articles"}>Articles</Link>
                </li>
                 <li>
                    <Link to={"/tables"}>TabelView</Link>
                </li>
                
                
            </ul>
            <ul className='navbar' style={{float:"right"}}>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                {/* {ctx.state.isLoggedIn &&
                <li>{ctx.state.userdetails?.name}</li>
                } */}
                
                </ul>
        </div>
    )
}
export default HeaderComponent;