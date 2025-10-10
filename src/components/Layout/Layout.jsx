import { Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import Footer from "../Footer/Footer";
import BreadCrum from "../BreadCrum";

const Layout = () => {
    return(
        <div>
           <HeaderComponent />
           <BreadCrum />
           <Outlet />
           <Footer />
        </div>
    )
}
export default Layout;