import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const FetchCard = () =>{

    const [viewType,setViewType] = useState('LIST');
    const [articleList,setArticleList] = useState([]);


    const onViewChance =(e)=>{
        e.pre
        const newViewType = viewType === 'LIST'?'TITLE':'List';
        setViewType(newViewType)
    }

    const fetchData = async() =>{

       try{ 
             const res = await axios.get("https://fakestoreapi.com/products");
              setArticleList(res.data);
              console.log(res.data);
       }catch(err){
        console.log("Error fetching tha article API",err);
       }
    }

    useEffect(()=>{
        fetchData()},[]);

    return(
        <div>
            <h1>Cards</h1>
            <img src="" />
            <button onClick={onViewChance}>{viewType === "LIST" ? "Tile":"List"} view</button>
            <div style={{
                display : "flex",
                flexDirection : viewType === "LIST"? "column" : "row",
                justifyContent : "space-around"
                
            }}>
                  {
                articleList.map((card,index)=>(
                    <Card key ={index} {...card}  viewType ={viewType} />                  
                ))
            }
            </div>
          
        </div>
    )
}
export default FetchCard;