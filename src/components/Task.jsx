import Header from "./Header";
import Submit from "./Submit";  
import Content from "./Contenet";
const Task =()=>{

    return(
        <div style={
            {
                backgroundImage: "url('../../src/images/hotel.jfif')",
                backgroundRepeat : "no-repeat",
                backgroundSize : "cover",
                height : "100%",
                width : "100%",
                border : "2px solid black"
                ,backgroundColor : "yelloorange",
            }
        }> 
        <h1>Task Component</h1>
            <div><Header /></div>
            <div><Content /></div>
           
            <div >
            <Submit/>
            </div>
              
        </div>
    );

}
export default Task;