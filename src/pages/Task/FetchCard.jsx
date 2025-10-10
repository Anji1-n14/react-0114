import { useEffect, useState, useContext } from "react";
import Card from "./Card";
import axios from "axios";
import {Appctx} from '../../App.jsx';

const FetchCard = () =>{
    const ctx = useContext(Appctx);
    

    const [viewType,setViewType] = useState('LIST');
    // const [articleList,setArticleList] = useState([]);


    const onViewChance =(e)=>{
    
        const newViewType = viewType === 'LIST'?'TITLE':'List';
        setViewType(newViewType)
    }

    const fetchData = async() =>{

       try{ 
             const res = await axios.get("https://fakestoreapi.com/products");
            //   setArticleList(res.data);
              ctx.setState({
                ...ctx.state, articleList: res.data});
            //   console.log(res.data);
       }catch(err){
        console.log("Error fetching tha article API",err);
       }
    }

    useEffect(()=>{
        if(ctx.state.articleList.length === 0)
        fetchData()},[]);

    return(
        <div>
            <h1>Cards</h1>
            
            <button onClick={onViewChance}>{viewType === "LIST" ? "Tile":"List"} view</button>
            <div style={{
                display : "flex",
                flexDirection : viewType === "LIST"? "column" : "row",
                justifyContent : "space-around"
                
            }}>
                  {
                ctx.state.articleList.map((card,index)=>(
                    <Card key ={index} {...card}  viewType ={viewType} />                  
                ))
            }
            </div>
          
        </div>
    )
}
export default FetchCard;