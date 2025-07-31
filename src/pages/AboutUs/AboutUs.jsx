import React from "react";

class AboutUs extends React.Component{

    constructor(){
        console.log("contructer");
        super();
    }

 render(){
    console.log("render");
    return(
        <>
        <h1>HI about us</h1>
        </>
    )
        
    }
   
    componentDidMount(){
        console.log("componentDidMount");
    }
 
    componentDidUpdate(){
        console.log("componentDidUpdate"); 
    }
}

export default AboutUs;