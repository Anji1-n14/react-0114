const BlogCard = (propes) =>{
 
        return(
            <div
            style={{
                width:"300px",
                border:"1px solid black",
                height:"500px",
                overflow:"hidden"
               
            }}>
                <img style={{width: "100%"}} src={propes.image}/>
                <div>
                    <h1>{propes.age}</h1>
                    <h1>{propes.name}</h1>
                </div>
            </div>

        )
        return(
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
                marginBottom: "20px"
            }}>
                <img src={propes.image} style={{width: "100%"}} />
                <div>
                    <h1>{propes.age}</h1>
                    <h1>{propes.name}</h1>
                </div>
            </div>
        )
};

export default BlogCard;