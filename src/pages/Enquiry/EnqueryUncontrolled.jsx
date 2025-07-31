import React, { useRef } from 'react';
const  EnqueryUncontrolled =() =>{
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const mobileNoRef = useRef();
    const submitData = (e) => {
        e.preventDefault();
        console.log("form submitted");  
        console.log(nameRef.current.value);
        const enquerydata = { 
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            mobileNo: mobileNoRef.current.value
        };
        console.log(enquerydata);
    };
    return(
        <div>
            <h1>Enquiry Uncontrolled Component</h1>
            <form onSubmit={submitData} action="">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" ref={nameRef}></input>
                </div>
                  <div>
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" ref={emailRef}></input>
                </div>
                  <div>
                    <label htmlFor="address">address:</label>
                    <textarea name="address" id="address" ref ={addressRef}></textarea>
                </div>
                  <div>
                    <label htmlFor="mobileNo">mobileNo:</label>
                    <input type="text" name="mobileNo" id="mobileNo" ref={mobileNoRef}></input>
                </div>
                <input type="submit" value="Submit" ></input> 
            </form>
                  
        </div>
    )
}
export default EnqueryUncontrolled;