import { Link ,matchPath,useLocation } from "react-router-dom";
import {routes} from "../App"

const BreadCrum= () => {
    const path =useLocation().pathname;
    const paths =path.split("/").filter(p => p);
    console.log(paths);
    return(
        <div>
            <nav>
           <Link to={"/"}>Home</Link>
           {
            paths.map((path,index) => {
                  const route =`/${paths.slice(0,index+1).join("/")}`
                  const routeName =routes.find((x)=>matchPath(x.path,route))?.name;
                  console.log(routeName);
                  return( 
                    <>
                    /<Link to={route} >{routeName}</Link></>
                  
                  )
                  
            })

            

            }
           </nav>
           
          </div>
    )

}
export default BreadCrum;