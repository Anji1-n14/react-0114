import React from "react";
import Header from "../../components/Header";
import HeaderComponent from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class AboutUs extends React.Component{

    constructor(){
        console.log("contructer");
        super();
    }

 render(){
    console.log("render");
    return(
        <div>
        <h1>HI about us</h1>
        </div>
        
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