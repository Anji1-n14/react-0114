import {useState } from "react";

const Enquery = () => {


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [emailError,setEmailError] = useState(false)   
    const [mobileError,setMobileError] = useState(false);
    const [addressError,setAddressError] = useState(false);
    const [nameError,setNameError] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault(); 
        console.log("form submitted");
        console.log(e);
        const enquerydata ={
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.address.value,
        }
        console.log(enquerydata);
    }

    const changeNameListener = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length < 15){
            setNameError(false);
            console.log("name should be between 8 and 15 characters");
        }
        else{
            setNameError(true);
        }
    }

   const emailValidation = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);     
        if(!emailPattern){
            console.log("Please enter a valid email");
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }    
    }

    const mobileNoListener = (e) => {
        setMobileNo(e.target.value);
        const mobilePattern = /^[6-9][0-9]{9}$/.test(e.target.value);
        if(!mobilePattern){ 
        console.log("mobile no should be 10 digits and start with 6,7,8,9");
        setMobileError(true)
        }
        else {
        setMobileError(false);
        }   
    }

    const textLength = (e) => {
        console.log(e.target.value);
        setAddress(e.target.value);
        if(e.target.value.length > 256 ){
            console.log("address should be less than 256 characters");
            setAddressError(true);}
            else{
            setAddressError(false);
        }
    }

    return(
        <div>
            <h1>Enquiry Page</h1>
            <form onSubmit={onSubmitForm} action="data-form">
            <div>
                <label htmlFor="name">name</label>
                <input onChange={changeNameListener}
                id="name" value={name} name="name" type="text" />
                { nameError && <span style={{color: "red"}}>Name should be between 8 and 15 characters</span>}
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input  onChange={emailValidation} id="email" value={email} name="email" type="text" />
                {emailError && <span style={{color: "red"}}>Please enter a valid email</span>}
            </div>

            <div>
                <label  htmlFor="name">address</label>
               <textarea onChange={textLength} id="address" name="address" rows="4" cols="50" value={address}></textarea>
                {addressError && <span style={{color: "red"}}>Address should be less than 256 characters</span>}
            </div>
            
            <div>
                <label htmlFor="mobile">mobile no</label>
                <input onChange={mobileNoListener}  value={mobileNo} id="mobile" type="text" />
                {mobileError && <span style={{color: "red"}}>Please enter a valid mobile number</span>}
            </div>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
} 
export default Enquery;