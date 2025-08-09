import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return(
        <div>
           <HeaderComponent /> 
           <Outlet />
           <Footer />
        </div>
    )
}
export default Layout;